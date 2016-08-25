import React from 'react';
import TextField from 'material-ui/TextField';
import FontIcon from 'material-ui/FontIcon';
import IconButton from 'material-ui/IconButton';
import ResourceTable from './resourcetable.jsx';
import ResourceCard from './resourcecard.jsx';
import MentorsDropDown from './MentorsDropDown.jsx';
import Paper from 'material-ui/Paper';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import {blue900} from 'material-ui/styles/colors';
import AddResourceForm from './addresourceform.jsx';
import {orange800} from 'material-ui/styles/colors';

const addStyle = {
  marginRight: 20,
};

const customContentStyle = {
  width: '100%',
  maxWidth: 650,
};

export default class SearchBox extends React.Component {
  constructor (props) {
    super(props);
    this.state= {
      data: [],
      empObject:{},
      searchID:"",
      searchMentor:"",
      mentorsList:[],
      open: false,
    },
    this.handleIDText = this.handleIDText.bind(this);
    this.handleSearchID = this.handleSearchID.bind(this);
    this.getEmpDetail = this.getEmpDetail.bind(this);
    this.handleMentorChange = this.handleMentorChange.bind(this);
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleOnRequestClose = this.handleOnRequestClose.bind(this);
  };

  componentDidMount() {
    console.log("searchBox componentWillUpdate");
    $.get('/lbgRoute/getAll', function (result) {
      console.log(result);
      this.setState({
        data: result[0],
        mentorsList:result[1]
        })
        console.log(this.state.data);
        console.log(this.state.mentorsList);
    }.bind(this));
  };

  handleIDText(e){
    e.stopPropagation();
    console.log(e.target.value);

    if(e.target.value === "")
    {
      $.get('/lbgRoute/getAll', function (result) {
      console.log(result);
      this.setState({
      data: result[0],
      mentorsList:result[1]
      })
      }.bind(this));
    }

    this.setState({
      searchID: e.target.value
    })
  };

  handleSearchID(){
    var id=this.state.searchID;
    console.log(id);
    if(id !== ""){
      $.get('/lbgRoute/getOneById/'+id, function (result) {
      console.log(result);
        this.setState({
          data: [],
          data:result
        })
        console.log(this.state.data);
      }.bind(this));
    }
    else {
      $.get('/lbgRoute/getAll', function (result) {
        console.log(result);
        this.setState({
          data: result[0],
          mentorsList:result[1]
          })
          //console.log(this.state.data);
          //console.log(this.state.mentorsList);
      }.bind(this));
    }
  };

  getEmpDetail(obj)
  {
    console.log("Got EmpId in getEmpDetail"+obj);
    this.setState({
      empObject: obj
    })
  };

handleMentorChange(index){
  if(index != 0){
    var mentor=this.state.mentorsList[index-1]
    console.log("Index : "+index);
    console.log("mentor : "+mentor);
    if(mentor != undefined){
      $.get('/lbgRoute/allTheEmployeesByMentorName/'+mentor, function (result) {
        console.log(result);
        this.setState({
        data: result
        })
      }.bind(this));
    }
  }

  else {
    $.get('/lbgRoute/getAll', function (result) {
      console.log(result);
      this.setState({
        data: result[0],
        mentorsList:result[1]
      })
        //console.log(this.state.data);
        //console.log(this.state.mentorsList);
    }.bind(this));
  }
};

  handleOpen() {
    this.setState({open: true});
  };

  handleClose() {

  $.get('/lbgRoute/getAll', function (result) {
    console.log(result);
    this.setState({
      data: result[0],
      mentorsList:result[1],
      open: false
    })
  }.bind(this));

  };

  handleOnRequestClose() {
    this.setState({open: false});
  };


  render() {

    return (
      <div className="well">

          <Paper zDepth={1} >
            <div style={{display: 'inline-block', margin: 20}}>
              <TextField
                hintText="Enter ID"
                floatingLabelText="Search by EmpID"
                onChange={this.handleIDText}
              />
              <IconButton iconStyle={{color:blue900 , fontSize:'30px'}} iconClassName="material-icons" tooltip="Search" onClick={this.handleSearchID}>search</IconButton>
            </div>

            <div  className="dropdowndiv" style={{display: 'inline-block', margin: 10}}>
              <MentorsDropDown style={{width:300}} mentorsArray={this.state.mentorsList} onMentorChange={this.handleMentorChange}/>
            </div>

            <div style={{display: 'inline-block', margin: 20, float:'right'}} >
                <FloatingActionButton style={addStyle} onTouchTap={this.handleOpen}>
                  <ContentAdd />
                </FloatingActionButton>
              <Dialog
                title="Add New Resource"
                contentStyle={customContentStyle}
                titleStyle={{backgroundColor:orange800}}
                modal={true}
                open={this.state.open}
                autoScrollBodyContent={true}
                onRequestClose={this.handleOnRequestClose}
              >
                <AddResourceForm onButtonClick={this.handleClose} />
              </Dialog>
            </div>
          </Paper>

        <br />
        <div className="row">
          <div className="col-lg-8">
            <ResourceTable resourceArray={this.state.data} chosenEmpView={this.getEmpDetail} />
          </div>
          <div className="col-lg-4">
            <ResourceCard empToDisplay={this.state.empObject} />
          </div>
        </div>
      </div>
    )
  }
}

import React from 'react';
import TextField from 'material-ui/TextField';
import FontIcon from 'material-ui/FontIcon';
import IconButton from 'material-ui/IconButton';
import ResourceTable from './resourcetable.jsx';
import ResourceCard from './resourcecard.jsx';
import MentorsDropDown from './MentorsDropDown.jsx';
import Paper from 'material-ui/Paper';
import {blue900} from 'material-ui/styles/colors';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

export default class SearchBox extends React.Component {
  constructor (props) {
    super(props);
    this.state= {
      data: [],
      empObject:{},
      searchID:"",
      searchMentor:"",
      mentorsList:[],
    },
    this.handleIDText = this.handleIDText.bind(this);
    this.handleSearchID = this.handleSearchID.bind(this);
    this.getEmpDetail = this.getEmpDetail.bind(this);
    this.handleMentorChange = this.handleMentorChange.bind(this);
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


//search by mentor
/*
  handleMentorText(e){
    e.stopPropagation();
    console.log(e.target.value);
    this.setState({
      searchMentor: e.target.value
    })
  };
*/
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
  render() {

    return (
      <div className="well">

          <Paper zDepth={1} >
          <div style={{display: 'inline-block',margin: 20}}>
            <TextField
              hintText="Enter ID"
              floatingLabelText="Search by EmpID"
              onChange={this.handleIDText}
            />
            <IconButton iconStyle={{color:blue900 , fontSize:'30px'}} iconClassName="material-icons" tooltip="Search" onClick={this.handleSearchID}>search</IconButton>
            </div>
            <div style={{display: 'inline-block',margin: 20}}>
              {/*<TextField
                hintText="Enter Mentor Name"
                floatingLabelText="Search by Mentor"
                onChange={this.handleMentorText}
              />
              <IconButton iconStyle={{color:blue900 ,fontSize:'30px'}} iconClassName="material-icons" tooltip="Search" onClick={this.handleSearchMentor}>search</IconButton>
              */}
              <MentorsDropDown mentorsArray={this.state.mentorsList} onMentorChange={this.handleMentorChange}/>
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

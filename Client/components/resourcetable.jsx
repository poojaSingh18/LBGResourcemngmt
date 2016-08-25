import React from 'react';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import FlatButton from 'material-ui/FlatButton';
import Paper from 'material-ui/Paper';
import FontIcon from 'material-ui/FontIcon';
import {yellow600} from 'material-ui/styles/colors';


export default class ResourceTable extends React.Component {
    constructor (props) {
      super(props);
      this.state= {
        dataArray : [],
        chosenIdValue: ""
      },
      console.log("In constructor dataArray : "+this.state.dataArray);
      this.handleIdClick = this.handleIdClick.bind(this);
    };

    handleIdClick(rowIndex) {
      console.log(this.props.resourceArray[rowIndex]);
      return this.props.chosenEmpView(this.props.resourceArray[rowIndex]);
    };

    render()
    {
      var rows=[];
      console.log("resource array "+this.props.resourceArray);
      console.log(this.state.dataArray);

      this.props.resourceArray.forEach(function (record, i) {
        if(Object.keys(record).length === 0){
          rows.push(
            <TableRow key={i}>
              <h1 style={{textAlign: 'center', color: 'firebrick'}}><i style={{color: yellow600, fontSize: '40px'}} className="material-icons">error</i> No Data Found..!!</h1>
            </TableRow>
          );
        }
        else{
          rows.push(
            <TableRow key={i} value={record['Emp No']}>
              <TableRowColumn style={{whiteSpace: 'inline'}}><button className="btn btn-primary" onClick={this.handleIdClick.bind(this, i)}>{record['Emp No']}</button></TableRowColumn>
              <TableRowColumn style={{whiteSpace: 'inline'}} >{record['Emp Name']}</TableRowColumn>
              <TableRowColumn style={{whiteSpace: 'inline'}} >{record['Mentor']}</TableRowColumn>
              <TableRowColumn style={{whiteSpace: 'inline'}} >{record['Agile Trainings Complete? (Y/N)']}</TableRowColumn>
              <TableRowColumn style={{whiteSpace: 'inline'}} >{record['BFSI Training Courses Complete? (Y/N)']}</TableRowColumn>
              <TableRowColumn style={{whiteSpace: 'inline'}} >{record['Skill Gap']}</TableRowColumn>
            </TableRow>
          );
        }
      }.bind(this));
      return (
 <Paper zDepth={1} >
 <Table>
            <TableHeader displaySelectAll={false} adjustForCheckbox={false} >
              <TableRow>
                <TableHeaderColumn style={{whiteSpace: 'inline', fontSize:15}} >ID</TableHeaderColumn>
                <TableHeaderColumn style={{whiteSpace: 'inline', fontSize:15}} >Name</TableHeaderColumn>
                <TableHeaderColumn style={{whiteSpace: 'inline', fontSize:15}} >Mentor</TableHeaderColumn>
                <TableHeaderColumn style={{whiteSpace: 'inline', fontSize:15}} >Agile</TableHeaderColumn>
                <TableHeaderColumn style={{whiteSpace: 'inline', fontSize:15}} >BFSI</TableHeaderColumn>
                <TableHeaderColumn style={{whiteSpace: 'inline', fontSize:15}} >Skill Gap</TableHeaderColumn>
              </TableRow>
            </TableHeader>

            <TableBody displayRowCheckbox={false} >
                {rows}
            </TableBody>
          </Table>
          </Paper>

      )
    };
}

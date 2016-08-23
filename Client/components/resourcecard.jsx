import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FontIcon from 'material-ui/FontIcon';
import {yellow500, green800} from 'material-ui/styles/colors';

export default class ResourceCard extends React.Component {

  render()
  {
    var empTitle = "Employee ID : " + this.props.empToDisplay['Emp No'];
    var mentorName = "Mentor : " + this.props.empToDisplay['Mentor'];
    if(Object.keys(this.props.empToDisplay).length !== 0){
      return(
        <Card>
           <CardHeader
             title={empTitle}
           />
           <CardTitle titleColor={green800} titleStyle={{fontSize:'30px'}} title={this.props.empToDisplay['Emp Name']} subtitle={mentorName} /><hr />
           <CardText>

             <div><span><b>Technology and Skills :</b> </span> {this.props.empToDisplay['Technology/Skills']}</div><br/>
             <div><span><b>Digithon : </b></span> {this.props.empToDisplay['Digithon Cleared? (Y/N/NA)']}</div><br/>
             <div><span><b>Digital Academy Status : </b></span> {this.props.empToDisplay['Digital Academy Complete? (Y/N/NA)']}</div><br/>
             <div><span><b>Digital Academy Type : </b></span> {this.props.empToDisplay['Digital Academy Type']}</div><br/>
             <div><span><b>Digital Academy Completion Date : </b></span> {this.props.empToDisplay['Digital Academy Completion Date']}</div><br/>
             <div><span><b>Agile : </b></span> {this.props.empToDisplay['Agile Trainings Complete? (Y/N)']}</div><br/>
             <div><span><b>BFSI : </b></span> {this.props.empToDisplay['BFSI Training Courses Complete? (Y/N)']}</div><br/>
             <div><span><b>Skill Gap Training Status : </b></span> {this.props.empToDisplay['Skill Gap Trainings Complete? (Y/N)']}</div><br/>
             <div><span><b>Skill Gap : </b></span> {this.props.empToDisplay['Skill Gap']}</div><br/>
           </CardText>
         </Card>
      )
    }
    else{
      return(
        <Card>
           <CardText>
            <i style={{color: yellow500, fontSize: '48px'}} className="material-icons">error</i><h3> Please select an ID to view details. </h3>
           </CardText>
         </Card>
       )
    }
  }
}

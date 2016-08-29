import React from 'react';
import TextField from 'material-ui/TextField';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import DatePicker from 'material-ui/DatePicker';
import RaisedButton from 'material-ui/RaisedButton';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';


const styles = {
  block: {
    maxWidth: 200,
  },
  radioButton: {
    marginBottom: 16,
    marginLeft: 16,
    width: '30%',
  },
};

export default class AddResourceForm extends React.Component {
  constructor (props) {
    super(props);
    this.state= {

    },
    this.handleCancel = this.handleCancel.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  };

  handleCancel(){
    return this.props.onButtonClick();
  };

  handleSubmit(){
    console.log($('#addResourceForm').serialize());

    $.ajax({
      type: 'POST',
      url: '/lbgRoute/addResource/',
      data: $('#addResourceForm').serialize(),
      cache: false,
      complete: function(res){
      if(res.responseText==="success"){
        alert( "New Resource has been Added");
      }
      else{
        alert("Duplicate Employee ID");
      }
      }
    })
      return this.props.onButtonClick();

  };

  render() {
    return (
      <div>
        <form role="form" id="addResourceForm" style={{marginTop: 30}}>
          <TextField
            hintText="Emp ID"
            errorText="This field is required"
            floatingLabelText="What's the Emp ID?"
            style={{marginLeft: 20}}
            id="addID"
            name="Emp No"
          />

          <TextField
            hintText="Emp Name"
            errorText="This field is required"
            floatingLabelText="What's the Emp Name?"
            style={{marginLeft: 20}}
            id="addName"
            name="Emp Name"
          />

          <TextField
            hintText="Mentor Name"
            errorText="This field is required"
            floatingLabelText="Who is the Mentor?"
            style={{marginLeft: 20}}
            id="addMentor"
            name="Mentor"
          />

          <TextField
            hintText="Technology and Skills"
            errorText="This field is required"
            floatingLabelText="Any Technologies or Skills?"
            multiline={true}
            rows={1}
            style={{marginLeft: 20}}
            id="addTechSkills"
            name="Technology/Skills"
          /><br />
          <hr/>

          <div className="well">
            <label>Is Digithon Cleared? </label>
            <RadioButtonGroup id="addDigiCleared" name="Digithon Cleared? (Y/N/NA)" defaultSelected="NA" style={{display: 'flex'}}>
              <RadioButton
                value="yes"
                label="Completed"
                style={styles.radioButton}
              />
              <RadioButton
                value="no"
                label="Incomplete"
                style={styles.radioButton}
              />
              <RadioButton
                value="NA"
                label="NA"
                style={styles.radioButton}
              />
            </RadioButtonGroup>
          </div>

          <div className="well">
            <label>Is Digital Academy Complete? </label>
            <RadioButtonGroup id="addDaComplete" name="Digital Academy Complete? (Y/N/NA)" defaultSelected="NA" style={{display: 'flex'}}>
              <RadioButton
                value="yes"
                label="Completed"
                style={styles.radioButton}
              />
              <RadioButton
                value="no"
                label="Incomplete"
                style={styles.radioButton}
              />
              <RadioButton
                value="NA"
                label="NA"
                style={styles.radioButton}
              />
            </RadioButtonGroup>
          </div>

          <div className="well">
            <label>Digital Academy Type? </label>
            <RadioButtonGroup id="addDaType" name="Digital Academy Type" defaultSelected="NA" style={{display: 'flex'}}>
              <RadioButton
                value="immersive"
                label="Immersive"
                style={styles.radioButton}
              />
              <RadioButton
                value="hybrid"
                label="Hybrid"
                style={styles.radioButton}
              />
              <RadioButton
                value="NA"
                label="NA"
                style={styles.radioButton}
              />
            </RadioButtonGroup>
          </div>


          <div className="well">
            <label>Digital Academy Completion Date: </label>
            <DatePicker id="addDaCompletionDate" name="Digital Academy Completion Date" hintText="Digital Academy Completion Date" />
          </div>
          <hr />

          <div className="well">
            <label>Agile Trainings Complete? </label>
            <RadioButtonGroup id="addAgileStatus" name="Agile Trainings Complete? (Y/N)" defaultSelected="NA" style={{display: 'flex'}}>
              <RadioButton
                value="yes"
                label="Complete"
                style={styles.radioButton}
              />
              <RadioButton
                value="no"
                label="Incomplete"
                style={styles.radioButton}
              />
              <RadioButton
                value="NA"
                label="NA"
                style={styles.radioButton}
              />
            </RadioButtonGroup>
          </div>

          <div className="well">
            <label>Bfsi Trainings Complete? </label>
            <RadioButtonGroup id="addBfsiStatus" name="BFSI Training Courses Complete? (Y/N)" defaultSelected="NA" style={{display: 'flex'}}>
              <RadioButton
                value="yes"
                label="Complete"
                style={styles.radioButton}
              />
              <RadioButton
                value="no"
                label="Incomplete"
                style={styles.radioButton}
              />
              <RadioButton
                value="NA"
                label="NA"
                style={styles.radioButton}
              />
            </RadioButtonGroup>
          </div>
          <hr />

          <div className="well">
            <label>Skill Gap Trainings Complete? </label>
            <RadioButtonGroup id="addSkillGapStatus" name="Skill Gap Trainings Complete? (Y/N)" defaultSelected="NA" style={{display: 'flex'}}>
              <RadioButton
              value="yes"
              label="Complete"
              style={styles.radioButton}
              />
              <RadioButton
              value="no"
              label="Incomplete"
              style={styles.radioButton}
              />
              <RadioButton
              value="NA"
              label="NA"
              style={styles.radioButton}
              />
            </RadioButtonGroup>
          </div>

          <div className="well">
            <TextField
              hintText="Skill Gap"
              floatingLabelText="Any Skill Gaps?"
              multiLine={true}
              rows={3}
              id="addSkillGaps"
              name="Skill Gap"
            />
          </div>
        </form>
        <div style={{float: 'right'}}>
          <RaisedButton
            label="Cancel"
            onTouchTap={this.handleCancel}
            style={{marginRight: 20}}
          />
          <RaisedButton
            label="Submit"
            primary={true}
            onTouchTap={this.handleSubmit}
          />
        </div>
      </div>

    )
  };
}

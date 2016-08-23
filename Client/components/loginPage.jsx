import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
  margin: 40,
};

export default class Login extends React.Component {
  

  render () {
    return (
      <div className="center-form">
        <TextField
          hintText="Enter ADID"
          floatingLabelText="Username" id="username"
        /><br /><br/>
        <TextField
          hintText="Password"
          floatingLabelText="Password"
          type="password" id="password"
        /><br />
        <RaisedButton label="Login" primary={true} style={style} />


        </div>
      );
  }
}

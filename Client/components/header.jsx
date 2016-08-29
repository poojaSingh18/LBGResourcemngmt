import React from 'react';
import IconButton from 'material-ui/IconButton';
import ContactUS from 'material-ui/svg-icons/communication/call';
import FindBranch from 'material-ui/svg-icons/communication/location-on';
import Search from 'material-ui/svg-icons/action/search';
import SvgIcon from 'material-ui/SvgIcon';
import RaisedButton from 'material-ui/RaisedButton';
import Lock from 'material-ui/svg-icons/action/lock';
import FontIcon from 'material-ui/FontIcon';
import ActionHome from 'material-ui/svg-icons/action/home';
import {grey800} from 'material-ui/styles/colors';

export default class Nav extends React.Component {
   render() {

     var LBGLogo = "../img/logo.jpg";
     const styles = {
      tabColor :{backgroundColor:grey800},
        smallIcon: {
          width: 30,
          height: 30,
        },
        small: {
          width: 50,
          height: 50,
          paddingRight: 50,
        }
      };

      return (
        <div>
            <div className="container-fluid" id="nav-primary" style = {styles.tabColor}>
                <div className="row">
                    <div className="container" >
                        <div id="brandText">
                          <img src={LBGLogo} type="image/jpg" /><strong> LBG Resource Management </strong>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      );
    }
  }

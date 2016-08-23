import React from 'react';
import {grey800} from 'material-ui/styles/colors';

export default class FooterAF extends React.Component {
  render(){
  const styles = {
   tabColor :{backgroundColor:grey800}
   }
    return(

        <div className="container-fluid footer-distributed" id="footerAsset" style = {styles.tabColor}>
          <div className="row">
            <div className="container">
                <div className="footer-center"></div>
                <div className="footer-right text-center">

                  <div>
                    <h3>Wipro Digital</h3><br/>
                    <p className="footer-company-name">Wipro Ltd. &copy; 2015</p>
                  </div>

                  <div>
                    <a href="#">www.wiprodigital.com</a>
                  </div>

                </div>
                <div className="footer-left"></div>

            </div>
          </div>
        </div>

    );
  }
}

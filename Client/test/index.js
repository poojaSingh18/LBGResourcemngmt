// import React from 'react';
// import ReactDOM from 'react-dom';
//
// let Hello = () => <span>Hi</span>
//
// ReactDOM.render(<Hello/>, document.querySelector('#root'));
import React from 'react';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import {MainComponent} from '../components/mainComponent.jsx';
import MuiThemeProvider from '../node_modules/material-ui/styles/MuiThemeProvider.js';


ReactDOM.render(
  <MainComponent/>,
  document.querySelector('#root'));
//
// describe('AssetFinanceComponent', () => {
//   it('Page should contain Hire Purchase and Finance Leasing components for different million turnover business with repective details', () => {
//     const wrapper = shallow(<AssetFinanceComponent/>);
//     expect(wrapper.containsAllMatchingElements([
//       <Category1/>,
//       <Category2/>,
//       <Category3/>
//     ])).to.equal(true);
//   });
// });
//
// describe('CorporateAssetFinanceComponent', () => {
//   it('Page should contain Hire Purchase and Finance Leasing components for different million turnover business with repective details', () => {
//     const wrapper = shallow(<CorporateAssetFinanceComponent/>);
//     expect(wrapper.containsAllMatchingElements([
//       <Category>
//     ])).to.equal(true);
//   });
// });

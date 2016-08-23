import React from 'react';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import MainComponent from '../components/mainComponent.jsx';
import Navbar from '../components/navbar.jsx';
import Footer from '../components/footer.jsx';
import {MuiThemeProvider} from 'material-ui/styles/MuiThemeProvider';


describe('MainComponent', () => {
  it('Page should contain header ,navigation,   and footer components with necessary details', () => {
    const wrapper = shallow(<MainComponent/>);
    expect(wrapper.containsAllMatchingElements([
      <Header/>,
      <NavBar/>,
      <Footer/>
    ])).to.equal(true);
  });
});

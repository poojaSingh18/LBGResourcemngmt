var React = require('react');
var {expect} =require('chai');
var { shallow, mount } = require('enzyme');
var {MainComponent} = require('./components');

describe('MainComponent', () => {
  it('Page should contain header ,navigation,  body and footer components with necessary details', () => {
    const wrapper = shallow(<MainComponent/>);
    expect(wrapper.containsAllMatchingElements([
      <Header/>,
      <NavBar/>,
      <Body/>,
      <Footer/>
    ])).to.equal(true);
  });
});

describe('AssetFinanceComponent', () => {
  it('Page should contain Hire Purchase and Finance Leasing components for different million turnover business with repective details', () => {
    const wrapper = shallow(<AssetFinanceComponent/>);
    expect(wrapper.containsAllMatchingElements([
      <Category1/>,
      <Category2/>,
      <Category3/>
    ])).to.equal(true);
  });
});

describe('CorporateAssetFinanceComponent', () => {
  it('Page should contain Hire Purchase and Finance Leasing components for different million turnover business with repective details', () => {
    const wrapper = shallow(<CorporateAssetFinanceComponent/>);
    expect(wrapper.containsAllMatchingElements([
      <Category>
    ])).to.equal(true);
  });
});

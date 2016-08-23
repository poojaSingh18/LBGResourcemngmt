import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import {orange800} from 'material-ui/styles/colors';
import FontIcon from 'material-ui/FontIcon';
import Dashboard from './dashboard.jsx';
import SearchBox from './searchbox.jsx';
""
const styles = {
  tabColor : {backgroundColor : orange800},
  inkBarStyle : {backgroundColor : 'black'},
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
};

export default class TabsExampleControlled extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: 'a',
    };
  }

  handleChange(v) {
    this.setState({
      value: v,
    });
  }


  render() {
    var x = this.handleChange.bind(this)
    return (
      <Tabs
        value={this.state.value}
        onChange={x}
        inkBarStyle = {styles.inkBarStyle}
      >
        <Tab label="Dashboard" icon={<FontIcon className="material-icons">dashboard</FontIcon>}
          value="a" style= {styles.tabColor}>
            <div>
              <Dashboard />
            </div>
        </Tab>
        <Tab label="Search" icon={<FontIcon className="material-icons">search</FontIcon>}
          value="b"  style= {styles.tabColor}>
            <div>
              <SearchBox />
            </div>
        </Tab>
      </Tabs>
    );
  }
}

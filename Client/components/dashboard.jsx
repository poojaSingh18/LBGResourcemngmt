var React = require('react');
var ReactDOM = require('react-dom');
import Paper from 'material-ui/Paper';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import DashboardGraphs from './dashboardgraph.jsx';

const style = {
commonstyle:{
  margin: 20,
  marginLeft:45,
  marginRight:65,
  textAlign: 'center',
  display: 'inline-block'
  },
  agile:{
  height: 100,
  width: 180,
  backgroundColor:'blue'
  },
  mentor:{
  height: 100,
  width: 180,
  backgroundColor:'green'
  },
  graph:{
  height: 100,
  width: 180,
  backgroundColor:'yellow'
  },
  digithon:{
  height: 100,
  width: 180,
  backgroundColor:'orange'
  },
  bfsi:{
  height: 100,
  width: 180,
  backgroundColor:'red'
  }
};

export default class Dashboard extends React.Component {

  render() {
    return (
      <div className="well">
         <div>
            <DashboardGraphs/>
         </div>
      </div>
    )
  }
}

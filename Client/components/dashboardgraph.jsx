import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import Subheader from 'material-ui/Subheader';
import Paper from 'material-ui/Paper';
import AgileGraph from './agilegraph.jsx';
import BfsiGraph from './bfsigraph.jsx';
import DigithonGraph from './digithongraph.jsx';
import MentorGraph from './mentorgraph.jsx';

const styles = {
  div:{
    display: 'flex',
    flexDirection: 'row wrap',
    padding: 20,
    width: '100%'
  },
  paperTopLeft:{
    flex: 3,
    height: 500,
    margin: 5,
    textAlign: 'center',
    padding: 10
  },
  paperTopRight:{
    flex: 3,
    height: 500,
    margin: 5,
    textAlign: 'center',
    padding: 10
  },
  paperBottomLeft:{
    flex: 3,
    height: 500,
    margin: 5,
    textAlign: 'center',
    padding: 10
  },
  paperBottomRight:{
    flex: 3,
    height: 500,
    margin: 5,
    textAlign: 'center',
    padding: 10
  }
};


export default class DashboardGraphs extends React.Component {

  render() {
    return (
      <div className="well">
        <div style={styles.div}>
          <Paper zDepth={2} style={styles.paperTopLeft}>
            <DigithonGraph />
          </Paper>
          <Paper zDepth={2} style={styles.paperTopRight}>
            <AgileGraph  />
          </Paper>
        </div>
        <div style={styles.div}>
          <Paper zDepth={2} style={styles.paperBottomLeft}>
            <BfsiGraph  />
          </Paper>
          <Paper zDepth={2} style={styles.paperBottomRight}>
            <MentorGraph  />
          </Paper>
        </div>
      </div>
    )
  };
}

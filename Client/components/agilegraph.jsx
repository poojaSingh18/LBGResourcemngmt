import React from 'react';
import PieChart from 'react-simple-pie-chart';
import Paper from 'material-ui/Paper';

export default class AgileGraph extends React.Component {
  constructor (props) {
    super(props);
    this.state= {
      data: []
    }
  };

  componentDidMount(){
  console.log("componentWillMount Enter");
  $.get('/lbgRoute/getAgileStats', function (result) {
    console.log("AgileGraph ajax result"+result);
    this.setState({
      data: result
      })
    }.bind(this));
  };

  render() {

  var rows=[];
  this.state.data.forEach(function (result, i) {
   rows.push(

   <div key={i} style={{textAlign:'left',margin: 20}}>
    <Paper style={{height:15, width:15,display:'inline-block', backgroundColor:result['color']}} ></Paper>
    &nbsp; {result['agile']}
    </div>
   )

  });

    console.log(this.state.data.length);
    if(this.state.data.length !== 0){
      return (
        <div>
         <h3>Agile Status Graph</h3>
         <div className="Piesvg">
          <PieChart
            slices={this.state.data}
          />
          <div className="col-md-4" style={{margin: 20}}>
            {rows}
          </div>
        </div>
      </div>
      )
    }
    else{
      return(
        <div>Loading chart...</div>
      )
    }
  };
}

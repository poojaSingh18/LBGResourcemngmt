import React from 'react';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

const styles = {
  customWidth: {
    width: 200,
  },
};

export default class MentorsDropDown extends React.Component {
  constructor (props) {
    super(props);
    this.state= {
      value: 0
    },
    this.handleSelectMentor = this.handleSelectMentor.bind(this);
    this.handleValueReturn = this.handleValueReturn.bind(this);

  }
  handleSelectMentor(e, index, value){
    e.preventDefault();
    this.setState({value : index});
    this.handleValueReturn(index);
  };

  handleValueReturn(index){
    return this.props.onMentorChange(index);
  };

  render(){
    var mentorArr=[];
    this.props.mentorsArray.forEach(function(mentor,i){
      mentorArr.push(<MenuItem key={i+1} value={i+1} primaryText={mentor} />);
    });

    return(
    <DropDownMenu
      value={this.state.value}
      onChange={this.handleSelectMentor.bind(this)}
      style={styles.customWidth}
      autoWidth={false}
    >
        <MenuItem key={0} value={0} primaryText="Select Mentor" />
        {mentorArr}
    </DropDownMenu>
    );
  }


}

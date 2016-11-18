import React from 'react';
import Note from './Note'

class Display extends React.Component{
  render(){
    let notes = this.props.notes.map (note => {
      return (<Note key={note.id} {...note}/>);
    });
    return(
      <ul>
        {notes}
      </ul>
    )
  }
}

export default Display;

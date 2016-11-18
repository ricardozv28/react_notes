import React from 'react';
import Forms from './Forms';
import Display from './Display'

class Notes extends React.Component{
  constructor(props){
    super(props);
    this.createNote = this.createNote.bind(this);
    this.state = { notes:[], id:0 }
  }

  createNote(title,description){
    let id = ++this.state.id;
    this.setState({
      notes:[
        ...this.state.notes,
      { id, title, description}
      ],
      id
    });
  }

    render(){
      return(
        <div>
          <Forms createNote={this.createNote}/>
          <Display notes={this.state.notes} />
        </div>
      )
    }
}

export default Notes;

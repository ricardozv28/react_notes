import React from 'react';

class Forms extends React.Component{
  constructor(props){
    super(props);
    this.addNote = this.addNote.bind(this);
  }


  addNote(e){
    e.preventDefault();
    let title = this.refs.title.value;
    let description = this.refs.description.value;
    this.refs.form.reset();
    this.props.createNote(title,description);
  }

  render(){
    return(
      <form ref="form" onSubmit={this.addNote}>
        <label>Note Title:</label>
        <input ref="title" placeholder='Note Title' />
        <br/>
        <label>Description: </label>
        <input ref="description" placeholder='Write note here...'/>
        <button>Add</button>
      </form>
    )
  }
}

export default Forms

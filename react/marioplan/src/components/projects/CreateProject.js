import React, { Component } from 'react'

export default class CreateProject extends Component {

  state = {
    title: '',
    content: '',
  }

  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white">
          <h5 className="grey-text text-darken-3">Create new project</h5>
          <div className="input-field">
            <label htmlFor="title">Title</label>
            <input type="text" id="title" onChange={this.handleChange} />
          </div>

           <div className="input-field">
            <label htmlFor="content">Project Content</label>
            <textarea id="content" className="materialize-textarea" onChange={this.handleChange}></textarea>
          </div>

          <div className="input-fied">
            <button className="btn pink lighten-1 z-depth-0">
              Create
            </button>
          </div>

        </form>
      </div>
    )
  }

  handleChange = (e) =>{
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleSubmit = (e) =>{
    e.preventDefault();
    console.log(this.state);
  }

}

import React, { Component } from 'react'

export default class ProjectDetails extends Component {
  render() {
    const id = this.props.match.params.id;
    return (
      <div className="container section project-details">
        <div className="card z-depth-0">
          <div className="card-container">
            <span className="card-title">Project Title - {id}</span>
            <p>Lorem ipsum dolor sit amet consectetur andipiscing elit.</p>
          </div>
          <div className="card-action gret lighten-4 grey-text">
            <div>Posted by Jonathan Matheus</div>
            <div>2nd September, 2am</div>
          </div>
        </div>
      </div>
     
    )
  }
}


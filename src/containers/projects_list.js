import React, { Component } from 'react';
import Project from '../components/Projects/project';

//This is a container because it is the most parent Component
//that cares about the piece of state of a Component
//in our app.
//keep track of the state of
// Most parent coomponent that
export default  class ProjectsList extends Component{
  renderProjects(){
    return this.props.projects.map((project) => {
      <li key={project.title} className='list-group-item'>{project.title}</li>
    })
  }



  render(){
    return (
      <ul className="col-md-4 list-group">
        {this.renderProjects()}
        {/* <Project/> */}
      </ul>
    )
  }
  // const projectItems = props.projects.map((project)=> {
  //   return <Project/>
  // });


}

// export default ProjectsList;

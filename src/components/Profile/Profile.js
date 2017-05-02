import React, {Component} from 'react';
// import semantic from 'semantic-ui-react';
import './profile.css';
import ProjectsList from '../Projects/projects_list';
import SkillsList from '../Skills/skills_list';
import AddProjectForm from '../AddProject/add_project_form';
import { connect } from 'react-redux';
// import firebase from 'firebase';
import AddSkillsForm from '../Skills/skills_form';
import { Link } from "react-router";
function mapStateToProps({ userData }){
  return {
    userData
  }
}

const renderUserName = (userData) => {
  return (
          <div>{userData.name}</div>
  )
}

class Profile extends Component {
    render() {
      return (
      <div>
        <div className="userPro">
          <h1>{renderUserName(this.props.userData)}</h1>
            <img className="ui circular image imgPro" src={this.props.userData.photo}></img>
        </div>
        <div>
          <SkillsList />
          {/* <AddProjectForm /> */}
          {/* <AddSkillsForm /> */}
          <ProjectsList />
          {/* <div> */}
            <h1>Inside of the button div</h1>

          {/* </div> */}
        </div>
        <div>
          {this.props.children}
          {/* <Link to='/skills_form'><button  className="btn btn-success">Add Skill</button></Link> */}
        </div>
      </div>
    );
    }
}

export default connect(mapStateToProps)(Profile);

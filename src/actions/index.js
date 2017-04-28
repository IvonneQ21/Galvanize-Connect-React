//Helper functions
import firebase from 'firebase';
import axios from 'axios';

// const Projects = new firebase('https://console.firebase.google.com/project/galvanize-connect-cfd11/database/data')



const addNonExistingUsers = (userObject) => {
  const {displayName, email, photoURL} = userObject;
    let userInFireBase = firebase.database().ref(`users/${displayName}`);
    userInFireBase.once("value").then((snapshot) => {
        if (!snapshot.exists()) {
            userInFireBase.set({name: displayName, email, profilePic: photoURL})
        }
    })
}

const loginRequest = () => {
    let provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('profile');
    provider.addScope('email');
    provider.addScope('https://www.googleapis.com/auth/plus.login')
    return firebase.auth().signInWithPopup(provider).then((res) => {
        const user = res.user;
        addNonExistingUsers(user);
        return user
    }).catch((err) => {
        console.error(err);
    })
}

const getJobsRequest = () => {
  return axios.get('http://service.dice.com/api/rest/jobsearch/v1/simple.json?text=javascript&city=94102&pgcnt=20')
  .then((res) => res.data.resultItemList)
}

//ACTION CREATORS
export const login = (props) => {
    return {type: 'LOGIN', payload: loginRequest()}
}

//Ivonne Working on adding pro to DB

export const addProject = (project) => {
  return {type: 'ADD_PROJECT', payload: project}
}

// export const addProject = (project) => {
//   //NOTE: this is redux thunk function.
//   return dispatch => Projects.push(project);
// }
//Need to work on other routes like fetching the project
// and deleting the project.
//FETching the project
// export const fetchProjects = (project) => {
//   //NOTE: this is redux thunk function.
//   return dispatch => {
//     Posts.on('value', snapshot => {
//       dispatch({
//         type: FETCH_PROJECTS,
//         payload: snapshot.val()
//       })
//     })
//   }
// }
//
// //DEleteing a project
//  export function deleteProject(key){
//    return dispatch => post.child(key).remove();
//  }


export const getJobs = () => {
  console.log('getJobs action creator');
  return {type: 'GET_JOBS', payload: getJobsRequest()}
}

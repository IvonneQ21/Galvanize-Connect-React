import initialState from './initialState';

export default (state = initialState.userData, action) => {
  switch (action.type) {
    case 'LOGIN_PENDING':
      return state;
    case 'LOGIN_FULFILLED':
      return Object.assign({}, state, action.payload)
      case 'LOGIN_REJECTED':
        return state
      case 'ADD_PROJECT':
        return Object.assign({}, state, {projects: state.projects.concat(action.payload)});
        case 'ADD_SKILL':
          return Object.assign({}, state, {skills: state.skills.concat(action.payload)})
      case 'ADD_COHORT':
      return Object.assign({}, state, {
        cohort: action.payload
      })
      break;
      case 'ADD_SOCIAL':
      return Object.assign({}, state, action.payload)
      break;
      case 'FETCH_LINKS':
      return Object.assign({}, state,{
        LinkedIn: action.payload.LinkedIn,
        GitHub: action.payload.GitHub,
        Twitter: action.payload.Twitter
      });
      break;
    default:
      return state
  }
}

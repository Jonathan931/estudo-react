const initState={
  authError: null
}

const authReducer = ( state= initState, action ) =>{
  switch(action.type){
    case 'LOGIN_ERROR':
      return {
        ...state,
        authError: 'Login failed'
      }
    case 'LOGIN_SUCESS':
      console.log('Login sucess');
      return{
        ...state,
        authError: null
      }
    case 'SIGNOUT_SUCCESS':
      console.log('signout sucess');
      return state;
    default:
      return state;
  }
}

export default authReducer;
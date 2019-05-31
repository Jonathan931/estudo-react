const initState = [];

const despesasReducer = (state = initState, action) => {
  switch (action.type) {
    case "LIST_SUCESS_DESPESA":
      console.log(action);
      return action.despesas;
    case "LIST_FAIL_DESPESA":
      //console.log('create project error', action.err);
      return state;
    default:
      return state;
  }
};

export default despesasReducer;

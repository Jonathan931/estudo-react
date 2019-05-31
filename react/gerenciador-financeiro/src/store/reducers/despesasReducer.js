const initState = [];

const despesasReducer = (state = initState, action) => {
  switch (action.type) {
    case "LIST_SUCESS_DESPESA":
      return action.despesas;
    case "LIST_FAIL_DESPESA":
      return state;
    case "CREATE_DESPESA":
      const data = state;
      data.push(action.despesa);
      return data;
    default:
      return state;
  }
};

export default despesasReducer;

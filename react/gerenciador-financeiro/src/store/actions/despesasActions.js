export const createDepesa = despesa => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    firestore
      .collection("projects")
      .add({
        ...despesa
      })
      .then(() => {
        dispatch({ type: "CREATE_DESPESA", despesa });
      })
      .catch(err => {
        dispatch({ type: "CREATE_DESPESA_ERROR", err });
      });
  };
};

export const getDepesa = () => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    firestore
      .collection("despesas")
      .get()
      .then(
        querySnapshot => {
          const despesas = [];
          querySnapshot.forEach(doc => despesas.push(doc.data()));
          console.log(despesas);
          dispatch({ type: "LIST_SUCESS_DESPESA", despesas });
        },
        () => {
          dispatch({ type: "LIST_FAIL_DESPESA", err: "error" });
        }
      );
  };
};

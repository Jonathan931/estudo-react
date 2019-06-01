export const createDespesa = despesa => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    const data = despesa.data.toDate();
    despesa.data = data;
    firestore
      .collection("despesas")
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

export const editDespesa = despesa => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    const data = despesa.data.toDate();
    despesa.data = data;
    firestore
      .collection("despesas")
      .doc(despesa.id)
      .set({
        ...despesa
      })
      .then(() => {
        dispatch({ type: "EDIT_DESPESA_SUCESS" });
      })
      .catch(function(error) {
        dispatch({ type: "EDIT_DESPESA_ERROR" });
      });
  };
};

export const removeDespesa = id => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    firestore
      .collection("despesas")
      .doc(id)
      .delete()
      .then(() => {
        dispatch({ type: "DELETE_DESPESA_SUCESS" });
      })
      .catch(function(error) {
        dispatch({ type: "DELETE_DESPESA_ERROR" });
      });
  };
};

export const getDespesa = () => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    firestore
      .collection("despesas")
      .orderBy("data", "desc")
      .get()
      .then(
        querySnapshot => {
          const despesas = [];
          querySnapshot.forEach(doc =>
            despesas.push({ ...doc.data(), key: doc.id })
          );
          dispatch({ type: "LIST_SUCESS_DESPESA", despesas });
        },
        () => {
          dispatch({ type: "LIST_FAIL_DESPESA", err: "error" });
        }
      );
  };
};

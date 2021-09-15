import { db } from "../Firebase/firebaseConfig";
import { collection, addDoc, doc, updateDoc } from "firebase/firestore";
import { loadNotes } from "../Helpers/loadNotes";
import { types } from "../Types/type";

export const startNewNote = () => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth;
    console.log(uid);

    const newNote = {
      title: "Resolver la Autenticacion de la Aplicacion Primaria",
      body: "Esta tarea debe estar DONE a mas tardar el dia Viernes 17",
      date: new Date().getTime(),
    };

    // Firebase Version 9.0
    try {
      // Estas lineas permiten definir la Creacion de una Base de Datos en Firebase.
      const docRef = await addDoc(collection(db, "users"), newNote);
      console.log("Document written with ID: ", docRef.uid);

      dispatch(activeNote(docRef.uid, newNote));
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };
};

// Esta accion me permite cambiar el estado de la nota a Active.
export const activeNote = (id, note) => ({
  type: types.notesActive,
  payload: {
    id,
    ...note,
  },
});

export const startLoadingNotes = (uid) => {
  return async (dispatch) => {
    const notes = await loadNotes(uid);
    dispatch(setNotes(notes));
  };
};

export const setNotes = (notes) => ({
  type: types.notesLoad,
  payload: notes,
});

// Esta es la accion para Grabar una nota en Firestore desde la App. en el argumento 'note' viene el Id.
export const startSaveNote = (note) => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth;
    console.log(uid);

    if (!note.url) {
      delete note.url;
    }

    const noteToFirestore = { ...note };
    delete noteToFirestore.id;

    // Estas lineas permiten definir la Creacion de una Base de Datos en Firebase.
    const washingtonRef = doc(db, `/users/${note.id}`);

    // Set the "capital" field of the city 'DC'
    await updateDoc(washingtonRef, noteToFirestore);
  };
};

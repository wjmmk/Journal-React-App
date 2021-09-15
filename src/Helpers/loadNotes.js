import { db } from '../Firebase/firebaseConfig'
import { collection, getDocs } from 'firebase/firestore';

export const loadNotes = async (uid) => {

    // Con estas lineas leo la informacion de la DB en Firestore Database.
    const querySnapshot = await getDocs(collection(db, "users"));
    querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data()}`);
    });
     
    const notes = [];

     querySnapshot.forEach(snapHijo => {
         //console.log(snapHijo.data());
         notes.push({
             id: snapHijo.id,
             ...snapHijo.data()
         })
     });

     console.log(notes)

     return notes;
}
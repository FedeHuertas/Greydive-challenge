import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase";

const submitForm = async (data) => {
    try {
      const docRef = await addDoc(collection(db, "form"), data);
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
};

export default submitForm
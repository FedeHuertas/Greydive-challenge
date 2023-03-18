import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";

const getAnswers = async () => {
    const res = [];
    const querySnapshot = await getDocs(collection(db, 'form'));
    querySnapshot.forEach(doc => res.push(doc.data()));
    return res;
};

export default getAnswers;
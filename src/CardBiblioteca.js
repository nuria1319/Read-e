import { db } from "./firebase/firebase";
import {deleteDoc, doc, getDocs} from "@firebase/firestore";
import { collection, query, where } from "firebase/firestore";
import "./Styles/CardBiblioteca.css";

function CardBiblioteca({item}) {

    let id = item.id;
    let thumbnail = item.thumbnail;
    let publishedDate = item.publishedDate;
    let bookTitle = item.bookTitle;
    let author = item.author;
    let category = item.category;


    const removeBook = async () => {

        const bookRef = collection(db, localStorage.getItem('userToken'));

        let docId = ""

        const q = query(bookRef, where("id", "==", id));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            console.log(doc.id, " => ", doc.data());
            docId = doc.id
        });


        await deleteDoc(doc(db, localStorage.getItem('userToken'), docId))

        console.log(id)
        console.log(q)
    }

    return <div className="row card-item-bi">
        <img className="image-bi" src={thumbnail} alt="" />
        <div className="card-text-content-bi">
            <h3 className="title-bi">{bookTitle}</h3>
            <p className="author-bi">{author}</p>
            <p className="category-bi">{category}</p>
            <p className="date-bi">{publishedDate}</p>
        </div>
        <div>
            <button className="removeButton" onClick={removeBook}>Eliminar</button>
        </div>
    </div>


}

export default CardBiblioteca;
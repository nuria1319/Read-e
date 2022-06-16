import { useAuth0 } from "@auth0/auth0-react";
import { db } from "../firebase/firebase";
import {addDoc, collection} from "@firebase/firestore";
import "../Styles/Card.css";

function Card({item}) {

    const {user, isAuthenticated } = useAuth0();

    let id = item.id;
    let thumbnail = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
    let publishedDate = item.volumeInfo.publishedDate;
    let bookTitle = item.volumeInfo.title;
    let author = item.volumeInfo.authors;
    let category = item.volumeInfo.categories;


    const saveBook = async () => {
        await addDoc(collection(db, localStorage.getItem('userToken')), {id, thumbnail, publishedDate, bookTitle, author, category})
    }

    return (
                    <div className="card-item">
                        <img className="image" src={thumbnail} alt="" />
                        <div className="card-text-content">
                            <div className="title">{bookTitle}</div>
                            <div className="author">{author}</div>
                            <div className="category">{category}</div>
                            <div className="date">{publishedDate}</div>
                        </div>

                        {isAuthenticated ? (
                            <button className="saveButton" onClick={saveBook}>Guardar</button>
                        ) : (
                            <></>
                            )}

                    </div>
            )


}
export default Card;
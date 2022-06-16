import {getDocs, collection, doc, deleteDoc} from "@firebase/firestore";
import { db } from "./firebase/firebase";
import {useEffect, useState} from "react";
import {Col, Row} from "react-bootstrap";
import Card from "./Components/Card";
import CardBiblioteca from "./CardBiblioteca";
import Profile from "./Components/Profile";
import "./Styles/Biblioteca.css";


function Biblioteca() {

    const [bookData, setData] = useState([]);

    useEffect( () => {

        async function getData() {

            let arrayBook = []

            const querySnapshot = await getDocs(collection(db, localStorage.getItem('userToken')));

            querySnapshot.forEach((doc) => {
                console.log(doc.id, " => ", doc.data());
                arrayBook.push(doc.data())
            });
            setData(arrayBook)
            console.log(arrayBook)
        }

        getData()

    }, [])


    return <div>
        <Profile/>
    <div className="card-container-bi">
        <div className="card-container-content-bi">
            <Row className='ro d-flex justify-content-center align-items-center'>
                {
                    bookData.map( (item) => {
                        return <div className="col-lg-3 col-md-4 col-sm-8 mb-4" key={item.id}>
                            <CardBiblioteca className="dak" item={item}/>
                        </div>
                    })
                }
            </Row>
        </div>
    </div>
    </div>
}

export default Biblioteca;
import react, {useEffect, useState} from "react";
import Card from "./Components/Card";
import axios from "axios";
import {Col, Row} from "react-bootstrap";
import "./Styles/Novedades.css";

function Novedades() {
    const [bookData, setData] = useState([]);
    useEffect( ()=> {
            axios.get('https://www.googleapis.com/books/v1/volumes?q=getAll&orderBy=newest&key=AIzaSyCUZ31EeEeIo9BnwX0LiCwEfzp3gAObzS4'+'&maxResults=20')
                .then(res=>setData(res.data.items))
                .catch(err=>console.log(err))
    }, [])

    return <div>
            <div className="banner-novedades">
                <div className="titulo-novedades">¡20 Novedades en Google Books!</div>
            </div>
            <div className="card-container-nov">
                <div className="card-container-content-nov">
                    <Row className='ro d-flex justify-content-center align-items-center'>
                        {
                            bookData.map( (item) => {
                                return <div class="col-lg-3 col-md-4 col-sm-8 m-4" key={item.id}>
                                    <Card className="dak" item={item}/>
                                </div>
                            })
                        }
                    </Row>
                </div>
            </div>

    </div>
}
export default Novedades;
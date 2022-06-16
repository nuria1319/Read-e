import react, {useEffect, useState} from "react";
import Carousel from "./Components/Carousel";
import Card from "./Components/Card";
import axios from "axios";
import {useAuth0} from "@auth0/auth0-react";
import {Col, Row} from "react-bootstrap";
import "./Styles/Home.css";
import Select from 'react-select';

function Home() {

    const { user, isAuthenticated} = useAuth0();



    const [search,setSearch] = useState("");
    const [bookData, setData] = useState([]);
    const searchBook = (evt) => {
        if(evt.key==="Enter") {
            axios.get('https://www.googleapis.com/books/v1/volumes?q='+ search + '&key=AIzaSyCUZ31EeEeIo9BnwX0LiCwEfzp3gAObzS4'+'&maxResults=30')
                .then(res=>setData(res.data.items))
                .catch(err=>console.log(err))
        }
    }



    useEffect(() => {
        if(isAuthenticated){
            const load = async () =>{
                const getUserToken = await user.sub
                const mail = await user.email
                const name = await user.name
                const picture = await user.picture

                if(getUserToken !== null && getUserToken !== '' && getUserToken !== undefined){
                    const userToken = getUserToken.split('|').pop()
                    localStorage.setItem('userToken', userToken)
                    console.log("User token")

                    localStorage.setItem('userMail', mail)
                    localStorage.setItem('userName', name)
                    localStorage.setItem('userPicture', picture)

                }else {
                    console.error("Error al obtener token de usuario")
                }
            }
            load()
        }
    },[isAuthenticated])

    const [selectedOption, setSelectedOption] = useState(null);
    const options = [

        { value: 'fiction', label: 'Ficción' },
        { value: 'juvenile', label: 'Juvenil' },
        { value: 'nonfiction', label: 'No Ficción' },
        { value: 'computers', label: 'Tecnología' },
        { value: 'comic', label: 'Comic'},
        { value: 'manga', label: 'Manga'},
        { value: 'self-help', label: 'Autoayuda' },
        { value: 'photography', label: 'Fotografía' },
        { value: 'sports', label: 'Deportes' },
        { value: 'music', label: 'Música' },

    ];

    function filtroPrueba () {

        axios.get('https://www.googleapis.com/books/v1/volumes?q=all+subject:' + selectedOption.value + '&key=AIzaSyCUZ31EeEeIo9BnwX0LiCwEfzp3gAObzS4' + '&maxResults=30')
            .then(res => setData(res.data.items))
            .catch(err => console.log(err))

        console.log(selectedOption.value)

    }


    return (
        <div className="home-page">
            <div className="betw-car-body"></div>
            <Carousel/>

        <div className="search-body">

            <div className="content-search-title">
                <div className="search-title">Busca tu próxima lectura</div>
            </div>



            <div className="search-content d-flex col-sm-8 col-md-12 flex-row justify-content-center">

                <div className="content-search-button">
                    <button className="search-button" onClick={filtroPrueba}>Filtrar</button>
                </div>

                <div className="combobox-style">
                    <Select className="combobox-select"
                        value={selectedOption}
                        onChange={setSelectedOption}
                        options={options}
                    />
                </div>

                <div className="search-input">
                    <input type="text" placeholder="Escribe lo que quieres..." value={search} onChange={e=>setSearch(e.target.value)}
                    onKeyPress={searchBook}/>
                </div>

                <div className="button-search">
                    <button className="button-style">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                             className="bi bi-search" viewBox="0 0 16 16">
                            <path
                                d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                        </svg>
                    </button>
                </div>

            </div>
        </div>

        <div className="card-container">
            <div className="card-container-content">
                <Row className='ro d-flex justify-content-center align-items-center'>
                    {
                        bookData.map( (item) => {
                            return <div className="col-lg-3 col-md-4 col-sm-8 mb-4" key={item.id}>
                                        <Card className="dak" item={item}/>
                            </div>
                        })
                    }
                </Row>
            </div>
        </div>

        <div className="space-card"></div>
    </div>
    )}
export default Home;
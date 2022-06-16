import "../Styles/Carousel.css";

function Carousel() {

    return <div className="carousel-body">

        <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img className="d-block w-100 h-75" src="https://firebasestorage.googleapis.com/v0/b/proyectofinal-ee353.appspot.com/o/ImagenLogo.jpg?alt=media&token=8be680da-a674-4efb-9ff7-1fa2fd07e517" alt="First slide"/>
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100 h-75" src="https://firebasestorage.googleapis.com/v0/b/proyectofinal-ee353.appspot.com/o/imagenNovedades.png?alt=media&token=0eaacd12-73ec-4d3e-a0b8-10d1d741dac0" alt="Second slide"/>
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100 h-75e" src="https://firebasestorage.googleapis.com/v0/b/proyectofinal-ee353.appspot.com/o/imagenBiblioteca.png?alt=media&token=0788abb3-f055-4795-83d3-cb5390b10ffe" alt="Third slide"/>
                </div>
            </div>
        </div>

        <div className="ramp"></div>

    </div>
}

export default Carousel;
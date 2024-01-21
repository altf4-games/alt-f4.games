import { useEffect} from "react";
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.min.js';

const Carousel = () => {
    useEffect(() => {
        const CarouselElement = document.querySelector('#screenshot-carousel')
        const carousel = new bootstrap.Carousel(CarouselElement, {
            interval: 2000,
            touch: false
        })

    return () => {
        carousel.dispose();
    }}, []);

    return (
        <div className="container mx-auto">
            <div id="screenshot-carousel" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active" >
                        <img src="images/SS_01.png" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="images/SS_02.png" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="images/SS_03.png" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="images/SS_04.png" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="images/SS_05.png" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="images/SS_06.png" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="images/SS_07.png" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="images/SS_08.png" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="images/SS_09.png" className="d-block w-100" alt="..." />
                    </div> 
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#screenshot-carousel" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#screenshot-carousel" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
};

export default Carousel;
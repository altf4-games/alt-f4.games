import Carousel from "../components/Carousel";
import GameReviews from "../components/GameReviews";

const Home = () => {
    return (
        <>
            <div className="container text-center mt-4">
                <h1 className="title"> ALTF4-GAMES </h1>
            </div>
            <Carousel />
            <GameReviews />
        </>
    );
};

export default Home;
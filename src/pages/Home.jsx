import Carousel from "../components/Carousel";
import GameReviews from "../components/GameReviews";
import GamesTable from "../components/GamesTable";

const Home = () => {
    return (
        <>
            <div className="container text-center mt-4">
                <h1 className="title"> ALTF4-GAMES </h1>
            </div>
            <Carousel />
            <GameReviews />
            <br></br>
            <GamesTable topGames={true}/>
        </>
    );
};

export default Home;
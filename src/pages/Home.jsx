import Carousel from "../components/Carousel";
import GameReviews from "../components/GameReviews";
import GamesTable from "../components/GamesTable";
import Hero from "../components/Hero";

const Home = () => {
    return (
        <>
            <Hero />
            <Carousel />
            <GameReviews />
            <GamesTable topGames={true}/>
        </>
    );
};

export default Home;
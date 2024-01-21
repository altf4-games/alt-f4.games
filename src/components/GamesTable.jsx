import GameCard from "./GameCard";
import gamesData  from "../assets/games.json";

const GamesTable = ({ topGames }) => {
    const games = topGames ? gamesData.slice(0, 3) : gamesData;
    return (
        <>
            <style>
                {
                    `
                    .card {
                        margin-bottom: 20px;
                    }
                    `
                }
            </style>
            <div className="container">
                <h2 className="text-center mb-4">GAMES</h2>
                <div className="row row-cols-3">
                    {
                        games.map((game) => (
                            <GameCard game={game} />
                        ))
                    }
                </div>
            </div>
        </>
    );
};

export default GamesTable;
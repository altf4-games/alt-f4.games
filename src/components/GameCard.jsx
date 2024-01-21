const Game = {
    title: "",
    description: "",
    image: "",
    link: ""
};

const GameCard = ({ game }) => {
    return (
        <>
            <div className="col">
                <div className="card bg-dark">
                    <img src={game.image} className="card-img-top" alt={game.title} />
                    <div className="card-body">
                        <h5 className="card-title text-white">{game.title}</h5>
                        <p className="card-text text-white-50">{game.description}</p>
                        <a href={game.link} className="btn btn-primary">View Game</a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default GameCard;
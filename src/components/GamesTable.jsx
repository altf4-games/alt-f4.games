const GamesTable = () => {
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
                    <div className="col">
                        <div className="card bg-dark">
                            <img src="https://img.itch.zone/aW1nLzkzMzA4NzEucG5n/315x250%23c/WNAtKz.png" className="card-img-top" alt="Not Alone" />
                            <div className="card-body">
                                <h5 className="card-title text-white">Not Alone</h5>
                                <p className="card-text text-white-50">You're walking home late at night on the streets with a serial killer on the loose.</p>
                                <a href="https://altf4-games.itch.io/not-alone" className="btn btn-primary">View Game</a>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card bg-dark">
                            <img src="https://img.itch.zone/aW1nLzc2MjQ2NzcucG5n/315x250%23c/g5kgej.png" className="card-img-top" alt="Midnight Visitor" />
                            <div className="card-body">
                                <h5 className="card-title text-white">Midnight Visitor</h5>
                                <p className="card-text text-white-50">In this detective horror game, solve a murder mystery within a haunted house.</p>
                                <a href="https://altf4-games.itch.io/midnight-visitor" className="btn btn-primary">View Game</a>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card bg-dark">
                            <img src="https://img.itch.zone/aW1nLzMzMTkzOTYuZ2lm/315x250%23cm/F58ZuA.gif" className="card-img-top" alt="Dead Inside" />
                            <div className="card-body">
                                <h5 className="card-title text-white">Dead Inside</h5>
                                <p className="card-text text-white-50">A short horror experience about being stranded inside your house stuck in a time loop.</p>
                                <a href="https://altf4-games.itch.io/dead-inside" className="btn btn-primary">View Game</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default GamesTable;
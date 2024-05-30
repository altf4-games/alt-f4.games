import ThreeScene from "./ThreeScene";

const Hero = () => {
    const handlePlayNow = () => {
        window.open('https://altf4-games.itch.io', '_blank')
    };

    return (
        <div className="hero">
            <canvas id="bg"></canvas>
            <div className="hero-content">
                <h1>Welcome to ALTF4 Games</h1>
                <p>Explore stunning worlds, epic adventures, and immersive gameplay.</p>
                <button className="cta-btn" onClick={handlePlayNow}>Play Now</button>

            </div>
            <ThreeScene />
        </div>
    );
};

export default Hero;
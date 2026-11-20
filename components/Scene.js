import Sprite from "./Sprite";

// The pixel sea scene on the home page: surface waves, swimming fish, crab on the sand.
export default function Scene() {
  return (
    <div className="scene" role="img" aria-label="Pixel art seabed with fish, a crab and a starfish">
      <div className="waves" />
      <div className="fish" style={{ top: "26%", "--dur": "22s", "--delay": "-4s", left: "15%" }}>
        <Sprite name="fish" scale={5} />
      </div>
      <div className="fish" style={{ top: "50%", "--dur": "32s", "--delay": "-18s", left: "60%" }}>
        <Sprite name="fish" scale={4} palette={{ o: "#7ad7f0", d: "#2a8fb8" }} />
      </div>
      <div className="fish" style={{ top: "38%", "--dur": "40s", "--delay": "-30s", left: "40%" }}>
        <Sprite name="fish" scale={3} palette={{ o: "#c9a0ff", d: "#7a4fc4" }} />
      </div>
      <div className="sand" />
      <div className="crab"><Sprite name="crab" scale={5} /></div>
      <div className="star"><Sprite name="star" scale={4} /></div>
    </div>
  );
}

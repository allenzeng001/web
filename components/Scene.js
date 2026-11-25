import Sprite from "./Sprite";

// Home page scene: a ship and lighthouse above the waterline, fish and treasure below.
export default function Scene() {
  return (
    <div className="scene" role="img" aria-label="Pixel art sea with a sailing ship, a lighthouse, fish, and a treasure chest marked with an X">
      <div className="sun"><Sprite name="sun" scale={6} /></div>
      <div className="cloud" style={{ top: "9%", left: "42%", "--dur": "90s", "--delay": "-20s" }}>
        <Sprite name="cloud" scale={6} />
      </div>
      <div className="cloud" style={{ top: "22%", left: "68%", "--dur": "130s", "--delay": "-70s" }}>
        <Sprite name="cloud" scale={4} />
      </div>

      <div className="waves" />

      <div className="ship"><div className="bob"><Sprite name="ship" scale={6} /></div></div>
      <div className="lighthouse">
        <div className="beam" />
        <Sprite name="lighthouse" scale={6} />
      </div>

      <div className="fish" style={{ top: "54%", "--dur": "26s", "--delay": "-6s", left: "20%" }}>
        <Sprite name="fish" scale={5} />
      </div>
      <div className="fish rev" style={{ top: "63%", "--dur": "34s", "--delay": "-20s", left: "60%" }}>
        <Sprite name="fish" scale={4} palette={{ o: "#7ad7f0", d: "#2a8fb8" }} />
      </div>
      <div className="fish" style={{ top: "71%", "--dur": "44s", "--delay": "-32s", left: "45%" }}>
        <Sprite name="fish" scale={3} palette={{ o: "#d9a441", d: "#9c6a1f" }} />
      </div>

      <div className="sand" />
      <div className="x-mark"><Sprite name="mark" scale={5} /></div>
      <div className="trail" />
      <div className="chest"><Sprite name="chest" scale={5} /></div>
      <div className="crab"><Sprite name="crab" scale={4} /></div>
    </div>
  );
}

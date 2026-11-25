import Sprite from "./Sprite";

// Bubbles rising from the air stone. x nudges each one sideways; y is where it rests if motion is off.
const bubbles = [
  { x: 0, size: 8, dur: "6s", delay: "-1s", y: "30%" },
  { x: 10, size: 6, dur: "7.5s", delay: "-3s", y: "55%" },
  { x: -6, size: 10, dur: "9s", delay: "-5s", y: "74%" },
  { x: 6, size: 6, dur: "6.5s", delay: "-2s", y: "42%" },
  { x: -2, size: 8, dur: "8s", delay: "-6s", y: "64%" },
];

// A big red-and-gold fish tank, like the ones in restaurants.
export default function Scene() {
  return (
    <div className="tank" role="img" aria-label="Pixel art fish tank with a long golden show fish, smaller fish, bubbles, seaweed, a castle and a treasure chest">
      <div className="tank-glass">
        <div className="shine" />
        <div className="shine thin" />

        {/* back row: seaweed */}
        <div className="plant" style={{ left: "4%", "--delay": "-1s" }}><Sprite name="weed" scale={6} /></div>
        <div className="plant" style={{ left: "10%", "--delay": "-2.5s" }}><Sprite name="weed" scale={5} palette={{ k: "#2f9e6b", l: "#7be0a8" }} /></div>
        <div className="plant" style={{ left: "52%", "--delay": "-0.5s" }}><Sprite name="weed" scale={7} /></div>
        <div className="plant" style={{ left: "88%", "--delay": "-3s" }}><Sprite name="weed" scale={6} palette={{ k: "#2f9e6b", l: "#7be0a8" }} /></div>

        {/* air stone + bubbles */}
        <div className="airstone" />
        {bubbles.map((b, i) => (
          <span
            key={i}
            className="bubble"
            style={{ left: `calc(38% + 10px + ${b.x}px)`, width: b.size, height: b.size, bottom: b.y, "--dur": b.dur, "--delay": b.delay }}
          />
        ))}

        {/* the show fish */}
        <div className="fish show" style={{ top: "20%", "--dur": "52s", "--delay": "-14s", left: "30%" }}>
          <div className="bob"><Sprite name="arowana" scale={5} /></div>
        </div>

        {/* smaller fish */}
        <div className="fish" style={{ top: "50%", "--dur": "28s", "--delay": "-6s", left: "20%" }}>
          <Sprite name="fish" scale={4} />
        </div>
        <div className="fish rev" style={{ top: "40%", "--dur": "36s", "--delay": "-20s", left: "62%" }}>
          <Sprite name="fish" scale={3} palette={{ o: "#7ad7f0", d: "#2a8fb8" }} />
        </div>
        <div className="fish rev" style={{ top: "60%", "--dur": "44s", "--delay": "-30s", left: "45%" }}>
          <Sprite name="fish" scale={3} palette={{ o: "#ff6b5b", d: "#a02b23" }} />
        </div>

        {/* gravel and ornaments */}
        <div className="gravel" />
        <div className="ornament castle"><Sprite name="castle" scale={5} /></div>
        <div className="ornament chest"><Sprite name="chest" scale={5} /></div>
        <div className="ornament starfish"><Sprite name="star" scale={3} /></div>
        <div className="ornament crab"><Sprite name="crab" scale={3} /></div>
      </div>
    </div>
  );
}

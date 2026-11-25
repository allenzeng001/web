// Pixel art drawn from text grids. "." is transparent; letters map to palette colors.
// All creatures face RIGHT. Flip them with CSS (see .rev in globals.css) to face left.
const SPRITES = {
  fish: {
    palette: { o: "#ff9f43", d: "#c4661a", w: "#ffffff", k: "#10233f" },
    rows: [
      ".......ddd.....",
      "dd..ooooooood..",
      ".ddd.ooooowkoo.",
      ".ddd.ooooooooo.",
      "dd.ooooooooooo.",
      "dd..ooooooood..",
      ".......dddddd..",
    ],
  },
  // The long, pretty show fish.
  arowana: {
    palette: { g: "#ffd24a", G: "#e8a62a", p: "#fff0b8", d: "#a56a12", r: "#c8372d", k: "#10233f", w: "#ffffff" },
    rows: [
      ".............rrrrrr...............",
      "rr......rrrrrrrrrrrrrrr...........",
      "rrrr......GGGGGGGGGGGGGGGGGGG.....",
      "rrrrrrGgGGgGGgGGgGGgGGgGGgdGwkGg..",
      "..rrrrGggGggGggGggGggGggGgdGggGggg",
      "rrrrrrppgppgppgppgppgppgppdppgpp..",
      "rrrr......ppppppppppppppppppp...d.",
      "rr.......rrrrrrrrrrrrrr.........d.",
      ".............rrrrrr...............",
    ],
  },
  castle: {
    palette: { c: "#9aa0c4", C: "#6f759e", k: "#2b2f55", f: "#c8372d" },
    rows: [
      ".......kff......",
      ".......kf.......",
      "......ckc.......",
      "c.c...cccC..c.c.",
      "cccC..cccC..cccC",
      "cccCc.ckcCc.cccC",
      "cccCccckcCcCcccC",
      "ckcCcCcccCcCcCkC",
      "ckcCcccccCcCcckC",
      "cccCcccCcCcCcccC",
      "cccCccckkCcCcccC",
      "cCcCcCckkCcCcCcC",
      "cccCccckkCcCcccC",
      "cccCccckkCcCcccC",
    ],
  },
  weed: {
    palette: { k: "#1f7a52", l: "#4cc58a" },
    rows: [
      "...k...",
      "....k..",
      ".....k.",
      ".....k.",
      ".....kl",
      ".....kl",
      "....kl.",
      "...kl..",
      "..kl...",
      ".kl....",
      ".kl....",
      ".kl....",
      "..kl...",
      "..kl...",
      "...kl..",
      "....kl.",
      ".....kl",
      ".....kl",
    ],
  },
  crab: {
    palette: { r: "#c8372d", k: "#10233f" },
    rows: [
      "rr........rr",
      "rr.r....r.rr",
      ".rrrrrrrrrr.",
      "rrrkrrrrkrrr",
      ".rrrrrrrrrr.",
      "..r.r..r.r..",
      ".r..r..r..r.",
    ],
  },
  star: {
    palette: { y: "#ffd24a" },
    rows: [
      "....y....",
      "....y....",
      "...yyy...",
      "yyyyyyyyy",
      ".yyyyyyy.",
      "..yyyyy..",
      "..yy.yy..",
      ".yy...yy.",
      ".y.....y.",
    ],
  },
  chest: {
    palette: { k: "#3b2410", b: "#7a4a22", B: "#a8733a", g: "#ffd24a" },
    rows: [
      "..kkkkkkkk..",
      ".kBBBBBBBBk.",
      "kBBBBBBBBBBk",
      "kggggggggggk",
      "kbbbbggbbbbk",
      "kbbbbggbbbbk",
      "kbbbbbbbbbbk",
      "kbbbbbbbbbbk",
      ".kkkkkkkkkk.",
    ],
  },
};

export default function Sprite({ name, scale = 4, palette, label }) {
  const s = SPRITES[name];
  const pal = { ...s.palette, ...palette };
  const w = Math.max(...s.rows.map((r) => r.length));
  const h = s.rows.length;
  const rects = [];
  s.rows.forEach((row, y) => {
    let x = 0;
    while (x < row.length) {
      const c = row[x];
      if (c === ".") { x++; continue; }
      let run = 1;
      while (x + run < row.length && row[x + run] === c) run++;
      rects.push(<rect key={`${x}-${y}`} x={x} y={y} width={run} height={1} fill={pal[c]} />);
      x += run;
    }
  });
  return (
    <svg viewBox={`0 0 ${w} ${h}`} width={w * scale} height={h * scale} shapeRendering="crispEdges"
      role={label ? "img" : undefined} aria-label={label} aria-hidden={label ? undefined : true}>
      {rects}
    </svg>
  );
}

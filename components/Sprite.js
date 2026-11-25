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
  ship: {
    palette: { f: "#c8372d", m: "#3b2410", s: "#f4e8c1", r: "#c8372d", h: "#7a4a22", H: "#a8733a", w: "#f4e8c1" },
    rows: [
      ".........ff........",
      ".........m.........",
      ".........mss.......",
      ".........msss......",
      "......s..mssss.....",
      ".....ss..msrrss....",
      "....sss..mssssss...",
      "...ssss..msrrrrss..",
      "..sssss..mssssssss.",
      ".ssssss..mssssssss.",
      ".........m.........",
      "HHHHHHHHHHHHHHHHHHH",
      ".hhhwhhhwhhhwhhhhh.",
      "..hhhhhhhhhhhhhhh..",
      "...hhhhhhhhhhhhh...",
      ".....hhhhhhhhh.....",
    ],
  },
  lighthouse: {
    palette: { w: "#f4e8c1", r: "#c8372d", g: "#ffd24a", k: "#10233f", s: "#7d8ca3", S: "#566478" },
    rows: [
      "....rrrr....",
      "...rrrrrr...",
      "...kggggk...",
      "...kggggk...",
      "..kkkkkkkk..",
      "...wwwwww...",
      "...rrrrrr...",
      "...wwwwww...",
      "...rrrrrr...",
      "..wwwwwwww..",
      "..rrrrrrrr..",
      "..wwwwwwww..",
      "..rrrrrrrr..",
      "..wwwkwwww..",
      "..wwwwwwww..",
      ".ssssssssss.",
      "sssSsssSSsss",
      "sSsssSssSsss",
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
  mark: {
    palette: { r: "#c8372d" },
    rows: ["rr...rr", ".rr.rr.", "..rrr..", ".rr.rr.", "rr...rr"],
  },
  sun: {
    palette: { y: "#ffd24a" },
    rows: [
      "...yyy...",
      ".yyyyyyy.",
      ".yyyyyyy.",
      "yyyyyyyyy",
      "yyyyyyyyy",
      "yyyyyyyyy",
      ".yyyyyyy.",
      ".yyyyyyy.",
      "...yyy...",
    ],
  },
  cloud: {
    palette: { c: "#fff6dc" },
    rows: [
      "...cccc.....",
      ".ccccccccc..",
      "cccccccccccc",
      ".cccccccccc.",
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

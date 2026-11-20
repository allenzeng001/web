// Pixel art drawn from text grids. "." is transparent; letters map to palette colors.
const SPRITES = {
  fish: {
    palette: { o: "#ff9f43", d: "#c4661a", w: "#ffffff", k: "#07142a" },
    rows: [
      "....dddd.......",
      "..ooooooood..dd",
      ".ooowkoooo.ddd.",
      "oooooooooo.ddd.",
      "ooooooooooo.dd.",
      ".oooooooood..dd",
      "..dddddd.......",
    ],
  },
  crab: {
    palette: { r: "#ff6b5b", k: "#07142a" },
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

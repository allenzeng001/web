import Link from "next/link";
import Scene from "../components/Scene";

// Edit this: a short intro about you.
const intro =
  "Filler intro: hi there! This is where a short intro about you goes: who you are, what you do, and what you love making. Two or three sentences is plenty, and you can swap this out whenever you're ready.";

const sections = [
  { href: "/resume", title: "Resume", text: "Filler text: where I've worked and studied." },
  { href: "/top-5s", title: "Top 5s", text: "Filler text: my rankings of things I like." },
  { href: "/projects", title: "Projects", text: "Filler text: things I've made, free to download." },
  { href: "/photography", title: "Photography", text: "Filler text: pictures I've taken." },
  { href: "/contact", title: "Contact", text: "Filler text: how to reach me." },
];

export default function Home() {
  return (
    <>
      <h1 className="sr">Home</h1>
      <section className="panel hero">
        <p className="intro">{intro}</p>
        <Link href="/contact" className="btn">Say hello</Link>
      </section>

      <Scene />

      <section aria-labelledby="explore">
        <h2 id="explore" className="sr">Pages</h2>
        <div className="grid">
          {sections.map((s) => (
            <Link key={s.href} href={s.href} className="panel tile">
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}

import { top5s } from "../../data/top5s";

export const metadata = { title: "Top 5s" };

export default function Top5s() {
  return (
    <>
      <h1>Top 5s</h1>
      <p className="lead">Filler intro: a line about how you pick these.</p>
      <div className="grid">
        {top5s.map((list) => (
          <section key={list.title} className="panel">
            <h2>{list.title}</h2>
            <ol className="rank">
              {list.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ol>
          </section>
        ))}
      </div>
    </>
  );
}

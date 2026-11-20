import Sprite from "../../components/Sprite";
import { site } from "../../data/site";

export const metadata = { title: "Photography" };

export default function Photography() {
  const url = site.photographyUrl;
  return (
    <>
      <h1>Photography</h1>
      <section className="panel">
        <p>Filler text: my photography will live on its own site. This page will send you there.</p>
        {url ? (
          <a className="btn" href={url} target="_blank" rel="noopener noreferrer">Visit my photography site</a>
        ) : (
          <span className="btn" aria-disabled="true">Link coming soon</span>
        )}
      </section>
      <div className="grid photos" aria-hidden="true">
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <div key={i} className="frame"><Sprite name={i % 2 ? "star" : "fish"} scale={5} /></div>
        ))}
      </div>
    </>
  );
}

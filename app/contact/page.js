import { site } from "../../data/site";

export const metadata = { title: "Contact" };

export default function Contact() {
  return (
    <>
      <h1>Contact</h1>
      <section className="panel">
        <p>The best way to reach me is by email. I usually reply within a few days.</p>
        <a className="btn" href={`mailto:${site.email}`}>Email {site.email}</a>
      </section>
      <section className="panel">
        <h2>Elsewhere</h2>
        <ul className="plain">
          {site.links.map((l) => (
            <li key={l.label}><a href={l.href}>{l.label}</a></li>
          ))}
        </ul>
      </section>
    </>
  );
}

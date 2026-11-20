import { projects } from "../../data/projects";

export const metadata = { title: "Projects" };

export default function Projects() {
  return (
    <>
      <h1>Projects</h1>
      <p className="lead">Filler intro: a line about what you build. Each project has files you can download.</p>
      <div className="stack">
        {projects.map((p) => (
          <section key={p.title} className="panel">
            <h2>{p.title}</h2>
            <p>{p.description}</p>
            <div className="files">
              {p.files.map((f) => (
                <a key={f.href + f.name} className="btn small" href={f.href} download>
                  Download {f.name}
                </a>
              ))}
            </div>
          </section>
        ))}
      </div>
    </>
  );
}

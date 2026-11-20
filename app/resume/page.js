import { site } from "../../data/site";

export const metadata = { title: "Resume" };

export default function Resume() {
  return (
    <>
      <h1>Resume</h1>
      <section className="panel">
        <p>Filler text: a sentence or two introducing your experience. Replace <code>public/resume.pdf</code> with your own PDF to update the file below.</p>
        <a className="btn" href={site.resumeFile} download>Download resume</a>
      </section>
      <section className="panel viewer">
        <iframe src={site.resumeFile} title="Resume preview" />
        <p className="note">Can't see the preview? Use the download button above.</p>
      </section>
    </>
  );
}

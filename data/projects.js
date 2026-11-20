// Put downloadable files in public/downloads/, then list them here.
// A file at public/downloads/report.pdf has href "/downloads/report.pdf".
export const projects = [
  {
    title: "Project one",
    description: "Filler description. Say what this project is, why you made it, and what a visitor gets in the download.",
    files: [{ name: "project-one.zip", href: "/downloads/project-one.zip" }],
  },
  {
    title: "Project two",
    description: "Filler description. A second project with a single text file attached.",
    files: [{ name: "project-two.txt", href: "/downloads/project-two.txt" }],
  },
  {
    title: "Project three",
    description: "Filler description. Projects can have more than one file.",
    files: [
      { name: "project-three-notes.txt", href: "/downloads/project-three-notes.txt" },
      { name: "project-one.zip", href: "/downloads/project-one.zip" },
    ],
  },
];

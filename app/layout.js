import { Press_Start_2P, Pixelify_Sans } from "next/font/google";
import Nav from "../components/Nav";
import { site } from "../data/site";
import "./globals.css";

const display = Press_Start_2P({ weight: "400", subsets: ["latin"], variable: "--font-display" });
const body = Pixelify_Sans({ subsets: ["latin"], variable: "--font-body" });

// Browser tab titles: just the page name, like "Resume" (no site name).
export const metadata = {
  title: { default: "Home", template: "%s" },
  description: site.tagline,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>
        <Nav />
        <main className="wrap">{children}</main>
        <div className="waves" aria-hidden="true" />
        <footer className="foot">
          <p>{site.name}. Filler footer text.</p>
        </footer>
      </body>
    </html>
  );
}

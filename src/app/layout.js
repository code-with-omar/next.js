import Navbar from "./components/Navbar";
import "./globals.css";
// export const metadata = {
//   title: "Learning Next.js",
//   description: "Here I try to Learn Next.js for my carrier build-up",
// };
export const metadata = {
  title: {
    default: "Learning Next.js",
    template: "%s | Learning Next.js",
  },
  description: "Here I try to Learn Next.js for my carrier build-up",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar></Navbar>
        {children}
      </body>
    </html>
  );
}

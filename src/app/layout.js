import Navbar from "./components/Navbar";
import { Roboto } from "next/font/google";
import "./globals.css";

export const metadata = {
  title: {
    default: "Learning Next.js",
    template: "%s | Learning Next.js",
  },
  description: "Here I try to Learn Next.js for my carrier build-up",
};
const roboto = Roboto({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}

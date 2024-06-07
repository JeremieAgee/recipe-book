import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Recipe-Book",
  description: "A book of recipes",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header>
          <nav>
            <Link href="">Breakfast</Link>
            <Link href="">Lunch</Link>
            <Link href="">Dinner</Link>
          </nav>
        </header>
        {children}
        <footer>&copy; Jeremie Agee 2024</footer>
        </body>
    </html>
  );
}

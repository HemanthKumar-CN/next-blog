import Navbar from "@/components/navbar/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import { ThemeContextProvider } from "@/context/ThemeContext";
import ThemeProvider from "@/providers/ThemeProvider";
import AuthProvider from "@/providers/AuthProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "CraftVerse blogs - Built by HemanthKumar-CN",
  description: "The best blog app!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className={inter.className}>
        <AuthProvider>
          <ThemeContextProvider>
            <ThemeProvider>
              <div className="container">
                <div className="wrapper">
                  <Navbar />
                  {children}
                </div>
              </div>
            </ThemeProvider>
          </ThemeContextProvider>
        </AuthProvider>
      </body>
    </html>
  );
}

import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/Components/ui/Header";
import { Footer } from "@/Components/ui/Footer";
import { AuthProvider } from "@/Components/Context/AuthContext";
import { CartProvider } from "@/Components/Context/CartContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <CartProvider>
            <Header />
            
            {children}
            <Footer />
          </CartProvider>
        </AuthProvider>
      </body>
    </html>
  );
}

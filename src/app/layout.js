import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Dashboard",
  description: "Manage and visualize production CAD files with ease. This web application offers features for uploading files, displaying order details, and managing categories. Built for efficiency and user-friendliness, it ensures secure data handling and includes interactive elements for seamless navigation.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

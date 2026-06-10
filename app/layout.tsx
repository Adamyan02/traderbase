import "./globals.css";
import Header from "@/components/Header";

export default function RootLayout({ children }: any) {
  return (
    <html lang="ru">
      <body>
        <Header />
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex" }}>
          {children}
        </div>
      </body>
    </html>
  );
}

import { Provider } from "jotai";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Provider>
          <main className="container">{children}</main>
        </Provider>
      </body>
    </html>
  );
}

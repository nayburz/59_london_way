import "./globals.css";

export const metadata = {
  title: "59 London Way",
  description: "Sonoma, California Country Home - 1.11 acres",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <meta
        name="viewpoint"
        content="width=device-width, height=device-height, initial-scale-1"
      />
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}

import "bootstrap/dist/css/bootstrap.min.css";
import "@assets/style/globals.css";
import Script from "next/script";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Liam&apos;s Resume CV" />
        <meta name="author" content="Liam O&apos;Driscoll" />
        <title>Liam&apos;s Resume CV</title>
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />

        {/* <link
          href="https://fonts.googleapis.com/css?family=Saira+Extra+Condensed:500,700&display=optional"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Muli:400,400i,800,800i&display=optional"
          rel="stylesheet"
        /> */}
        
      </head>
      <body id="page-top">
        <main className="min-h-screen bg-gray-100">{children}</main>

        <Script
          src="https://use.fontawesome.com/releases/v5.15.4/js/all.js"
          crossOrigin="anonymous"
          strategy="lazyOnload"
        />
        <Script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
          strategy="lazyOnload"
        />
      </body>
    </html>
  );
}
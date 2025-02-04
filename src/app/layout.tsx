import "bootstrap/dist/css/bootstrap.min.css";
import "@assets/style/cv.css";


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
      </head>

      <body id="page-top">
        {children}
      </body>
    </html>
  );
}
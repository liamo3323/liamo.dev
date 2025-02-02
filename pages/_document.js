import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <link
                        href="https://fonts.googleapis.com/css?family=Saira+Extra+Condensed:500,700&display=optional"
                        rel="stylesheet"
                    />
                    <link
                        href="https://fonts.googleapis.com/css?family=Muli:400,400i,800,800i&display=optional"
                        rel="stylesheet"
                    />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument
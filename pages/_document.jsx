import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html>
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="" />
                <link href="https://fonts.googleapis.com/css2?family=Barlow+Condensed&family=Bellefair&family=Roboto:wght@400;700&display=swap" rel="stylesheet" />

                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="" />
                <link href="https://fonts.googleapis.com/css2?family=Barlow+Condensed&family=Bellefair&family=Roboto:wght@400;700&display=swap" rel="stylesheet"/>
                
                <title>Space Tourism</title>
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}
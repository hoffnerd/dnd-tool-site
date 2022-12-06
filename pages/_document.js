import Document, { Head, Html, Main, NextScript } from "next/document";
class MyDocument extends Document{
    render(){
        return(
            <Html lang="en">
                <Head>
                    <script src="https://kit.fontawesome.com/6e44d949c9.js" crossOrigin="anonymous"></script>
                    {/* Place Fonts, other packages, etc. here */}
                </Head>
                <body>
                    <Main></Main>
                    <NextScript/>
                </body>
            </Html>
        )
    }
}
export default MyDocument;
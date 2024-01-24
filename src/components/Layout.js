import styles from "../styles/layout.module.css";
import Head from "next/head";

//header
function Header()
{
    return (
        <>
            <Head>
                <title>MapViewer - Leonardo Sucena</title>
                <meta name="description" content="MapViewer App" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
        </>
    )

}

function Footer(){
    return (
        <footer className={styles.footer}>
           <a href="https://www.linkedin.com/in/leonardorodriguessucena/" target={"_blank"}>
            <i>Powered by Leonardo Rodrigues Sucena</i>
            </a>
        </footer>
    )
}

//Layout component to control the site layout(header, content, footer, etc.)
export default function Layout({content}) 
{
    return (
        <>
            <Header/>
            <div className={styles.main}>
                <div className={styles.content}>
                    {content}
                </div>
                <Footer />
            </div>
        </>
    )
}
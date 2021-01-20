import Head from "next/head";
import styles from "./Layout.module.css";

const Layout = ({children, title="hello mom"}) => {
    return (
        <div className={styles.container}>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
       {children} 
      </main>

      <footer className={styles.footer}>
       created by Stacy Sealky Lee
      </footer>
    </div>

    );
    
} 
 
export default Layout;
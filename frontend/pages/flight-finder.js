import Head from "next/head";
import Navbar from "../components/Navbar";
import Textbox from "../components/Textbox";
import style from "../styles/cover.module.css";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Flight Studio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={style.parallaxSection}>
        <Navbar />
        <Textbox />
      </main>
    </div>
  );
}

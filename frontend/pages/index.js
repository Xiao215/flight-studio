import Head from "next/head";
import Navbar from "../components/Navbar";
import Cover from "../components/Cover";
import Content from "../components/Content";
export default function Home() {
  return (
    <div>
      <Head>
        <title>Flight Studio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Navbar />
        <Cover />
        <Content />
      </main>
    </div>
  );
}

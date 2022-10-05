import Head from "next/head";
import Explore from "./Explore";

export default function Home() {

  return (
    <div>
      <Head>
        <title>Groovy</title>
        <meta name="description" content="An opensource music player" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Explore />
    </div>
  );
}

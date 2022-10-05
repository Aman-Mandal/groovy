import Head from "next/head";
import Explore from "./Explore";
import { useStateContext } from "../contexts/ContextProvider";

export default function Home() {
  return (
    <>
      <Head>
        <title>Groovy</title>
        <meta name="description" content="An opensource music player" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="overflow-auto pb-10">
        <Explore />
      </main>
    </>
  );
}

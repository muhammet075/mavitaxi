import "@/styles/globals.css";
import Head from "next/head";
import Header from "@/components/header";

function MyApp({ Component, pageProps }) {

  return (
    <>
      <Head>
        <script src="https://kit.fontawesome.com/92145d9a4b.js" crossorigin="anonymous"></script>
      </Head>
      
      <div id='app'>
        <Header/>
        <main>
          <Component {...pageProps} />
        </main>
      </div>
    </>
  );
}

export default MyApp;

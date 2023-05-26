import "@/styles/globals.css";
import Head from "next/head";
import Header from "@/components/header";

function MyApp({ Component, pageProps }) {

  return (
    <>
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

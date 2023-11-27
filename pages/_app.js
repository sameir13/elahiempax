import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import "@/styles/Navbar.css";
import "@/styles/Home.css";
import "@/styles/About.css";
import "@/styles/Contact.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}

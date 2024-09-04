import AboutUs from "@/components/AboutUs";
import Homepage from "@/components/Homepage";
import Articles from "@/components/Articles";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <main>
        <Homepage />
        <AboutUs />
        <Articles />
        <footer>
          <Footer />
        </footer>
      </main>
    </>
  );
}

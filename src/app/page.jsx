import Footer from "./components/footer/Footer";
import Invite from "./components/home/Invite";
import NewsSection from "./components/home/NewsSection";
import Recommendation from "./components/home/Recommendation";
import { Navbar } from "./components/navbar/Navbar";

export default function Home() {
  return (
    <main>
      <Navbar />
      <NewsSection />
      <Invite />
      <Recommendation />
      <Footer />
    </main>
  );
}

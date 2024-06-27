import Footer from "./components/footer/Footer";
import Categories from "./components/home/Categories";
import Invite from "./components/home/Invite";
import NewsSection from "./components/home/NewsSection";
import Recommendation from "./components/home/Recommendation";
import Newest from "./components/home/Newest";
import { Navbar } from "./components/navbar/Navbar";

export default function Home() {
  return (
    <main>
      <Navbar />
      <NewsSection />
      <Categories />
      <Recommendation />
      <Invite />
      <Newest />
      <Footer />
    </main>
  );
}

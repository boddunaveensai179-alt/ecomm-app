import Header from "../Components/Header";
import Content from "../Components/Content";
import Highlights from "../Components/Highlights";
import Footer from "../Components/Footer";


function Home() {
  return (
    <>
      <Header />

      <main>
        <Content />
        <Highlights />
      </main>

      <Footer />
    </>
  );
}

export default Home;

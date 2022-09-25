import MainHeader from "../components/MainHeader";
import HomeBook from "../components/HomeBook";
import BookGrid from "../components/BookGrid";

const Home = () => {
  return (
    <div className="relative">
      <MainHeader />
      <HomeBook />
      <BookGrid />
    </div>
  );
};

export default Home;

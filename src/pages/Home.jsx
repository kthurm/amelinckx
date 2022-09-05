import MainHeader from "../components/MainHeader";
import SatelliteBook from "../components/SatelliteBook";
import BookGrid from "../components/BookGrid";

const Home = () => {
  return (
    <div className="relative">
      <MainHeader />
      <SatelliteBook />
      <BookGrid />
    </div>
  );
};

export default Home;

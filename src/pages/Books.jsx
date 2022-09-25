import BookGrid from "../components/BookGrid";
import HomeBook from "../components/HomeBook";

const Books = () => {
  return (
    <div>
      <div className="container-lg">
        <h1>Books</h1>
        <div className="space lg:mb-10"></div>
        <HomeBook />
      </div>
      <BookGrid />
    </div>
  );
};

export default Books;

import Body from "./Components/Body";
import Landing from "./Components/Landing";
import BookDetails from "./Components/BookDetails";
import CreateBook from "./Components/CreateBook";
import Login from "./Components/Login";
import SearchResults from "./Components/SearchResults";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import MyBooks from "./Components/MyBooks";
//hello
function App() {
  return (
    <>
      <div className="front-page">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/Body" element={<Body />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/BookDetails" element={<BookDetails />} />
          <Route path="/CreateBook" element={<CreateBook />} />
          <Route path="/MyBooks" element={<MyBooks />} />
          <Route path="/SearchResults" element={<SearchResults />} />
        </Routes>

        {/* <BookDetails /> */}
        {/* <CreateBook /> */}
        {/* <Header /> */}
        {/* <Body /> */}
        {/* <Landing /> */}
      </div>
    </>
  );
}

export default App;

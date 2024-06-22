import Body from "./pages/Body";
import Landing from "./pages/Landing";
import BookDetails from "./pages/BookDetails";
import CreateBook from "./pages/CreateBook";
import Login from "./pages/Login";
import SearchResults from "./pages/SearchResults";
import UsersStore from "./pages/UsersStore";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import MyBooks from "./pages/MyBooks";
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
          <Route path="/UsersStore" element={<UsersStore />}></Route>
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

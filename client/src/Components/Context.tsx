import { createContext, useEffect, useState } from "react";

const bookContext = createContext({
  cashedBooks: [],
  // numberOfPages: 0,
  pages: [],
  gotoNext: () => {},
  gotoPrevious: () => {},
  changePageNumber: (pageIndex: number) => {},
});
const BookProvider = ({ children }: { children: React.ReactNode }) => {
  const [cashedBooks, setCashedBooks] = useState<any>([]);
  const [numberOfPages, setNumberOfPages] = useState(0);
  const [pageNumber, setPageNumber] = useState(0);

  useEffect(() => {
    fetch(`http://localhost:4000/getBooks?page=${pageNumber}`)
      .then((response) => response.json())
      .then(({ totalPages, posts }) => {
        setCashedBooks(posts);
        setNumberOfPages(totalPages);
      });
  }, [pageNumber]);
  // console.log(cashedBooks);
  const gotoPrevious = () => {
    setPageNumber(Math.max(0, pageNumber - 1));
  };
  const pages: any = new Array(numberOfPages).fill(null).map((_, i) => i);
  // console.log(pages);

  const gotoNext = () => {
    setPageNumber(Math.min(numberOfPages - 1, pageNumber + 1));
  };
  const changePageNumber = (pageIndex: any) => {
    setPageNumber(pageIndex);
  };
  return (
    <bookContext.Provider
      value={{
        cashedBooks,
        // numberOfPages,
        pages,
        gotoNext,
        gotoPrevious,
        changePageNumber,
      }}
    >
      {children}
    </bookContext.Provider>
  );
};
export { BookProvider, bookContext };

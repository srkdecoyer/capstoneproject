// import React from 'react';
// export const BookContext = React.createContext({
//   name: 'MyBook', loggedIn: true
// });


import React, { useEffect, useState } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { v4 as uuidv4 } from "uuid";
import { listProducts } from "../api/queries";
import { processOrder } from "../api/mutations";

const BookContext = React.createContext();

const BookProvider = ({ children }) => {
  //don't want to use persisted storage for books, let it reload on F5
  const [books, setBooks] = useState([]);
  const [featured, setFeatured] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchBooks();
  }, []);

  const checkout = async (orderDetails) => {
    const payload = {
      id: uuidv4(),
      ...orderDetails
    };
    try {
      await API.graphql(graphqlOperation(processOrder, { input: payload }));
      console.log("Order is successful");
    } catch (err) {
      console.log(err);
    }
  };

  const fetchBooks = async () => {
    try {
      console.log("fetchBooks begin");
      setLoading(true);
      // Switch authMode to API_KEY for public access
      const { data } = await API.graphql({
        query: listProducts,
        authMode: "API_KEY"
      });
      const books = data.listProducts.items;
      console.log("Going to list books");
      console.log(books);
      const featured = books.filter((book) => {
        return !!book.featured;
      });
      setBooks(books);
      setFeatured(featured);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <BookContext.Provider value={{ books, featured, loading, checkout }}>
      {children}
    </BookContext.Provider>
  );
};

export { BookContext, BookProvider };

// export default ({ element }) => (
//   <BookProvider>
//     {element}
//   </Provider>
// );

//=============================================================================================

// // import React from 'react';

// // const BookContext = React.createContext();

// // export const Classes = () => (
// //     <>
// //         <h1>Here goes classes</h1>
// //         <h1>Here goes classes2</h1>
// //         <h1>Here goes classes3</h1>
// //     </>
// // );


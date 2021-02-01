// import React, { useContext } from 'react'
// import { BookContext } from '../components/books';
// const Books = () => {
//     const user = useContext(BookContext);
//     return(
//         <h1>The theme is {user.name} </h1>
//     );
// }
// export default Books

//=====================================================================================================

import React, { useContext } from 'react'
import { Link } from "react-router-dom";
import { BookContext  } from '../components/books';
import Layout from '../components/layout/Layout';



const Books = () => {
    console.log("const Books in Book.js");
    const { books } = useContext(BookContext);

    if (!books.length) {
        return <h3>No Books Available</h3>
    }

    return (
        // <Layout>
        <section className="books">
            {books.map(({ image: image, id, title }) => (
                <article key={id} className="book">
                    <div className="book-image">
                        <img src={image} alt={title} />
                    </div>
                    <a heref='{`books/${id}`}' className="btn book-link">details</a>
                    {/* <Link to={`books/${id}`} className="btn book-link">details</Link> */}
                </article>
            ))}
        </section>
        // </Layout>
    )
}

export default Books


//========================================================================================================================

// import React from 'react';
// import {Classes} from '../components/Classes';


// export default () => (
//     <>
//         <Classes />
//     </>
// );

// //NOTE: The below syntax is somehow not working, use the DEFAULT EXPORT FOR THE PAGE COMPONENT
// // export const ClassesPage = () => (
// //     <>
// //         <h1>This is just the page..</h1>
// //     </>
// // );
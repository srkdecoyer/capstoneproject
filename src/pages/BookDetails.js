import React, { useContext } from 'react';
//import { useParams, useHistory } from "react-router-dom";
import { navigate } from 'gatsby';
import { BookContext } from '../components/books';
import { CartContext } from '../components/cart';
import Layout from '../components/layout/Layout';

const BookDetails = ({ location }) => {
  console.log('BookDetails:location:' + JSON.stringify(location.state));

  //location.state fail with gatsby run build with bookId undefined, else setting a default value which will be used during SSR only
  const id = location != null && location.state != null ? location.state.bookId : 0;
  console.log('Id:' + id);
  //console.log('BookDetailsId:' + id);

  //const { id } = useParams();
  //const history = useHistory();
  const { books } = useContext(BookContext);
  const { addToCart } = useContext(CartContext);

  console.log('BookDetails.js:books:' + JSON.stringify(books));

  const book = books.find(book => {
    return book.id === id;
  });
  if (!book) {
    return <h3>Loading...</h3>;
  }

  const { image: url, title, description, author, price } = book;

  return (
    <Layout>
      <section className="book-details">
        <div className="detail-image">
          <div style={{ height: '40%' }}>
            <img style={{ height: '100%' }} src={url} alt={title} />
          </div>
          <div className="btn-container" style={{ height: '20 %' }}>
            <button
              className="btn"
              onClick={() => {
                addToCart({ ...book, id });
                navigate('/Cart/');
              }}
            >
              Add to Cart
            </button>
          </div>
          <div className="detail-description" style={{ height: '41 %' }}>
            <h4 className="detail-title">{title}</h4>
            <p className="detail-description-text" style={{ overflowY: 'scroll' }}>
              {description}
            </p>
            <h5 className="detail-mentor">{author}</h5>
            <h6 className="detail-price">
              <b>Price - Rs.:</b> {price}
            </h6>
          </div>
        </div>
        {/* <div className="detail-description">
        <h2 className="detail-title">{title}</h2>
        <p className="detail-description-text">{description}</p>
        <h3 className="detail-mentor">{author}</h3>
        <h4 className="detail-price"><b>Price - Rs.:</b> {price}</h4>
       
      </div> */}
      </section>
    </Layout>
  );
};

export default BookDetails;

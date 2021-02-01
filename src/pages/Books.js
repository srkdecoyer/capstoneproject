import React, { useContext } from 'react'
import Layout from '../components/layout/Layout';
import '../css/index.css';

import { BookContext  } from '../components/books';
import {Link} from 'gatsby';
// import { Redirect } from '@reach/router';

const  Books = () => {
    console.log("Book.js");
    const { books } = useContext(BookContext);
    console.log("Book.js" + books);
    if (!books.length) {
        return <h3>No Books Available</h3>
    }

    return(
        <Layout>
        <section className="bg-services">
            <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-none">Therapeutic Services</h2>
            <h3 className="text-2xl lg:text-3xl xl:text-4xl  leading-none">Supporting holistic child development</h3>
        </section>
        
        <section className="pt-0 md:pt">
          <div className="container mx-auto px-10 lg:flex body-background">
            <div className="text-center lg:text-left lg:w">
                <section className="books">
                {books.map(({ image: image, id, title, description }) => (
                    <article key={id} className="book">
                        <div className="book-image">
                            <span className="card-title">{title}</span>
                            <img src={image} alt={title} />
                        </div>
                        
                        <Link to="/BookDetails/" state={{
                          bookId: id,
                        }} className="book-link">{description.substring(0,75)}....</Link>
                        
                    </article>
                ))}
                </section>
              
              {/* <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-none">
                Main title of your landing page
              </h1>
              <p className="text-xl lg:text-2xl mt-6 font-light">
                Free landing page template to promote your business startup and generate leads for the
                offered services
              </p>
              <p className="mt-8 md:mt-12">
                <Button size="lg">Get Started</Button>
              </p>
              <p className="mt-4 text-gray-600">Sed fermentum felis ut cursu</p> */}
            </div>
            {/* <div className="lg:w-1/2">
              <HeroImage />
            </div> */}
          </div>
        </section>
        
      </Layout>
    );
}




export default Books;
import React, { Component } from 'react';
import { Link } from 'gatsby';
import { MoviesData, renderMovieTitle } from '../movies-data';
import Autocomplete from 'react-autocomplete';
import { FaShoppingCart } from 'react-icons/fa';
import '../../css/testing.css';

class Testing extends Component {
  state = { val: '' };

  render() {
    return (
      <Link className="autocomplete-wrapper px-4" style={{ marginTop: '-4px' }}>
        Search
        <Autocomplete
          value={this.state.val}
          items={MoviesData()}
          getItemValue={item => item.title}
          shouldItemRender={renderMovieTitle}
          renderMenu={item => <div className="dropdown">{item}</div>}
          renderItem={(item, isHighlighted) => (
            //<div className={`item ${isHighlighted ? 'selected-item' : ''}`}>{item.title}</div>
            // <div className={`item ${isHighlighted ? 'selected-item' : ''}`}>
            //   <Link
            //     to="/BookDetails/"
            //     state={{
            //       bookId: item.id
            //     }}
            //   >
            //     {item.title}
            //   </Link>
            // </div>
            <Link
              to="/BookDetails/"
              state={{
                bookId: item.id
              }}
            >
              <div className={`item ${isHighlighted ? 'selected-item' : ''}`}>{item.title}</div>{' '}
            </Link>
          )}
          onChange={(event, val) => this.setState({ val })}
          onSelect={val => {
            this.setState({ val });
          }}
        />
      </Link>
    );
  }
}

// const Testing = () => (

//   <header>
//         <Link className="px-4" to="/">
//           Search
//         </Link>

//   </header>
// );

export default Testing;

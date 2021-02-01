import React from 'react';

import { Link } from 'gatsby';
import { FaShoppingCart } from 'react-icons/fa';
import { FaSignInAlt } from 'react-icons/fa';
import Autocomplete from 'react-autocomplete';
import LogoIcon from '../../svg/LogoIcon';
import Testing from './testing';

// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { MoviesData, renderMovieTitle } from '../movies-data';


const Header = () => (
 
  <header className="sticky top-0 bg-white shadow">
    <div className="container flex flex-col sm:flex-row justify-between items-center mx-auto py-4 px-8">
      <div className="flex items-center text-2xl">
        <div className="w-12 mr-3">
          <LogoIcon />
        </div>
      </div>
      <div className="flex mt-4 sm:mt-0">
        <Link className="px-4" to="/">
          Home
        </Link>
        <Link className="px-4" to="/Books/">
          Classes
        </Link>
        <Link className="px-4" to="/AboutUs/">
          About Us
        </Link>
		<Link className="px-4" href="https://therubiconbridge.blogspot.com/" target="_blank">
          Blog
        </Link>
		<Link className="px-4" to="/MyAccount/">
          MyAccount
        </Link>
        {/* <Link className="px-4" to="/Search/"> */}
        <Testing />
        {/* </Link> */}
        
        {/* <Link className="px-4">
          Search<Autocomplete
            style={{ border: '1px solid black', borderRadius: '5px', color: 'blue' }}
          // value={this.state.val}
          value = ""
          items={MoviesData()}
          getItemValue={item => item.title}
          shouldItemRender={renderMovieTitle}
          renderMenu={item => (
            <div className="dropdown" style={{width: '200px',height: '100px'}}>
              {item}
            </div>
          )}
          renderItem={(item, isHighlighted) =>
            <div className={`item ${isHighlighted ? 'selected-item' : ''}`}>
              {item.title}
            </div>
          }
          onChange={(event, val) => this.setState({ val })}
          onSelect={val => this.setState({ val })}
        />
                       
          
        </Link> */}
        
        {/* <Link className="px-4" to="/Events/">
          Events
        </Link> */}
        {/* <Link className="px-4" to="#aboutus">
          About Us
        </Link> */}
        {/* <Link className="px-4" to="#testimonials">
          Testimonials
        </Link> */}
      </div>
      
      <div className="flex justify-end">
         
          <div>&nbsp;&nbsp;</div>
          <div>
		  <Link to="/Login/" style={{ color: '#FFF'}} >
                    <FaSignInAlt size={30} color="blue" title="Cart">(1)</FaSignInAlt>
            </Link>
			</div>
			
			<div>&nbsp;&nbsp;</div>
			
			<div>
          <Link to="/Cart/" style={{ color: '#FFF'}} >
                    <FaShoppingCart size={30} color="blue" title="Cart">(1)</FaShoppingCart>
            </Link>
          </div>
      </div>
    </div>
  </header>
);

export default Header;

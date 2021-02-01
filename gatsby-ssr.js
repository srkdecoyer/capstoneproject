//Added same setting as in gatsby-browser.js
//With out this, gets error during : npm run build, while gatsby checking fot SSR
//Ref : https://dev.to/firedev99/hey-i-m-trying-to-deploy-a-site-with-gatsby-but-i-m-getting-an-error-1df0

import React from 'react';
import {BookProvider} from './src/components/books';
import {CartProvider} from './src/components/cart';

export const wrapRootElement = ({ element }) =>
  <BookProvider><CartProvider>{element}</CartProvider></BookProvider>

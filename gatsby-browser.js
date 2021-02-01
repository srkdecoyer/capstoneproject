import './src/css/tailwind.css';

import React from 'react';
import {BookProvider} from './src/components/books';
import {CartProvider} from './src/components/cart';

import Amplify, { Auth } from "aws-amplify"
import awsConfig from "./src/aws-exports"

export const wrapRootElement = ({ element }) =>
  <BookProvider><CartProvider>{element}</CartProvider></BookProvider>
  
Amplify.configure(awsConfig)
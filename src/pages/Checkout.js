import React from 'react'
import { AmplifyAuthenticator } from '@aws-amplify/ui-react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from "../components/CheckoutForm";
import Layout from '../components/layout/Layout';

const Checkout = () => {
    const stripePromise = loadStripe('pk_test_51HkZSOEDJ2SVojoIjME2wYl2JZD7r5ZyxYy2jQeEDXTNLZq3HN0ZB5Fy6ula8J8fIAcDEvctlh8LebWMG755GcQA00sOJTKtYv');

    return (
        <Layout>
        <section className="checkout-wrapper">
            <AmplifyAuthenticator>
                <Elements stripe={stripePromise}>
                    <section>
                        <header>
                            <div>&nbsp;</div>
                            <div style={{backgroundColor: '#00A4EF'}}><span className="text-2xl lg:text-3xl xl:text-3xl">Payment</span></div>
                        </header>
                        <CheckoutForm />
                    </section>
                </Elements>
            </AmplifyAuthenticator>
        </section>
        </Layout>
    )
}

export default Checkout

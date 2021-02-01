import React from 'react'
import { AmplifyAuthenticator } from '@aws-amplify/ui-react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import MyAccount from "../components/MyAccount";
import Layout from '../components/layout/Layout';

const Login = () => {
    const stripePromise = loadStripe('pk_test_51HkZSOEDJ2SVojoIjME2wYl2JZD7r5ZyxYy2jQeEDXTNLZq3HN0ZB5Fy6ula8J8fIAcDEvctlh8LebWMG755GcQA00sOJTKtYv');

    return (
        <Layout>
        <section className="checkout-wrapper">
            <AmplifyAuthenticator>
                <Elements stripe={stripePromise}>
                    <section>
                        <MyAccount />
                    </section>
                </Elements>
            </AmplifyAuthenticator>
        </section>
        </Layout>
    )
}

export default Login

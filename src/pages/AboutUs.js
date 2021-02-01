import React from 'react';
import Button from '../components/Button';
import Card from '../components/Card';
import CustomerCard from '../components/CustomerCard';
import LabelText from '../components/LabelText';
import Layout from '../components/layout/Layout';
import SplitSection from '../components/SplitSection';
import StatsBox from '../components/StatsBox';
import customerData from '../data/customer-data';
import aboutUsData from '../data/aboutus-data';
import HeroImage from '../svg/HeroImage';
import SvgCharts from '../svg/SvgCharts';
import {Link} from 'gatsby';
import { white1X1 } from 'aws-amplify-react';


export default () => (
  <Layout>
     {/* <section className="hero">
        <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-none">The Rubicon Bridge</h2>
        <h3 className="text-2xl lg:text-3xl xl:text-4xl  leading-none">Where kids find way to their self!</h3>
      </section> */}
    {/* <section className="featured-head">
          <h2 className="text-3xl lg:text-3xl xl:text-6xl font-bold leading-none">Services</h2>
    </section> */}
    <section className="pt-20 md:pt-20 home-background1">
      <div className="container mx-auto px-8 lg:flex">
        <div className="text-center lg:text-left lg:w-3/4">
          <h2 className="text-xl lg:text-3xl xl:text-4xl font-bold leading-none">
            What is Rubicon Bridge?
          </h2>
          <p className="text-xl lg:text-2xl mt-6 font-light">
          Roman bridge over the Rubicon river located in Savignano sul Rubicone. The Rubicon has been one of the world's most famous rivers ever since Julius Caesar crossed it in 49 BCE.
          <br/>
What does it mean when you cross the Rubicon?

Irrevocably commit to a course of action, make a fateful and final decision. For example, Once he submitted his resignation, he had crossed the Rubicon. This phrase alludes to Julius Caesar's crossing the Rubicon River (between Italy and Gaul) in 49 b.c., thereby starting a war against Pompey and the Roman Senate.

For the special kids, crossing the bridge opens them up to the real world of communication and interaction, helping them to nurture to a world of possibilities.

          </p>
          {/* <p className="mt-8 md:mt-12">
            <Button className="text-sm"><Link className="px-4" to="/Books/" style={{ color: '#FFF'}}>Get Started</Link></Button>
          </p> */}
        </div>
        {/* <div className="lg:w-1/2">
          <HeroImage />
        </div> */}
      </div>
    </section>

    <section className="pt-20 md:pt-20 home-background1">
      <div className="container mx-auto px-8 lg:flex">
        <div className="text-center lg:text-left lg:w-3/4">
          <h2 className="text-xl lg:text-3xl xl:text-4xl font-bold leading-none">
            Why Rubicon Bridge?
          </h2>
          <p className="text-xl lg:text-2xl mt-6 font-light">
          {aboutUsData[0].content}
          </p>
          {/* <p className="mt-8 md:mt-12">
            <Button className="text-sm"><Link className="px-4" to="/Books/" style={{ color: '#FFF'}}>Get Started</Link></Button>
          </p> */}
        </div>
        {/* <div className="lg:w-1/2">
          <HeroImage />
        </div> */}
      </div>
    </section>

  </Layout>
);

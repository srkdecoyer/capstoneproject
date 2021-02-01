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
     <section className="hero">
        <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-none">The Rubicon Bridge</h2>
        <h3 className="text-2xl lg:text-3xl xl:text-4xl  leading-none">Where kids find way to their self!</h3>
      </section>
    {/* <section className="featured-head">
          <h2 className="text-3xl lg:text-3xl xl:text-6xl font-bold leading-none">Services</h2>
    </section> */}
    <section className="pt-20 md:pt-20 home-background1">
      <div className="container mx-auto px-8 lg:flex">
        <div className="text-center lg:text-left lg:w-1/2">
          <h2 className="text-xl lg:text-3xl xl:text-4xl font-bold leading-none">
            Holistic Child Development
          </h2>
          <p className="text-xl lg:text-2xl mt-6 font-light">
          The Rubicon Bridge offers services for families to nurture child’s development through therapeutic classes and activities.
          </p>
          <p className="mt-8 md:mt-12">
            <Button className="text-sm"><Link className="px-4" to="/Books/" style={{ color: '#FFF'}}>Get Started</Link></Button>
          </p>
        </div>
        <div className="lg:w-1/2">
          <HeroImage />
        </div>
      </div>
    </section>
    <section id="features" className="py-20 lg:pb-0 lg:pt-30 home-background2">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl lg:text-5xl font-semibold">Featured Classes</h2>
		<h5 className="font-semibold"> Recommendations based on your Kids profile</h5>
        <div className="flex flex-col sm:flex-row sm:-mx-3 mt-12">
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <p className="font-semibold text-xl">Vedic Mathematics</p>
              <p className="mt-4">
                An interactive class conducted by mathematics geniuses for children of special need
                delivered in a lucid and easy to grasp manner.
              </p>
            </Card>
          </div>
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <p className="font-semibold text-xl">Home Schooling Support</p>
              <p className="mt-4">
                Expert help and support in setting up home school for you precious one. Help provided ranges from
                selecting equipments to methods and dedicated instructors.
              </p>
            </Card>
          </div>
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <p className="font-semibold text-xl">Dyslexia Support School</p>
              <p className="mt-4">
                Extensive support for parents to to learn why some children have so much difficulty with reading and writing
                and help them to engage witht their wards positively.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
    <section id="features" className="py-20 lg:pb-0 lg:pt-30 home-background1">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl lg:text-5xl font-semibold">Modalities</h2>
        <div className="flex flex-col sm:flex-row sm:-mx-3 mt-12">
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <p className="font-semibold text-xl"><a href="https://www.waldorfeducation.org/waldorf-education">Waldorf Methodology</a></p>
              <p className="mt-4">
                In Waldorf Education, the learning process is essentially threefold, engaging head, heart, and hands—or thinking, feeling and doing. 
				This is the basis out of which Waldorf teachers work to nurture and engage each child through a curriculum and methodology that 
				integrates academics, arts, and practical skills. It is independent and inclusive.
              </p>
            </Card>
          </div>
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <p className="font-semibold text-xl"><a href="https://www.autismspeaks.org/floortime-0">Floor Time Approach</a></p>
              <p className="mt-4">
                Floortime is a relationship-based therapy for children with autism. The intervention is called Floortime because the parent gets down
				on the floor with the child to play and interact with the child at their level. The goal is for adults to help children expand their 
				“circles of communication.” Floortime takes place in a calm environment. This can be at home or in a professional setting.				
              </p>
            </Card>
          </div>
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <p className="font-semibold text-xl"><a href="https://idreamcareer.com/blog/holistic-development/">Holistic Child Development</a></p>
              <p className="mt-4">
                Holistic development is a comprehensive approach in learning which aims to develop multiple facets or abilities of a human brain. Conventional 
				educational and learning systems aim at the development of intellectual capabilities only, but holistic growth aims at the development of 
				physical & intellectual abilities, cognitive abilities, emotional abilities and social skills.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
    
    <section id="aboutus" className="py-20 lg:py-20 home-background2">
      <div className="container mx-auto">
        <h2 className="text-3xl lg:text-5xl font-semibold text-center">Mentors</h2>
        {/* <LabelText className="mb-8 text-gray-600 text-center">Robicon Bridge classes are taken by experienced and trained professionals, who can understand the needs of the kids.</LabelText> */}
        <div className="flex flex-col md:flex-row md:-mx-3">
            <div className="flex-1 px-3">
            <Card className="mb-8">
                {/* <p className="text-xl font-semibold">Title</p> */}
                <p className="mt-6">Robicon Bridge classes are taken by experienced and trained professionals, who can understand the needs of the kids.
                The classes are conducted at conveninet timings and in the weekend. The classes are based on multiiple modalities and are atargeted
                towards the overall developmnet of the kids. <br>
                </br>
                And as always, if you are not satisfied with any of the class , your fee will refunded. And the first trial class is always free!!
                </p>
              </Card>
            </div>
        </div>
      </div>
    </section>

    
    <section id="testimonials" className="py-20 lg:py-20 home-background1">
      <div className="container mx-auto">
      <h2 className="text-3xl lg:text-5xl font-semibold text-center">Testimonials</h2>
        <div className="flex flex-col md:flex-row md:-mx-3">
          {customerData.map(customer => (
            <div key={customer.customerName} className="flex-1 px-3">
              <CustomerCard customer={customer} />
            </div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

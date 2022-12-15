import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Card from './components/base/Card';
import React from 'react';

const App = () => {
  return (
    <div className="relative mx-auto max-w-[1800px] overflow-hidden">
      {Header}
      <main>
        <section id="hero-section" className="mt-[38px] md:mt-[125px] pb-[66px] md:pb-[226px]">
          <div className="container max-w-full">
            <p className="w-full md:w-[398px] lg:w-[440px] xl:w-[525px] mb-[44px] md:mb-0">
              <h1>Maximize skill,<br />minimize budget</h1>
              <p className="pg-md w-full lg:w-[445px] my-[25px]">Our modern courses across a range of in-demand skills will give you the knowledge you need to live the life you want.</p>
              <button type="button" className="p-btn bg-orange-gradient text-white rounded-btn">Get Started</button>
            </p>
            <picture className="relative h-auto w-11/12 md:w-[640px] lg:w-[815px] xl:w-[990px] md:absolute md:-top-8 lg:-top-28 xl:-top-44 md:-right-[250px] lg:-right-[360px] xl:-right-[330px]">
              <source media="(min-width:1024px)" srcSet="/assets/image-hero-desktop.png" />
              <source media="(min-width:768px)" srcSet="/assets/image-hero-tablet.png" />
              <img src="/assets/image-hero-mobile.png" alt="Woman drinking coffee in front of laptop, working on courses. Course statistics are displayed on the side: 'Course hours: 1,451', 'Members joined: 29,000+'." />
            </picture>
          </div>
        </section>
        <section id="testimonials-section" className="pt-[24px] pb-[140px] bg-gradient-to-b from-white/0 to-[#F0F1FF]">
          <div className="container md:max-w-[768px] lg:max-w-[1024px] xl:max-w-full">
            <div className="mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-0 md:gap-x-[11px] xl:gap-x-[30px] gap-y-[55px]">
              <Card title={"Check out our most popular courses!"} largeTitle gradientBg />
              <Card icon={"/assets/icon-animation.svg"} iconAlt={""} title={"Animation"} body={"Learn the latest animation techniques to create stunning motion design and captivate your audience."} showLink />
              <Card icon={"/assets/icon-design.svg"} iconAlt={""} title={"Design"} body={"Create beautiful, usable interfaces to help shape the future of how the web looks."} showLink />
              <Card icon={"/assets/icon-photography.svg"} iconAlt={""} title={"Photography"} body={"Explore critical fundamentals like lighting, composition, and focus to capture exceptional photos."} showLink />
              <Card icon={"/assets/icon-crypto.svg"} iconAlt={""} title={"Crypto"} body={"All you need to know to get started investing in crypto. Go from beginner to advanced with this 54 hour course."} showLink />
              <Card icon={"/assets/icon-business.svg"} iconAlt={""} title={"Business"} body={"A step-by-step playbook to help you start, scale, and sustain your business without outside investment."} showLink />
            </div>
          </div>
        </section>
      </main>
      {Footer}
    </div>
  );
}

export default App;

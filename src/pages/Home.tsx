
import React from 'react';
import Layout from '../components/Layout';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import Timeline from '../components/Timeline';
import Statistics from '../components/Statistics';
import ActionSection from '../components/ActionSection';

const Home = () => {
  return (
    <Layout>
      <HeroSection />
      <InfoSection />
      <Timeline />
      <Statistics />
      <ActionSection />
    </Layout>
  );
};

export default Home;

import React from 'react';
import { Helmet } from "react-helmet";
import Layout from '../../components/layouts';
import BannerInfo from '../../components/elements/BannerInfo';

function Component () {
  const renderHeader = (
    <div className='w-full p-2 mb-1'>
      <BannerInfo className="bg-gradient-to-r from-pink-500 to-blue-500 text-white" subtitle="Something went wrong. Please try again" title="Oops!" />
    </div>
  );

  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Social Dashboard - Something went wrong. Please try again</title>
      </Helmet>
      <div>
        {renderHeader}
      </div>
    </Layout>
  );
};

export default Component;

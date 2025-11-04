import React, { ReactNode } from 'react';
import Head from 'next/head';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

type Props = {
  children?: ReactNode;
  title?: string;
  description?: string;
};

const Layout = ({
  children,
  title = 'Electric DRs Designs | Charleston WV & Gainesville FL',
  description = 'Premier electrical contractor services for residential and commercial clients. We specialize in safety, efficiency, energy conservation and modern electrical solutions.'
}: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="icon" href="/favicon.ico" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700&family=Open+Sans:wght@400;600&display=swap" rel="stylesheet" />
    </Head>
    <Navbar />
    <main>{children}</main>
    <Footer />
  </div>
);

export default Layout;



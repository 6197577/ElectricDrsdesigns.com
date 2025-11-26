import React from 'react';
import Layout from '../components/Layout';
import JobListing from '../components/JobListing';

export default function HiringPage() {
  return (
    <Layout title="Careers">
      <div className="container">
        <h1 style={{textAlign:'center', marginBottom:'40px'}}>Join Our Team</h1>
        <JobListing title="Licensed Electrician" location="Charleston, WV" type="Full-Time" description="Experienced journeyman needed." />
        <JobListing title="Apprentice" location="Gainesville, FL" type="Full-Time" description="Start your career with us." />
      </div>
    </Layout>
  );
}

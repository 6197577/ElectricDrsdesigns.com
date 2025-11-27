import React from 'react';
import Layout from '../components/Layout';

export default function ReviewsPage() {
  return (
    <Layout title="Reviews | Electric DRs Designs" description="See what our customers in Charleston and Gainesville have to say about our electrical services.">
      <div className="container">
        <h1 style={{textAlign: 'center'}}>Client Reviews & Testimonials</h1>
        <p style={{textAlign: 'center', maxWidth: '700px', margin: '0 auto 50px'}}>
            We pride ourselves on safety, cleanliness, and professionalism. Here is what our community is saying on Google.
        </p>

        {/* Google Reviews Widget Placeholder */}
        <div style={{backgroundColor: '#f9f9f9', padding: '40px', textAlign: 'center', borderRadius: '8px'}}>
            <h3>⭐⭐⭐⭐⭐</h3>
            <p><em>"Google Reviews Widget will load here. Please embed your specific Google Business Profile code snippet in this div."</em></p>
            <a href="https://g.page/r/YOUR_GOOGLE_LINK/review" target="_blank" rel="noreferrer" className="btn" style={{marginTop: '20px'}}>
                Leave Us a Review
            </a>
        </div>
      </div>
    </Layout>
  );
}

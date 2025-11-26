import Layout from '../../components/Layout';
import Link from 'next/link';

export default function Charleston() {
  return (
    <Layout title="Electrician in Charleston, WV">
      <div className="container" style={{textAlign:'center'}}>
        <h1>Charleston, WV Electricians</h1>
        <p style={{maxWidth:'700px', margin:'20px auto'}}>Serving the capital city with pride.</p>
        <Link href="/contact" className="btn">Book Now</Link>
      </div>
    </Layout>
  );
}

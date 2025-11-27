
import React from 'react';
import Layout from '../../components/Layout';

export default function AEPRequirements() {
  return (
    <Layout title="AEP Residential Service Requirements | Electric DRs Designs" description="Guide to Appalachian Electric Power (AEP) residential service standards for meter bases, disconnects, and inspections in WV.">
      <div className="container">
        <h1 style={{textAlign: 'center'}}>AEP Residential Electric Service Requirements</h1>
        <p style={{textAlign: 'center', maxWidth: '800px', margin: '0 auto 50px'}}>
            Planning a new service installation or upgrade in AEP territory? Here is what you need to know to pass inspection and get connected safely.
        </p>

        <div style={{backgroundColor: 'var(--card-bg)', padding: '40px', borderRadius: '8px'}}>
            <h2>1. Meter Base Standards</h2>
            <p>AEP requires specific meter bases depending on the amperage of your service (100A, 200A, or 400A). All meter bases must be UL listed and include a bypass lever for safety.</p>
            
            <h2>2. Service Entrance Conductors</h2>
            <p>Conductors must be sized according to the NEC and AEP standards. For a standard 200A residential service, 4/0 Aluminum or 2/0 Copper is typically required.</p>

            <h2>3. Grounding & Bonding</h2>
            <p>AEP requires two ground rods spaced at least 6 feet apart. The grounding electrode conductor must be continuous from the meter base/disconnect to the ground rods.</p>

            <h2>4. Inspections</h2>
            <p>Before AEP will swing power to your home, the work must be inspected by a state-certified electrical inspector. We handle all coordination with inspectors for our clients.</p>
        </div>
        
        <div style={{textAlign: 'center', marginTop: '40px'}}>
            <p>Need help navigating AEP requirements?</p>
            <a href="/contact" className="btn">Schedule a Service Upgrade Consultation</a>
        </div>
      </div>
    </Layout>
  );
}

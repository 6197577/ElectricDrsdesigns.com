import React from 'react';
import { useRouter } from 'next/router';
import Layout from '../../components/Layout';
import Link from 'next/link';

// Data source for all locations
const locationData: Record<string, { title: string; desc: string; content: string }> = {
  "charleston": {
    title: "Electrician in Charleston, WV",
    desc: "Premier electrical services for the Capital City.",
    content: "As our home base, Charleston is where we deliver our most comprehensive residential and commercial services, from the East End to South Hills."
  },
  "south-charleston": {
    title: "South Charleston Electrical Services",
    desc: "Serving the Mound and surrounding businesses.",
    content: "We provide rapid response for South Charleston businesses and homeowners, specializing in panel upgrades and safety inspections."
  },
  "st-albans": {
    title: "St. Albans Electrician",
    desc: "Trusted local experts for St. Albans.",
    content: "From historic home rewiring on the river side to commercial upgrades, we are St. Albans' trusted electrical partner."
  },
  "teays-valley": {
    title: "Teays Valley Electrical Contractor",
    desc: "Modern electrical solutions for a growing community.",
    content: "We specialize in EV charger installation and new construction wiring for the expanding Teays Valley corridor."
  },
  "cross-lanes": {
    title: "Cross Lanes Electrician",
    desc: "Reliable power solutions for Cross Lanes.",
    content: "Your local experts for generator installation and emergency repairs in the Cross Lanes area."
  },
  "nitro": {
    title: "Nitro Electrician",
    desc: "Industrial and Residential services.",
    content: "Supporting Nitro's industrial growth and residential safety with expert electrical maintenance."
  },
  // Add all other cities here (Poca, Institute, Sissonville, etc.) using the same format
};

export default function DynamicLocationPage() {
  const router = useRouter();
  const { city } = router.query;
  
  // Default fallback if city not found
  const location = locationData[city as string] || {
    title: "Electrician Serving Your Area",
    desc: "Expert electrical services in West Virginia and Florida.",
    content: "We are proud to serve your local community with safety, integrity, and professional craftsmanship."
  };

  return (
    <Layout title={`${location.title} | Electric DRs Designs`} description={location.desc}>
      <div className="container">
        <h1 style={{textAlign: 'center'}}>{location.title}</h1>
        <p style={{textAlign: 'center', maxWidth: '700px', margin: '20px auto 50px'}}>
          {location.content}
        </p>
        
        <div className="grid grid-3">
            <div style={{padding:'20px', border:'1px solid #444', borderRadius:'8px', textAlign:'center'}}>
                <h3>Residential</h3>
                <p>Panel upgrades, repairs, and smart home installs.</p>
            </div>
            <div style={{padding:'20px', border:'1px solid #444', borderRadius:'8px', textAlign:'center'}}>
                <h3>Commercial</h3>
                <p>Compliance, lighting, and maintenance contracts.</p>
            </div>
            <div style={{padding:'20px', border:'1px solid #444', borderRadius:'8px', textAlign:'center'}}>
                <h3>Emergency</h3>
                <p>24/7 Response for urgent electrical failures.</p>
            </div>
        </div>

        <div style={{textAlign: 'center', marginTop: '50px'}}>
            <Link href="/contact" className="btn">
                Book Service in {typeof city === 'string' ? city.charAt(0).toUpperCase() + city.slice(1).replace('-', ' ') : 'Your Area'}
            </Link>
        </div>
      </div>
    </Layout>
  );
}

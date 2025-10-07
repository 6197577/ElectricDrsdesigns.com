import ServiceDetail from '../../../components/ServiceDetail'

export default function ThermographicSurveyPage() {
  return (
    <ServiceDetail
      title="Commercial Thermographic Surveys | Electric DRs Designs"
      metaDescription="Proactive electrical thermographic surveys in Charleston, WV. Identify hidden faults, prevent downtime, and enhance safety with our certified thermography services."
      serviceType="Live Service"
      imageUrl="/images/thermographic-survey.jpg"
      imageAlt="A high-resolution thermal image showing hotspots on an industrial electrical panel."
      bookingUrl="https://calendar.app.google/FMCxkefPzPVQLrtH7"
      serviceDescription={
        <>
          <h2>Uncover Hidden Electrical Risks Before They Become Disasters</h2>
          <p>
            In a commercial or industrial setting, electrical failures are more than an inconvenience—they lead to costly downtime, equipment damage, and serious safety hazards. Our certified thermographic surveys use advanced thermal imaging technology to detect invisible heat signatures, identifying overloaded circuits, loose connections, and failing components long before they can cause a catastrophic failure.
          </p>
          <h3>Our Three-Tiered Pricing Model</h3>
          <p>We offer clear, structured pricing to meet the needs of any business. Each tier is designed to provide exceptional value and actionable insights.</p>
          
          <div className="pricing-tier">
            <h4>Tier 1: Business Essentials Scan</h4>
            <p className="price">Starting at $499</p>
            <p>Ideal for small businesses and retail spaces, this survey focuses on the most critical components to ensure fundamental safety and compliance.</p>
            <ul>
              <li>Single Main Electrical Panel & Disconnect Scan</li>
              <li>Visual Inspection of Main Grounding System</li>
              <li>Summary Report with Key Findings & Thermal Images</li>
            </ul>
          </div>

          <div className="pricing-tier">
            <h4>Tier 2: Comprehensive Compliance Survey</h4>
            <p className="price">Starting at $1,250</p>
            <p>Our most popular option for medium-sized facilities and property managers. This detailed survey provides the documentation needed for insurance and proactive maintenance.</p>
            <ul>
              <li>Includes all Tier 1 services</li>
              <li>Inspection of up to 5 Distribution Panels</li>
              <li>Survey of Major HVAC and Mechanical Equipment Connections</li>
              <li>Detailed, Multi-Page Report with Prioritized Recommendations</li>
            </ul>
          </div>

          <div className="pricing-tier">
            <h4>Tier 3: Industrial & Critical Facility Assessment</h4>
            <p className="price">Custom Quote</p>
            <p>A bespoke survey for industrial plants, data centers, and critical facilities where uptime is paramount. This assessment covers the entire electrical infrastructure.</p>
            <ul>
              <li>Comprehensive Survey of all Electrical Panels & Switchgear</li>
              <li>Motor Control Centers (MCCs) & VFDs</li>
              <li>Substation and Transformer Analysis</li>
              <li>Quantitative Analysis & Baseline Reporting for Predictive Maintenance</li>
            </ul>
          </div>
        </>
      }
      serviceFeatures={[
        "Certified Level II Thermographers",
        "Prevent Costly Unplanned Downtime",
        "Meet Insurance & NFPA 70B Compliance",
        "Detailed, Actionable Reporting",
        "Identify Fire Risks & Safety Hazards",
      ]}
    />
  );
}



import ServiceDetail from '../../../../components/ServiceDetail';

export default function InspectionReportPage() {
  return (
    <ServiceDetail
      title="Comprehensive Electrical Inspection Report Template"
      metaDescription="A professional-grade inspection report template for property managers and diligent homeowners."
      serviceType="Digital Product"
      imageUrl="/images/inspection-report.jpg" 
      imageAlt="Preview of the electrical inspection report template"
      bookingUrl="https://buy.stripe.com/YOUR_STRIPE_LINK_HERE" 
      serviceDescription={
        <>
          <h2>The Same Tool the Pros Use</h2>
          <p>
            Need to document the condition of a property's electrical system? Whether you are a landlord, a property flipper, or a very thorough homeowner, this <strong>Comprehensive Inspection Report Template</strong> gives you a structured format to audit every room.
          </p>
        </>
      }
      serviceFeatures={[
        "Room-by-Room Checklist Format",
        "Sections for Panel, Service Drop, and Grounding",
        "Hazard Severity Rating System included",
        "Instant PDF & Editable Word Doc Download"
      ]}
    />
  );
}

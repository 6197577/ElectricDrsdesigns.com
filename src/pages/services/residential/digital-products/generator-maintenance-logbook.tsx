import ServiceDetail from '../../../../components/ServiceDetail';

export default function GeneratorLogbookPage() {
  return (
    <ServiceDetail
      title="Comprehensive Generator Maintenance Logbook"
      metaDescription="Keep your standby generator running perfectly with our digital maintenance logbook. Track oil changes, test runs, and battery health."
      serviceType="Digital Product"
      imageUrl="/images/generator-logbook.jpg" // Ensure you add this image to public/images
      imageAlt="Digital preview of a generator maintenance log"
      bookingUrl="https://buy.stripe.com/YOUR_STRIPE_LINK_HERE" 
      serviceDescription={
        <>
          <h2>Never Miss a Critical Generator Checkup</h2>
          <p>
            Your standby generator is your insurance policy against power outages. But if you don't track its maintenance, it might fail when you need it most. Our <strong>Comprehensive Generator Maintenance Logbook</strong> is a downloadable PDF designed by pros to help homeowners track:
          </p>
          <ul>
            <li>Weekly exercise run status</li>
            <li>Oil and filter change intervals</li>
            <li>Battery voltage checks</li>
            <li>Fuel levels and stabilization dates</li>
          </ul>
        </>
      }
      serviceFeatures={[
        "Instant PDF Download",
        "Printable pages for physical record keeping",
        "Maintenance Schedule Cheat Sheet included",
        "Troubleshooting guide for common start-up errors"
      ]}
    />
  );
}

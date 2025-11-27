import React from 'react';
import Layout from '@/components/Layout';

export default function SubcontractorAgreementPage() {
  return (
    <Layout 
      title="Master Subcontractor Agreement & Vendor Code of Conduct | Electric DRs Designs"
      description="Official guidelines, code of conduct, and service agreement terms for subcontractors and vendors partnering with Electric DRs Designs."
    >
      <div className="container">
        <div className="max-w-4xl mx-auto bg-white p-8 shadow-lg rounded-lg">
            <h1 className="text-4xl font-bold text-center mb-2">Master Subcontractor Agreement</h1>
            <p className="text-center text-gray-500 mb-8">Vendor Relations & Standard Operating Procedures</p>

            <div className="prose prose-lg max-w-none text-gray-700">
                
                <section className="mb-10">
                    <h2 className="text-2xl font-bold text-orange-500 border-b pb-2 mb-4">1. Introduction</h2>
                    <p>
                        Electric DRs Designs takes pride in evaluating our vendors based on their suitability for our company profile, clientele, and services. 
                        This document outlines the procedures, policies, and vendor set-up requirements to ensure effective communication and a successful partnership.
                    </p>
                </section>

                <section className="mb-10">
                    <h2 className="text-2xl font-bold text-orange-500 border-b pb-2 mb-4">2. Subcontractor Code of Conduct</h2>
                    <ul className="list-disc pl-6 space-y-2">
                        <li><strong>Professionalism:</strong> Subcontractors represent Electric DRs Designs and must present themselves in the highest professional standards.</li>
                        <li><strong>Pricing Confidentiality:</strong> Subcontractors are <strong>NEVER</strong> permitted to discuss pricing with or in front of on-site personnel/clients unless explicitly directed by management.</li>
                        <li><strong>Dispute Resolution:</strong> In the case of a dispute with store employees or customers, the Subcontractor agrees to remove themselves from the situation immediately and contact Electric DRs management. Confrontation is strictly prohibited.</li>
                        <li><strong>Legal Compliance:</strong> Subcontractors guarantee all Work will be performed in compliance with all applicable federal, state, and local laws.</li>
                    </ul>
                </section>

                <section className="mb-10">
                    <h2 className="text-2xl font-bold text-orange-500 border-b pb-2 mb-4">3. Work Order Protocols & NTEs</h2>
                    <div className="bg-red-50 p-4 border-l-4 border-red-500 mb-4">
                        <strong>CRITICAL:</strong> DO NOT GO OVER ASSIGNED NTEs (Not To Exceed limits) WITHOUT WRITTEN APPROVAL.
                    </div>
                    <p>
                        Subcontractors will not be paid for amounts exceeding the NTE unless a revised Work Order with authorization is provided. 
                        Technicians must ensure all procedures are followed before closing out a job.
                    </p>
                </section>

                <section className="mb-10">
                    <h2 className="text-2xl font-bold text-orange-500 border-b pb-2 mb-4">4. Technician Rules & Assurance</h2>
                    <ul className="list-disc pl-6 space-y-2">
                        <li><strong>Uniforms:</strong> Technicians should always be clean, presentable, and preferably in uniform.</li>
                        <li><strong>Check-In/Out:</strong> Techs must notify Electric DRs upon arrival and departure. Usage of the IVR (Interactive Voice Response) system for clocking in/out is mandatory for payment validation.</li>
                        <li><strong>Background Checks:</strong> Subcontractor will conduct annual criminal background checks. No individual on the national sex offender registry or with felony convictions involving theft/violence in the last 7 years may enter client property.</li>
                    </ul>
                </section>

                <section className="mb-10">
                    <h2 className="text-2xl font-bold text-orange-500 border-b pb-2 mb-4">5. Billing & Payment Terms</h2>
                    <ul className="list-disc pl-6 space-y-2">
                        <li><strong>Invoice Submission:</strong> Invoices must be itemized (Labor Rate x Hours, Materials, Travel, Tax) and reference the Work Order number.</li>
                        <li><strong>Documentation:</strong> Sign-offs, photos (Before & After), and surveys must be uploaded to the Vendor Portal within 2 days of site visit completion.</li>
                        <li><strong>Payment Cycle:</strong> Uncontested invoices with proper documentation are typically paid within 45 days of receipt.</li>
                    </ul>
                </section>

                <div className="mt-12 p-6 bg-gray-100 rounded-lg text-center">
                    <h3 className="text-xl font-bold mb-2">Ready to Become a Partner?</h3>
                    <p className="mb-4">If you agree to these terms and wish to join our vendor network, please contact our vendor relations team.</p>
                    <a href="mailto:vendor.relations@electricdrsdesigns.com" className="btn">Submit Vendor Application</a>
                </div>

            </div>
        </div>
      </div>
    </Layout>
  );
}

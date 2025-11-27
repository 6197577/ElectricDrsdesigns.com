import React from 'react';
import Layout from '../components/Layout';
import Image from 'next/image';

export default function PaymentPage() {
  return (
    <Layout title="Make a Payment | Electric DRs Designs">
      <div className="container">
        <h1 style={{textAlign: 'center'}}>Secure Payment Portal</h1>
        <p style={{textAlign: 'center', maxWidth: '700px', margin: '0 auto 50px'}}>
            Thank you for choosing Electric DRs Designs. You can pay your invoice or deposit securely online using Stripe or PayPal.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Stripe Options */}
            <div className="space-y-6">
                <div style={{backgroundColor: 'var(--card-bg)', padding: '30px', borderRadius: '8px', textAlign: 'center', border: '1px solid var(--border-color)'}}>
                    <h3>Pay Service Invoice</h3>
                    <p>Pay for a recently completed service call or repair.</p>
                    <a href="https://buy.stripe.com/YOUR_INVOICE_LINK" className="btn">Pay via Stripe</a>
                </div>
                <div style={{backgroundColor: 'var(--card-bg)', padding: '30px', borderRadius: '8px', textAlign: 'center', border: '1px solid var(--border-color)'}}>
                    <h3>Maintenance Plan</h3>
                    <p>Renew or sign up for our annual safety membership.</p>
                    <a href="https://buy.stripe.com/YOUR_MEMBERSHIP_LINK" className="btn">Join Plan</a>
                </div>
            </div>

            {/* QR Code / Quick Pay */}
            <div style={{backgroundColor: '#fff', padding: '40px', borderRadius: '8px', textAlign: 'center', border: '2px solid var(--primary-orange)', color: '#333'}}>
                <h3 style={{color: '#111', marginBottom: '20px'}}>Scan to Pay</h3>
                <p style={{marginBottom: '20px'}}>Use your mobile device to pay instantly via PayPal or Venmo.</p>
                
                <div style={{position: 'relative', width: '250px', height: '250px', margin: '0 auto'}}>
                    <Image 
                        src="/images/payment-qr.png" 
                        alt="Scan to Pay QR Code" 
                        layout="fill" 
                        objectFit="contain"
                    />
                </div>
                <p style={{marginTop: '20px', fontSize: '0.9rem', color: '#666'}}>
                    Accepted: PayPal, Venmo, CashApp
                </p>
            </div>
        </div>
      </div>
    </Layout>
  );
}

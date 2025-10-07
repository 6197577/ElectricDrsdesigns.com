import React from 'react';
import Layout from '@/components/Layout';
import Link from 'next/link';
import Image from 'next/image';
import styles from '@/styles/ServiceDetail.module.css';

interface ServiceDetailProps {
  title: string;
  metaDescription: string;
  serviceType: 'Live Service' | 'Remote Service' | 'Digital Product';
  imageUrl: string;
  imageAlt: string;
  serviceDescription: React.ReactNode;
  serviceFeatures: string[];
  bookingUrl: string;
}

const ServiceDetail: React.FC<ServiceDetailProps> = ({
  title,
  metaDescription,
  serviceType,
  imageUrl,
  imageAlt,
  serviceDescription,
  serviceFeatures,
  bookingUrl,
}) => {
  const isDigitalProduct = serviceType === 'Digital Product';
  const buttonText = isDigitalProduct ? 'Purchase Now' : 'Book a Consultation';
  const cardHeaderText = isDigitalProduct ? 'Product Details' : 'Service Details';

  return (
    <Layout title={`${title} | Electric DRs Designs`} description={metaDescription}>
      <header className={styles.serviceHeader}>
        <div className={styles.headerContent}>
          <span className={styles.serviceTypeBadge}>{serviceType}</span>
          <h1>{title}</h1>
        </div>
      </header>
      <div className="container">
        <div className={styles.serviceGrid}>
          <div className={styles.description}>
            {serviceDescription}
          </div>
          <div className={styles.sidebar}>
            <div className={styles.imageContainer}>
                <Image src={imageUrl} alt={imageAlt} width={500} height={300} style={{ objectFit: 'cover', borderRadius: '8px' }} />
            </div>
            <div className={styles.detailsCard}>
              <h3>{cardHeaderText}</h3>
              <ul className={styles.featuresList}>
                {serviceFeatures.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
              <Link href={bookingUrl} className="btn" target="_blank" rel="noopener noreferrer">
                {buttonText}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ServiceDetail;



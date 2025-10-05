import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '@/styles/LocationCard.module.css';

interface LocationCardProps {
  name: string;
  imageUrl: string;
  pageUrl: string;
}

const LocationCard: React.FC<LocationCardProps> = ({ name, imageUrl, pageUrl }) => {
  return (
    <Link href={pageUrl} className={styles.card}>
      <Image src={imageUrl} alt={`Electrical services in ${name}`} layout="fill" objectFit="cover" />
      <div className={styles.overlay}>
        <h3>{name}</h3>
      </div>
    </Link>
  );
};

export default LocationCard;

import Image from 'next/image';
import styles from '../styles/LocationCard.module.css';

interface Props {
  name: string;
  imageUrl: string;
  pageUrl: string;
}

const LocationCard = ({ name, imageUrl, pageUrl }: Props) => {
  return (
    <Link href={pageUrl} className={styles.card}>
      <Image src={imageUrl} alt={name} layout="fill" objectFit="cover" />
      <div className={styles.overlay}>
        <h3>{name}</h3>
      </div>
    </Link>
  );
};
export default LocationCard;

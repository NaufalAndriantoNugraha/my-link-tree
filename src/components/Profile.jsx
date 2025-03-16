import styles from '../styles/Profile.module.css';

export default function Profile({ title, description, imagePath, imageAlt }) {
  return (
    <div className={styles.profile}>
      <img
        src={imagePath}
        alt={imageAlt}
        width={90}
        height={90}
        className={styles.image}
      />
      <p className={styles.title}>{title}</p>
      <p>{description}</p>
    </div>
  );
}

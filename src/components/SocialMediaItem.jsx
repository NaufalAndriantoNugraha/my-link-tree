import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from '../styles/SocialMediaItem.module.css';

export default function SocialMediaItem({ title, icon, link = '#' }) {
  return (
    <div className={styles.item}>
      <FontAwesomeIcon icon={icon} size="2x" />
      <a href={link} target="_blank">
        {title}
      </a>
    </div>
  );
}

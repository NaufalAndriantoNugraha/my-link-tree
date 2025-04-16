import styles from '../styles/SocialMediaItem.module.css';

export default function SocialMediaItemReactIcon({ title, icon, link = '#' }) {
  return (
    <div className={styles.item}>
      {icon}
      <a href={link} target="_blank">
        {title}
      </a>
    </div>
  );
}

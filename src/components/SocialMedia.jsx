import SocialMediaItem from './SocialMediaItem';
import {
  faLinkedin,
  faGithub,
  faInstagram,
  faSteam,
} from '@fortawesome/free-brands-svg-icons';
import styles from '../styles/SocialMedia.module.css';

export default function SocialMedia() {
  const socialMediaData = [
    {
      title: 'Linkedin',
      icon: faLinkedin,
      link: 'https://www.linkedin.com/in/naufal-andrianto-nugraha-999597280/',
    },
    {
      title: 'GitHub',
      icon: faGithub,
      link: 'https://github.com/NaufalAndriantoNugraha',
    },
    {
      title: 'Instagram',
      icon: faInstagram,
      link: 'https://www.instagram.com/naufalandrianton/',
    },
    {
      title: 'Steam',
      icon: faSteam,
      link: 'https://steamcommunity.com/profiles/76561198974358926/',
    },
  ];

  return (
    <div className={styles.container}>
      {socialMediaData.map((data, index) => (
        <SocialMediaItem
          key={index}
          title={data.title}
          icon={data.icon}
          link={data.link}
        />
      ))}
    </div>
  );
}

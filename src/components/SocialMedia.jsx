import SocialMediaItemFontAwesome from './SocialMediaItemFontAwesome';
import {
  faLinkedin,
  faGithub,
  faInstagram,
  faSteam,
} from '@fortawesome/free-brands-svg-icons';
import { SiLeetcode, SiCodewars } from 'react-icons/si';
import styles from '../styles/SocialMedia.module.css';
import SocialMediaItemReactIcon from './SocialMediaItemReactIcon';

const socialMediaData = [
  {
    title: 'Linkedin',
    isUsingFontAwesome: true,
    icon: faLinkedin,
    link: 'https://www.linkedin.com/in/naufal-andrianto-nugraha-999597280/',
  },
  {
    title: 'GitHub',
    isUsingFontAwesome: true,
    icon: faGithub,
    link: 'https://github.com/NaufalAndriantoNugraha',
  },
  {
    title: 'Instagram',
    isUsingFontAwesome: true,
    icon: faInstagram,
    link: 'https://www.instagram.com/naufalandrianton/',
  },
  {
    title: 'Steam',
    isUsingFontAwesome: true,
    icon: faSteam,
    link: 'https://steamcommunity.com/profiles/76561198974358926/',
  },
  {
    title: 'Leetcode',
    isUsingFontAwesome: false,
    icon: <SiLeetcode size={30} />,
    link: 'https://leetcode.com/u/andriantonugrahanaufal/',
  },
  {
    title: 'Codewars',
    isUsingFontAwesome: false,
    icon: <SiCodewars size={30} />,
  },
];

export default function SocialMedia() {
  return (
    <div className={styles.container}>
      {socialMediaData.map((data, index) =>
        data.isUsingFontAwesome === true ? (
          <SocialMediaItemFontAwesome
            key={index}
            title={data.title}
            icon={data.icon}
            link={data.link}
          />
        ) : (
          <SocialMediaItemReactIcon
            key={index}
            title={data.title}
            icon={data.icon}
            link={data.link}
          />
        ),
      )}
    </div>
  );
}

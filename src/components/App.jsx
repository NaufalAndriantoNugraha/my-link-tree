import Profile from './Profile';
import SocialMedia from './SocialMedia';
import styles from '../styles/App.module.css';

export default function App() {
  return (
    <div className={styles.app}>
      <Profile
        title="Naufal Andrianto Nugraha"
        description="Mahasiswa | Web Developer"
        imagePath="/src/assets/profile_photo.jpg"
        imageAlt="Photo of Naufal Andrianto Nugraha"
      />
      <SocialMedia />
    </div>
  );
}

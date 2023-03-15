import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import styles from "../styles/Navbar.module.css";

const navigation = [
  { id: 1, title: 'Home', path: '/' },
  { id: 2, title: 'Posts', path: '/posts' },
  { id: 3, title: 'Contacts', path: '/contacts' },
];

const Navbar = () => {
  const { pathname } = useRouter();

  return (
    <nav className={styles.nav}>
      <div className={styles.wrapper}>
        <Image className={styles.logo} src="/logo.png" width={58} height={58} alt="appLogo" />
        <div className={styles.logoName}>Logo</div>
      </div>
      <div className={styles.links}>
        {navigation.map(({ id, title, path }) => (
          <Link className={pathname === path ? styles.active : styles.link} key={id} href={path}><span>{title}
          </span>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;

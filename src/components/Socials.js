import Head from "next/head";
import styles from "../styles/Socials.module.css";
import { getIconComponentByName } from '../utils/icons-map';

const Socials = ({ socials }) => {
  if (!socials) {
    return null;
  }

  return (
    <ul className={styles.socials}>
      {socials && socials.map(({ id, name, path }) => (
        <li key={id}>
          {/* <a> потому что ссылка переводит на сторонние ресурсы */}
          <a className={styles.socialsIcon} href={path} target="_blank">
            {getIconComponentByName(name)}
          </a>
        </li>
      ))}
    </ul>

  );
}

export default Socials;

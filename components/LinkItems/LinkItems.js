import Link from "next/link";
import styles from "./styles";

const LinkItems = props => {
  const navItemsList = props.items.map((element, index) => (
    <li className={`nav-item`} key={index}>
      <Link href={element.href}>
        <a
          className={`${element.class} nav-link` || "nav-link"}
          title={element.title}
        >
          {element.text}
        </a>
      </Link>
    </li>
  ));
  return (
    <ul className={`nav`}>
      {navItemsList}
      {styles}
    </ul>
  );
};

export default LinkItems;

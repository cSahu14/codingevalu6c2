import { Link } from "react-router-dom";

const links = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "About",
    link: "/about",
  },
  {
    title: "Products",
    link: "/products",
  },
  //   add the other link as well
];
export const Navbar = () => {
  return (
    //map through the link ad display it in header
    <div>
      {links.map((e, index) => {
        return (
          <Link key={index} to={e.link}>
            {/* // <li id={e.id}>{e.title}</li> */}
            {e.title}
          </Link>
        );
      })}
    </div>
  );
};

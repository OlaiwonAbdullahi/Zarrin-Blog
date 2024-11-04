import logo from "../assets/logo.svg";
import Button from "./Buttons/Button";
import { IoIosSearch } from "react-icons/io";
const Header = () => {
  return (
    <div>
      <div className="">
        <img src={logo} alt="" />
      </div>
      <div className=" text-sm">
        <ul>
          <li>Blog</li>
          <li>About</li>
          <li>
            <IoIosSearch />
          </li>
          <Button />
        </ul>
      </div>
    </div>
  );
};

export default Header;

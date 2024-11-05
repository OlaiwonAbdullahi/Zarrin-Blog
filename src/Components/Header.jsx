import logo from "../assets/logo.svg";
import Button from "./Buttons/Button";
import { IoIosSearch } from "react-icons/io";
const Header = () => {
  return (
    <div className=" flex justify-between items-center px-12 py-6 bg-bg font-Raleway shadow-md h-20">
      <div className="w-21 h-auto">
        <img src={logo} alt="logo" className="w-18"/>
      </div>
      <div className=" text-sm">
        <ul className=" flex gap-6 items-center font-semibold ">
          <li className="text-secondary">Blog</li>
          <li>About</li>
          <li>
            <IoIosSearch className=" h-5 w-5" />
          </li>
          <Button />
        </ul>
      </div>
    </div>
  );
};

export default Header;

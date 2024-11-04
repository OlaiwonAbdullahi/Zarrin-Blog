import logo from "../assets/logo.svg";
import Button from "./Buttons/Button";
import { IoIosSearch } from "react-icons/io";
const Header = () => {
  return (
    <div className=" flex justify-between items-center p-3 bg-bg font-Raleway">
      <div className="">
        <img src={logo} alt="" />
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

import { NavLink } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { GoSearch } from "react-icons/go";

const Header = () => {
  return (
    <div className="bg-[#FAF7F0]">
      <div className="max-w-[1400px] mx-auto">
        <div className="px-3 py-8 flex items-center justify-between">
          <NavLink to={"/"}>
            <img
              className="w-45"
              src="https://blacks.themerex.net/wp-content/uploads/2025/01/logo-retina.png"
              alt=""
            />
          </NavLink>
          <div className="flex items-center gap-8">
            <nav className="flex gap-4">
              <NavLink to={"/contact"}>Contact Us</NavLink>
              <NavLink to={"/about"}>About Us</NavLink>
            </nav>
            <div className="flex gap-4 text-3xl">
              <div className="relative">
                <button className="cursor-pointer">
                  <AiOutlineShoppingCart />
                </button>
                <p className="absolute bottom-1 left-4 bg-[#084935] rounded-full h-4 w-4 flex items-center justify-center text-[10px] text-white">0</p>
              </div>
              <button className="cursor-pointer">
                <GoSearch />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

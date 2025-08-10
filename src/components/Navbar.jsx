import {
  MagnifyingGlassIcon,
  ShoppingCartIcon,
  UserCircleIcon,
  HeartIcon,
  ArrowLeftIcon,
  CameraIcon,
  MicrophoneIcon,
  QrCodeIcon,
} from "@heroicons/react/24/outline";
import logo from '../assets/images/Logo.png';

function Navbar() {
  return (
    <>
      <div className="cursor-pointer hidden md:block fixed top-0 left-0 w-full bg-white shadow-md z-50">

        {/* Top Row */}
        <div className="flex items-center justify-between px-6 ">

          {/* Logo */}
          <img
            src={logo}
            alt="Logo"
            className="object-contain"
            style={{ maxWidth: '130px', height: 'auto' }}></img>

          {/* Search */}
          <div className="bg-gray-100 flex items-center px-3 py-1 rounded-lg w-full max-w-xl mx-6">
            <input
              type="text"
              placeholder="Search Amazon.in"
              className="bg-gray-100 outline-none w-full placeholder-gray-700">
            </input>
            <MagnifyingGlassIcon className="h-5 w-6 text-black" />

          </div>

          {/* Account / Wishlist / Cart */}
          <div className="flex items-center font-semibold">
            <UserCircleIcon className="h-5 w-6 text-black" />
            <p className="cursor-pointer p-[10px]">Account</p>
            <HeartIcon className="h-5 w-6 text-black" />
            <p className="cursor-pointer p-[10px]">Wishlist</p>
            <ShoppingCartIcon className="h-5 w-6 text-black" />
            <p className="cursor-pointer p-[10px]">Cart</p>
          </div>
        </div>
        {/* Bottom Row */}
        <nav className="bg-gray-700 px-8 py-2 text-[15px] flex  
         justify-between overflow-x-auto text-white">
          <span className="cursor-pointer hover:text-gray-400">All</span>
          <span className="cursor-pointer hover:text-gray-400">Mobiles</span>
          <span className="cursor-pointer hover:text-gray-400">Mx Player</span>
          <span className="cursor-pointer hover:text-gray-400">Sell</span>
          <span className="cursor-pointer hover:text-gray-400">Gift Cards</span>
          <span className="cursor-pointer hover:text-gray-400">Buy Again</span>
          <span className="cursor-pointer hover:text-gray-400">Amazon Pay</span>
          <span className="cursor-pointer hover:text-gray-400">Kindle eBooks</span>
          <span className="cursor-pointer hover:text-gray-400">AmazonBasics</span>
          <span className="cursor-pointer hover:text-gray-400">Books</span>
          <span className="cursor-pointer hover:text-gray-400">Today's Deal</span>
          <span className="cursor-pointer hover:text-gray-400">Gift Ideas</span>
          <span className="cursor-pointer hover:text-gray-400">Bestsellers</span>
          <span className="cursor-pointer hover:text-gray-400">Browings History</span>
          <span className="cursor-pointer hover:text-gray-400">Home Improvement</span>
        </nav>
      </div>
      {/*-----------------------------------mobile view------------------------------*/}
      <div className="mobile_view md:hidden flex items-center justify-between px-2 py-4 
      bg-gradient-to-r from-teal-400 to-teal-300">
        {/* Back Arrow */}
        <ArrowLeftIcon className="h-5 w-[26px] text-black" />

        {/* Search Bar */}
        <div className="flex flex-1 items-center bg-gray-100 py-1 rounded-lg mx-3">
          <MagnifyingGlassIcon className="h-5 w-6 text-black ml-[3px]" />
          <input
            type="text"
            placeholder="Search Amazon.in..."
            className="flex-1 bg-transparent outline-none h-[4vh] ml-[3px]
            placeholder-gray-700 font-normal border border-none"
          />

          <CameraIcon className="h-5 w-[30px] text-black" />
          <MicrophoneIcon className="h-5 w-[30px] text-black" />
        </div>

        {/* QR Code Icon */}
        <QrCodeIcon className="h-7 w-[9vw] text-black" />
      </div>

    </>
  );
}

export default Navbar;

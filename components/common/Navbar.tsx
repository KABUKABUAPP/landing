// components/Navbar.tsx
import Link from 'next/link';
import { useState } from 'react';
import Button from '../ui/Button/Button';
import Logo from './Logo';

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-[#FFFFFF] text-black p-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
            <Logo />
        </div>
        <div className="hidden md:flex space-x-4 mb-3">
            <a href={"https://kabukaburider.page.link/app"}>
                <Button
                title={'Download Rider App'}
                className="!text-[16px] mt-6"
                size="medium" />
            </a>
            <a href={"https://kabukabudriver.page.link/app"}>
                <Button
                title={'Download Driver App'}
                className="!text-[16px] mt-6"
                size="medium" />
            </a>
        </div>
        <div className="md:hidden block">
          <button
            onClick={toggleMobileMenu}
            className="block text-2xl focus:outline-none"
          >
            &#8801;
          </button>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="md:hidden block">
          <ul className="flex flex-col space-y-2 items-center">
            <li>
                <a href={"https://kabukaburider.page.link/app"}>
                    <Button
                    title={'Download Rider App'}
                    className="!text-[16px] mt-6"
                    size="medium" />
                </a>
            </li>
            <li>
                <a href={"https://kabukabudriver.page.link/app"}>
                    <Button
                    title={'Download Driver App'}
                    className="!text-[16px] mt-6"
                    size="medium" />
                </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

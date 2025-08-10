import Link from "next/link";
import { FiPhone, FiClock, FiMail } from "react-icons/fi";

export const TopBar = () => {
  return (
    <div className="bg-white text-sm text-gray-600 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-10">
          <div className="flex items-center space-x-6">
            <div className="flex items-center gap-2">
              <FiPhone className="w-4 h-4" />
              <span>1-985-245-45635</span>
            </div>
            <div className="hidden md:flex items-center gap-2">
              <FiClock className="w-4 h-4" />
              <span>Mon - Fri 09:00 - 17:00</span>
            </div>
          </div>

          <div className="flex items-center space-x-6">
            <a
              href="mailto:contact@ashton.com"
              className="hidden md:flex items-center gap-2 hover:text-accent"
            >
              <FiMail className="w-4 h-4" />
              <span>contact@ashton.com</span>
            </a>

            <div className="flex items-center space-x-4 font-semibold">
              <Link href="#" className="hover:text-accent">
                FR
              </Link>
              <Link href="#" className="text-gray-900">
                EN
              </Link>
              <Link href="#" className="hover:text-accent">
                DE
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

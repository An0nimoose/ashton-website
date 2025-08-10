import { FiMessageSquare, FiBookOpen, FiShoppingCart } from "react-icons/fi";

export const FloatingActionBar = () => {
  return (
    <div className="fixed top-1/4 -translate-y-1/2 right-0 z-50 hidden sm:block">
      <div className="bg-white p-2 flex flex-col gap-2 shadow-lg rounded-l-md">
        <button
          className="relative p-2 group hover:bg-gray-100 rounded-md transition-colors"
          aria-label="Presale Question"
        >
          <FiMessageSquare className="w-5 h-5 text-gray-700" />
          <span
            className="absolute right-full top-1/2 -translate-y-1/2 mr-2
                         bg-white text-black text-sm font-semibold px-3 py-1 rounded-md
                         whitespace-nowrap opacity-0 group-hover:opacity-100
                         scale-95 group-hover:scale-100 transition-all duration-200
                         pointer-events-none"
          >
            Presale Question
          </span>
        </button>

        <button
          className="relative p-2 group hover:bg-gray-100 rounded-md transition-colors"
          aria-label="Theme Documentation"
        >
          <FiBookOpen className="w-5 h-5 text-gray-700" />
          <span
            className="absolute right-full top-1/2 -translate-y-1/2 mr-2
                         bg-white text-black text-sm font-semibold px-3 py-1 rounded-md
                         whitespace-nowrap opacity-0 group-hover:opacity-100
                         scale-95 group-hover:scale-100 transition-all duration-200
                         pointer-events-none"
          >
            Theme Documentation
          </span>
        </button>

        <button
          className="relative p-2 group hover:bg-gray-100 rounded-md transition-colors"
          aria-label="Purchase Theme"
        >
          <FiShoppingCart className="w-5 h-5 text-gray-700" />
          <span
            className="absolute right-full top-1/2 -translate-y-1/2 mr-2
                         bg-white text-black text-sm font-semibold px-3 py-1 rounded-md
                         whitespace-nowrap opacity-0 group-hover:opacity-100
                         scale-95 group-hover:scale-100 transition-all duration-200
                         pointer-events-none"
          >
            Purchase Theme
          </span>
        </button>
      </div>
    </div>
  );
};

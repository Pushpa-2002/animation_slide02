export default function Header() {
    return (
      <header>
        <div className="flex justify-between bg-transparent text-white fixed top-0 left-0 w-full z-90 shadow-md">
          <div className="flex font-bold text-2xl items-center justify-start p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-plane-icon lucide-plane bg-orange-500 w-7 h-6 rounded-sm text-white m-2 p-1"
            >
              <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z" />
            </svg>
            <p>ABC Consultancy</p>
          </div>
          <div>
            <ul className="flex space-x-6 items-center p-4 justify-center text-lg text-[#ffffffa0]">
              <li>
                <a href="#service">Services</a>
              </li>
               <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#contact">Contacts</a>
              </li>
            </ul>
          </div>
        </div>
      </header>
    );
}
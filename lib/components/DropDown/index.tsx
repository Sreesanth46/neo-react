import React, { createContext, useContext } from 'react';

interface DropdownContextProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const DropdownContext = createContext<DropdownContextProps>({
  isOpen: false,
  setIsOpen: () => {}
});

type Props = {
  children: string | JSX.Element | JSX.Element[];
};

const UpArrow = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1"
      stroke="currentColor"
      className="w-4 h-4">
      <title>Up Arrow</title>
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18"
      />
    </svg>
  );
};

const DownArrow = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1"
      stroke="currentColor"
      className="w-4 h-4">
      <title>Down Arrow</title>
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
      />
    </svg>
  );
};

export function Dropdown({ children }: Props) {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <DropdownContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </DropdownContext.Provider>
  );
}

const Button = ({ children }: Props) => {
  const { isOpen, setIsOpen } = useContext(DropdownContext);
  return (
    <button
      type="button"
      onClick={() => setIsOpen(currState => !currState)}
      className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex gap-1 items-center dark:bg-blue-600 dark:hover:bg-blue-700">
      {children} {isOpen ? <UpArrow /> : <DownArrow />}
    </button>
  );
};

const List = ({ children }: Props) => {
  const { isOpen } = useContext(DropdownContext);
  return (
    <>
      {isOpen ? (
        <div className="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
          <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
            {children}
          </ul>
        </div>
      ) : null}
    </>
  );
};

const Item = ({ children }: Props) => {
  return <li>{children}</li>;
};

const Footer = ({ children }: Props) => {
  return <div>{children}</div>;
};

Dropdown.Button = Button;
Dropdown.List = List;
Dropdown.Item = Item;
Dropdown.Footer = Footer;

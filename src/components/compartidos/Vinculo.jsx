import { Link } from 'react-router-dom';

const Vinculo = ({ children, texto, to }) => {
  return (
    <Link
      to={to}
      className="flex gap-1 w-full p-3 text-sm font-semibold  hover:bg-gray-200"
    >
      {children}
      <span className="">{texto}</span>
    </Link>
  );
};

export default Vinculo;

const Vinculo = ({ children, texto, href }) => {
  return (
    <a
      href={href}
      className="flex gap-1 w-full p-3 text-sm font-semibold  hover:bg-gray-200"
    >
      {children}
      <span className="">{texto}</span>
    </a>
  );
};

export default Vinculo;

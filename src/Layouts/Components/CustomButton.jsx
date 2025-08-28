
const CustomButton = ({ children, onClick }) => {
  return (
    <button className="text-lg p-3 rounded-2xl bg-secondaire-500 text-white font-bold cursor-pointer shadow-md w-[55%] text-center" onClick={onClick}>
      <span className="text-lg font-bold">{children}</span>
    </button>
  );
};

export default CustomButton;

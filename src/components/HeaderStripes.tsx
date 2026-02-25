import headerBar from "@/assets/header-bar.png";

const HeaderStripes = () => {
  return (
    <img
      src={headerBar}
      alt=""
      className="w-full h-auto block scale-[1.03] origin-center"
      aria-hidden="true"
      draggable={false}
    />
  );
};

export default HeaderStripes;

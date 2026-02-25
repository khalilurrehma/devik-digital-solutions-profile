import footerBar from "@/assets/footer-bar.png";

const FooterStripes = () => {
  return (
    <img
      src={footerBar}
      alt=""
      className="w-full h-auto block"
      aria-hidden="true"
      draggable={false}
    />
  );
};

export default FooterStripes;

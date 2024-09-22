import { Children } from "react";

const SectionTitle = ({ children, className }) => {
  return (
    <h1
      className={`font-Gilroy font-bold lg:text-[102px] lg:leading-[0.9] md:text-[70px] md:leading-[0.9] text-[36px] leading-[0.9] ${className}`}>
      {children}
    </h1>
  );
};

export default SectionTitle;

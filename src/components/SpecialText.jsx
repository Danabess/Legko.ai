function SpecialText({ children, small }) {
  return (
    <span
      className={`relative text-inherit leading-[0.9] after:absolute md:after:left-5 after:left-2 lg:after:top-6 md:after:top-5 after:-z-10 after:w-full ${
        small ? "after:h-[65px]" : "lg:after:h-[100px] after:md:h-[65px] after:h-[40px]"
      } after:bg-gradient-to-r after:from-transparent after:to-lightGreen after:rounded-r-[30px]`}>
      {children}
    </span>
  );
}

export default SpecialText;

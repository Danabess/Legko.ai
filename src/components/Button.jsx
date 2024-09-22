function Button({ btnContent, wide, className, hidden, dark, transparent, green }) {
  return (
    <button
      className={
        `uppercase text-base leading-none py-3 font-medium tracking-normal rounded-3xl transition-colors duration-400  border-2 text-nowrap ${
          wide ? "px-14" : "px-6"
        } ${hidden ? "hidden min-[850px]:block" : "block"} ${dark ? "bg-dark text-white border-dark" : ""} ${
          transparent ? "text-dark border-dark" : ""
        } ${green ? "bg-lightGreen border-lightGreen text-dark" : ""}` + className
      }>
      {btnContent}
    </button>
  );
}

export default Button;

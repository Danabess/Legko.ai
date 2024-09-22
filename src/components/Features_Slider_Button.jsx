const FeaturesSliderButton = ({ rightButton, imgIndex, slideListLength }) => {
  return (
    <div
      className={`max-lg:hidden p-5 border-2 rounded-full absolute top-1/2 -translate-y-1/2 ${
        rightButton
          ? `${
              imgIndex === slideListLength - 1
                ? "border-gray-500 stroke-gray-500 cursor-default"
                : "border-dark hover:bg-dark stroke-dark hover:stroke-lightGreen"
            } right-3 rotate-180`
          : `${
              imgIndex === 0
                ? "border-gray-500 stroke-gray-500 cursor-default"
                : "border-dark hover:bg-dark stroke-dark hover:stroke-lightGreen"
            } left-3`
      } `}>
      <svg width="20" height="20" viewBox="0 0 9 15" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7.5 13.0576L1.5 7.05762L7.5 1.05762" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
};

export default FeaturesSliderButton;

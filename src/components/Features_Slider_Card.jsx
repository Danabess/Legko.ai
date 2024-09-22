import { useEffect, useState } from "react";
import Button from "./Button";

const FeaturesSliderCard = ({ FeatureSlideItem, imgIndex }) => {
  const [innerImgIndex, setInnerImgIndex] = useState(0);

  const innerSliderImgList = [...FeatureSlideItem.ImgList];

  useEffect(() => {
    setTimeout(() => {
      setInnerImgIndex(innerImgIndex === innerSliderImgList.length - 1 ? 0 : innerImgIndex + 1);
    }, 2500);
  });

  return (
    <article
      className="xl:p-5 lg:p-3 transition-transform duration-300 sm:translate-x-0"
      style={{ transform: `translateX(${-100 * imgIndex}%)` }}>
      <div className="lg:p-[60px] md:p-[48px] p-[35px] bg-lightGreen rounded-[30px] flex md:flex-row flex-col xl:w-[1000px] lg:w-[800px] h-full items-center">
        <div className="m-auto md:w-1/3">
          <h2 className="font-Gilroy font-medium xl:text-[48px] md:text-[40px] text-[32px] leading-none">
            {FeatureSlideItem.name}
          </h2>
          <p className="font-LTSuperior font-medium xl:text-[18px] sm:text-[16px] text-[14px] leading-[1.1] mt-3 xl:mb-8 lg:mb-4 md:mb-8 mb-4">
            {FeatureSlideItem.description}
          </p>
          <Button btnContent="Хочу кейс" className="hover:bg-sky-500 hover:border-sky-500 md:block hidden" dark />
        </div>
        <div className="flex flex-col md:w-2/3 md:pl-16 h-full">
          <div className="flex overflow-hidden">
            {innerSliderImgList.map((item) => (
              <img
                key={innerSliderImgList.indexOf(item)}
                src={item}
                alt=""
                className="rounded-[20px] p-1 transition-transform duration-1000"
                style={{ transform: `translateX(${-100 * innerImgIndex}%)` }}
              />
            ))}
          </div>
          <ul className="flex justify-between font-LTSuperior font-bold xl:text-[18px] md:text-[13px] sm:text-[18px] min-[500px]:text-[14px] text-[10px] md:mt-5 sm:mt-3 mt-1.5 max-md:mb-4 leading-[1.1] text-nowrap">
            {FeatureSlideItem.LinksList.map((item) => (
              <li
                key={FeatureSlideItem.LinksList.indexOf(item)}
                className={`w-min text-center cursor-default ${
                  FeatureSlideItem.LinksList.indexOf(item) === innerImgIndex ? "underline" : ""
                } relative before:absolute xl:before:-left-[10px] md:before:-left-[8px] min-[500px]:before:-left-[10px] before:-left-[6px] before:top-1/2 before:-translate-y-3/4 xl:before:size-[5px] md:before:size-[4px] min-[500px]:before:size-[5px] before:size-[3px] before:bg-dark before:rounded-full`}>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <Button btnContent="Хочу кейс" className="hover:bg-sky-500 hover:border-sky-500 md:hidden w-full" dark />
      </div>
    </article>
  );
};

export default FeaturesSliderCard;

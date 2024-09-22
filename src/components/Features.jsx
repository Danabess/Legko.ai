import Section from "./Section";
import FeaturesSliderCard from "./Features_Slider_Card";
import SpecialText from "./SpecialText";
import SectionTitle from "./Section_Title";
import FeaturesSliderButton from "./Features_Slider_Button";
import SalesImg_1 from "../assets/images/features/sales-1.png";
import SalesImg_2 from "../assets/images/features/sales-2.png";
import SalesImg_3 from "../assets/images/features/sales-3.png";
import MarketingImg_1 from "../assets/images/features/marketing-1.png";
import MarketingImg_2 from "../assets/images/features/marketing-2.png";
import MarketingImg_3 from "../assets/images/features/marketing-3.png";
import ManagementImg_1 from "../assets/images/features/management-1.png";
import ManagementImg_2 from "../assets/images/features/management-2.png";
import ManagementImg_3 from "../assets/images/features/management-3.png";
import { useState } from "react";

const Features = () => {
  const [imgIndex, setImgIndex] = useState(0);

  const FeaturesSlidesList = [
    {
      name: "Продажи",
      description: "Найди новые точки роста и увличь конверсию в продажу за счет Ad Hoc анализа сейлз процессов.",
      ImgList: [SalesImg_1, SalesImg_2, SalesImg_3],
      LinksList: ["Автоворонки", "Чат-боты", "Речевая аналитика"],
    },
    {
      name: "Маркетинг и реклама",
      description: "Экономь на неэффективной рекламе и привлекай больше продаж по меньшей стоимости.",
      ImgList: [MarketingImg_1, MarketingImg_2, MarketingImg_3],
      LinksList: ["AI-аналитика", "Креативы и копирайтинг", "Аудит сайта"],
    },
    {
      name: "Проектный менеджмент",
      description: "Сокарти время на рутинные задачи, увеличь производительность и прозрачность процессов.",
      ImgList: [ManagementImg_1, ManagementImg_2, ManagementImg_3],
      LinksList: ["Авто репорты", "Анализ производительности", "Чат-боты"],
    },
  ];

  const PreviousSlide = () => {
    setImgIndex(imgIndex === 0 ? 0 : imgIndex - 1);
  };
  const NextSlide = () => {
    setImgIndex(imgIndex === FeaturesSlidesList.length - 1 ? FeaturesSlidesList.length - 1 : imgIndex + 1);
  };

  window.addEventListener("resize", () => {
    window.innerWidth < 1024 ? setImgIndex(0) : null;
  });

  return (
    <Section id="Решения" className="scroll-smooth">
      <SectionTitle className="text-center mb-12">
        Как AI <SpecialText>поможет</SpecialText> <br />
        твоему бизнесу?
      </SectionTitle>
      <div className="relative">
        <div className="xl:max-w-[1040px] lg:max-w-[824px] m-auto flex lg:flex-row lg:overflow-hidden flex-col md:gap-y-5 gap-y-3">
          {FeaturesSlidesList.map((item) => (
            <FeaturesSliderCard key={FeaturesSlidesList.indexOf(item)} FeatureSlideItem={item} imgIndex={imgIndex} />
          ))}
        </div>
        <button onClick={PreviousSlide}>
          <FeaturesSliderButton imgIndex={imgIndex} slideListLength={FeaturesSlidesList.length} />
        </button>
        <button onClick={NextSlide}>
          <FeaturesSliderButton rightButton imgIndex={imgIndex} slideListLength={FeaturesSlidesList.length} />
        </button>
      </div>
    </Section>
  );
};

export default Features;

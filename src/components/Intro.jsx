import { useEffect, useState } from "react";
import Section from "./Section";
import SpecialText from "./SpecialText";
import SectionTitle from "./Section_Title";
import MainImg from "../assets/images/intro/Main_img.png";
import MainImgSmall from "../assets/images/intro/Main_img_small.png";
import HabrLogo from "../assets/images/intro/Habr_logo.svg";
import LentaLogo from "../assets/images/intro/Lenta_logo.svg";
import RbkLogo from "../assets/images/intro/Rbk_logo.svg";
import VcLogo from "../assets/images/intro/Vc_logo.svg";
import Button from "./Button";

const Intro = () => {
  const [textTransform, setTextTransform] = useState(100);
  const [blockTransform, setBlockTransform] = useState(0);

  const [sloganList] = useState([
    "Контролируй эффективность своего бизнеса и получай ежедневные отчеты",
    "Продавай больше с AI скорингом заявок и аудитом записаных звонков",
    "Сократи расходы на неэффективные каналы и найди новые точки роста",
  ]);

  useEffect(() => {
    setTimeout(() => {
      setTextTransform(textTransform + 100);
      const shiftedElement = sloganList.shift();
      sloganList.push(shiftedElement);
      setBlockTransform(blockTransform + 100 / sloganList.length);
    }, 1500);
  });

  const AchivmentsList = [
    {
      value: "30%",
      text: (
        <span>
          рост capacity за счет <br /> оптимизации рутины
        </span>
      ),
      icon: "🚀",
    },
    {
      value: "15+",
      text: (
        <span>
          успешных <br /> кейсов
        </span>
      ),
      icon: "🏅",
    },
    {
      value: "30%",
      text: (
        <span>
          команды можно <br /> заменить AI
        </span>
      ),
      icon: "🤖",
    },
    {
      value: "5.000.000",
      text: (
        <span>
          в год в среднем экономят <br /> наши клиенты
        </span>
      ),
      icon: "🏦",
    },
  ];

  const LabelsList = [LentaLogo, VcLogo, HabrLogo, RbkLogo];

  return (
    <Section className="relative lg:pt-16 md:pt-10 pt-3 after:absolute after:-bottom-0 after:w-full after:h-[2px] after:bg-lightGreen after:rounded-full">
      <div className="flex gap-10 md:flex-row flex-col-reverse">
        <div className="flex flex-col justify-center md:text-start text-center lg:gap-8 md:gap-6 gap-5">
          <SectionTitle>
            С AI <SpecialText>легко</SpecialText>
          </SectionTitle>
          <div className="overflow-hidden min-[995px]:max-h-[60px] min-[810px]:max-h-[45px] sm:max-h-[53px] max-h-[39px] ">
            <div className="flex flex-col z-0" style={{ transform: `translateY(${blockTransform}%)` }}>
              {sloganList.map((item) => (
                <p
                  key={sloganList.indexOf(item)}
                  className="font-Gilroy font-medium min-[995px]:text-[27px] min-[810px]:text-[20px] sm:text-[24px] text-[18px] leading-[1.1]  transition-transform duration-500"
                  style={{ transform: `translateY(-${textTransform}%)` }}>
                  {item}
                </p>
              ))}
            </div>
          </div>
          <div className="flex lg:gap-4 gap-2 lg:flex-row flex-col">
            <Button
              btnContent="Записаться на вебинар"
              wide
              className="hover:bg-lightGreen hover:border-lightGreen hover:text-dark"
              dark
            />
            <Button btnContent="Узнать больше" className="hover:bg-lightGreen hover:border-lightGreen" transparent />
          </div>
        </div>
        <div className="flex">
          <img src={window.innerWidth > 1024 ? MainImg : MainImgSmall} alt="Intro-img" className="h-full" />
        </div>
      </div>
      <div className="md:mt-20 mt-6 mb-8 flex md:justify-between md:flex-row flex-col md:gap-0 gap-3 md:bg-dark rounded-[36px] md:py-8 lg:px-20 md:px-8">
        {AchivmentsList.map((item) => {
          return (
            <div
              key={AchivmentsList.indexOf(item)}
              className={`flex md:justify-normal justify-between items-center md:bg-transparent md:p-0 ${
                (AchivmentsList.indexOf(item) + 1) % 2 ? "bg-dark" : "bg-lightGreen"
              } p-8 md:rounded-none rounded-[16px]`}>
              <div className="flex flex-col">
                <h3
                  className={`md:text-lightGreen ${
                    (AchivmentsList.indexOf(item) + 1) % 2 ? "text-lightGreen" : "text-dark"
                  } font-Gilroy font-medium lg:text-[48px] md:text-[40px] text-[32px]`}>
                  {item.value}
                </h3>
                <p
                  className={`md:text-white ${
                    (AchivmentsList.indexOf(item) + 1) % 2 ? "text-white" : "text-dark"
                  } font-LTSuperior font-medium leading-[1.1] lg:text-[18px] md:text-[16px] text-[14px]`}>
                  {item.text}
                </p>
              </div>
              <div className="md:hidden flex text-[32px]">{item.icon}</div>
            </div>
          );
        })}
      </div>
      <div className="flex flex-row justify-center">
        <div className="flex flex-row items-center lg:gap-20 md:gap-12 gap-3">
          <p className="font-LTSuperior font-bold lg:text-[18px] md:text-[16px] text-[14px] relative before:absolute lg:before:-left-[18px] md:before:-left-[15px] before:-left-[12px] before:top-0 before:h-full before:w-[2px] before:rounded-full before:bg-lightGreen">
            О нас пишут:
          </p>
          <div className="flex flex-row lg:gap-12 md:gap-9 gap-6">
            {LabelsList.map((item) => {
              return (
                <img
                  src={item}
                  key={LabelsList.indexOf(item)}
                  className={`lg:max-h-[18px] md:max-h-[15px] max-h-[11px]`}
                />
              );
            })}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Intro;

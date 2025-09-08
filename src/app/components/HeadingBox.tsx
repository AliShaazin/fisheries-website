"use client";

interface HeadingBoxProps {
  smallHeading: string;
  title: string;
  description: string;
  buttonText?: string;
  onButtonClick?: () => void;
  theme?: "default" | "footer";
  containerClassName?: string;
  titleContainerClassName?: string;
  descriptionContainerClassName?: string;
  buttonContainerClassName?: string;
}

const themes = {
  default: {
    container:
      "mb-28 flex flex-col items-center mt-16 md:mt-32 mx-auto w-full h-auto md:h-[335px] text-black",
    titleContainer: "w-full md:w-[1095px]",
    descriptionContainer: "w-full md:w-[719px]",
    buttonContainer: "mt-4 md:mt-6",
    smallHeading:
      "uppercase text-[12px] md:text-[14px] text-[#00AA9D] font-inter-bold",
    title:
      "mt-4 md:mt-6 font-[580] text-[32px] md:text-[56px] leading-[1.2] text-center uppercase font-konig-display-extra-bold",
    description:
      "font-inter-regular mt-4 md:px-10 md:mt-6 font-medium text-[16px] md:text-[18px] leading-[1.5] text-center",
  },
  footer: {
    container: "flex flex-col items-center text-white",
    titleContainer: "max-w-[300px] md:max-w-[700px] px-5 md:px-0",
    descriptionContainer: "max-w-[280px] md:max-w-[700px] px-4 md:px-8",
    buttonContainer: "mt-4 md:mt-6",
    smallHeading:
      "uppercase text-[8px] md:text-[14px] text-white font-inter font-bold leading-[1.1]",
    title:
      "mt-[10px] md:mt-[32px] uppercase text-[20px] md:text-[40px] font-konig-display-extra-bold leading-[1.2] text-center text-white",
    description:
      "mt-[16px] md:mt-[24px] text-[10px] md:text-[18px] text-center font-light md:font-medium leading-[1.5] text-white",
  },
};

const HeadingBox = ({
  smallHeading,
  title,
  description,
  buttonText,
  onButtonClick,
  theme = "default",
  containerClassName,
  titleContainerClassName,
  descriptionContainerClassName,
  buttonContainerClassName,
}: HeadingBoxProps) => {
  const currentTheme = themes[theme];

  return (
    <div className={containerClassName || currentTheme.container}>
      <span className={currentTheme.smallHeading}>{smallHeading}</span>

      <div className={titleContainerClassName || currentTheme.titleContainer}>
        <h1 className={currentTheme.title}>{title}</h1>
      </div>

      <div
        className={
          descriptionContainerClassName || currentTheme.descriptionContainer
        }
      >
        <p className={currentTheme.description}>{description}</p>
      </div>

      {buttonText && onButtonClick && (
        <div
          className={buttonContainerClassName || currentTheme.buttonContainer}
        >
          <button
            type="button"
            className={
              theme === "footer"
                ? "py-2 px-4 md:py-3 md:px-5 text-[10px] md:text-[16px] bg-[#00AA9D] font-semibold rounded-md md:rounded-lg text-white hover:opacity-90 transition-opacity cursor-pointer leading-[1.5]"
                : "py-3 px-4 md:py-4 md:px-5 bg-[#00AA9D] rounded-lg text-white font-semibold text-[16px] md:text-[18px] leading-[1.5] font-inter-regular hover:opacity-90 transition-opacity cursor-pointer"
            }
            onClick={onButtonClick}
          >
            {buttonText}
          </button>
        </div>
      )}
    </div>
  );
};

export default HeadingBox;

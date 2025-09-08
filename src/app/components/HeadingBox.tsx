"use client";

interface HeadingBoxProps {
  smallHeading: string;
  title: string;
  description: string;
  buttonText?: string;
  onButtonClick?: () => void;
  containerClassName?: string;
  titleContainerClassName?: string;
  descriptionContainerClassName?: string;
  buttonContainerClassName?: string;
}

const HeadingBox = ({
  smallHeading,
  title,
  description,
  buttonText,
  onButtonClick,
  containerClassName = "mb-28 flex flex-col items-center mt-16 md:mt-32 mx-auto w-full h-auto md:h-[335px]",
  titleContainerClassName = "w-full md:w-[1095px]",
  descriptionContainerClassName = "w-full md:w-[719px]",
  buttonContainerClassName = "mt-4 md:mt-6",
}: HeadingBoxProps) => {
  return (
    <div className={containerClassName}>
      <span className="uppercase text-[12px] md:text-[14px] text-[#00AA9D] font-inter-bold">
        {smallHeading}
      </span>

      <div className={titleContainerClassName}>
        <h1 className="mt-4 md:mt-6 font-[580] text-[32px] md:text-[56px] leading-[1.2] text-center uppercase font-konig-display-extra-bold">
          {title}
        </h1>
      </div>

      <div className={descriptionContainerClassName}>
        <p className="font-inter-regular mt-4 md:px-10 md:mt-6 font-medium text-[16px] md:text-[18px] leading-[1.5] text-center">
          {description}
        </p>
      </div>

      {buttonText && onButtonClick && (
        <div className={buttonContainerClassName}>
          <button
            type="button"
            className="py-3 px-4 md:py-4 md:px-5 bg-[#00AA9D] rounded-lg text-white font-semibold text-[16px] md:text-[18px] leading-[1.5] font-inter-regular hover:opacity-90 transition-opacity cursor-pointer"
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
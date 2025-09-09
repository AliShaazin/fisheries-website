import Image from "next/image";

interface NewsLetterCardsProps {
  iconUrl: string;
  title: string;
  description: string;
  altText?: string;
}

const NewsLetterCards = ({
  iconUrl,
  title,
  description,
  altText = "Icon",
}: NewsLetterCardsProps) => {
  return (
    <div className="px-3 py-3 backdrop-blur-[24px] bg-[#FFFFFF1F] w-full h-[153px] rounded-[8px]">
      <Image src={iconUrl} alt={altText} width={38} height={38} />
      <h3 className="mt-3 font-semibold text-white text-[14px] xl:text-[18px] leading-[1.5]">
        {title}
      </h3>
      <p className="mt-1 font-normal text-[10px] xl:text-[16px] leading-[1.5] text-white">
        {description}
      </p>
    </div>
  );
};

export default NewsLetterCards;

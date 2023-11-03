import url from "@/helpers/url";
import Image from "next/image";

type Image = {
  src: string;
  alt?: string;
  width: number;
  height: number;
};

type Props = {
  images: Image[];
  className?: string;
  imageClassName?: string;
};

const FlexImageGallery = ({ images, className, imageClassName }: Props) => {
  return (
    <div className={"flex gap-6" + " " + className}>
      {images.map((image, idx) => {
        return (
          <div className="flex-1" key={idx}>
            <Image
              src={url(image.src)}
              width={image.width}
              height={image.height}
              alt={image.alt ?? ""}
              className={
                "w-full h-80 object-cover rounded-xl" + " " + imageClassName
              }
            />
          </div>
        );
      })}
    </div>
  );
};

export default FlexImageGallery;

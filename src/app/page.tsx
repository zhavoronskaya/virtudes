import Image from "next/image";
import FadingText from "@/components/FadingText";
import FlexImageGallery from "@/components/FlexImageGallery";
import url from "@/helpers/url";
import DecorativeTitle from "@/components/DecorativeTitle";
import { Loader } from "@/components/Loader";
import DecorativeLines from "@/components/DecorativeLines";
import AnimatedImage from "@/components/AnimatedImage";

export default function Home() {
  return (
    <div className="relative z-0">
      <Loader />
      <DecorativeLines />

      <div
        className="h-screen flex flex-col p-4 pt-16 mb-64"
        style={{ height: "100dvh" }}
      >
        <div className="w-full flex-1 flex flex-col justify-center ">
          <DecorativeTitle />
          <div className="lg:text-[36px]/[36px] sm:text-[28px]/[28px] text-[16px]/[16px] text-center leading-tight ">
            Peaceful lovely park in the heart of Porto, Portugal
          </div>
        </div>
      </div>

      <div className="max-w-[1328px] mx-auto px-[24px]">
        <div className="h-screen" />

        {/* Magic garden */}
        <div
          id="home"
          className="grid grid-cols-6 sm:grid-cols-12 sm:gap-6 gap-3  auto-rows-[32px] sm:auto-rows-[64px] "
        >
          <div className="lg:col-start-2 lg:col-span-10 lg:row-start-1 lg:row-end-5 sm:col-start-2 sm:col-span-10 sm:row-start-1 sm:row-end-4 col-start-2 col-span-5 row-start-1 row-end-4 relative z-20">
            <h2 className="lg:text-[192px]/[164px] sm:text-[120px]/[96px] text-[60px]/[48px] font-extrabold  uppercase ">
              Magic <br />
              Garden
            </h2>
            <span className="lg:text-[32px]/[28px] sm:text-[24px]/[20px] text-[16px]/[12px]  opacity-50 absolute bottom-[100%] sm:left-[-10.5%] left-[-21%] hover:opacity-100 ">
              Brings beauty to your life
            </span>
          </div>
          <div className="sm:col-start-1 sm:col-span-5 lg:row-start-4 lg:row-end-[10] sm:row-start-2 sm:row-end-[6] col-start-1 col-span-4 row-start-2 row-end-[6] z-10">
            <AnimatedImage
              src={"/image/pinktree1.jpg"}
              width={833}
              height={1480}
            />
            {/* <Image
              src={url("/image/pinktree1.jpg")}
              width={833}
              height={1480}
              alt={""}
              className="w-full h-full object-cover rounded-lg  outline-[12px] outline-[#201F36] outline"
            /> */}
          </div>
          <div className="sm:col-start-4 sm:col-span-5 lg:row-start-6 lg:row-end-[12] sm:row-start-4 sm:row-end-[8] col-start-4 col-span-3 row-start-3 row-end-[7]">
            <AnimatedImage
              src={"/image/camelia1.jpg"}
              width={890}
              height={1581}
              positionPercentageDivider={1}
            />
          </div>
          <div className="lg:col-start-7 lg:col-span-5 lg:row-start-[11] lg:row-end-[13] sm:col-start-7 sm:col-span-5 sm:row-start-[7] sm:row-end-[9] col-start-1 col-span-5 row-start-[8] row-end-[10] z-10 ">
            <p className="lg:text-[36px]/[36px] sm:text-[28px]/[28px] text-[20px]/[20px]">
              Designed by the visionary horticulturist
              <span className=" font-bold">
                {" "}
                José Marques Loureiro (1830-1898)
              </span>
              .
            </p>
          </div>
          <div className="lg:col-start-8 lg:col-span-4 lg:row-start-[13] lg:row-end-[16] sm:col-start-6 sm:col-span-7 sm:row-start-[9] sm:row-end-[11] col-start-2 col-span-5 row-start-[11] row-end-[12]">
            <p className="lg:text-[36px]/[36px] sm:text-[28px]/[28px] text-[20px]/[20px]">
              As landscape gardener, he left a timeless tribute to nature
              through the roses, camellias, and palms he cultivated.
            </p>
          </div>
        </div>

        <div className="h-screen" />

        {/* Greenery */}
        <div
          className="grid grid-cols-6 sm:grid-cols-12 sm:gap-6 gap-3  auto-rows-[32px] sm:auto-rows-[64px] mt-48"
          id="greenery"
        >
          <div className="sm:col-start-8 sm:col-span-4 lg:row-start-1 lg:row-end-[8] sm:row-start-1 sm:row-end-[6] col-start-4 col-span-3 row-start-1 row-end-[5] ">
            <AnimatedImage src={"/image/tree.jpeg"} width={720} height={1280} />
          </div>
          <div className="lg:col-start-2 lg:col-span-10 lg:row-start-3 lg:row-end-[7] sm:col-start-2 sm:col-span-10 sm:row-start-2 sm:row-end-4 col-start-1 col-span-4 row-start-2 row-end-4 z-20 relative">
            <span className="lg:text-[32px]/[28px] sm:text-[24px]/[20px] text-[16px]/[12px]  opacity-50 absolute bottom-[100%] sm:left-[-10.5%] hover:opacity-100">
              Lush Greenery
            </span>
            <h2 className="lg:text-[192px]/[164px] sm:text-[120px]/[96px] text-[60px]/[48px] font-extrabold  uppercase">
              Natural <br /> Beauty
            </h2>
          </div>
          <div className="sm:col-start-3 sm:col-span-7 lg:row-start-5 lg:row-end-[12] sm:row-start-3 sm:row-end-[9] col-start-1 col-span-4 row-start-3 row-end-[7] z-10">
            <AnimatedImage
              src={"/image/flower1.jpeg"}
              width={720}
              height={1280}
            />
          </div>
          <div className="lg:col-start-5 lg:col-span-8 lg:row-start-[9] sm:col-start-6 sm:col-span-7 sm:row-start-[6] sm:row-end-[8] col-start-3 col-span-4 row-start-[5] row-end-[7]  z-20">
            <span className="lg:text-[56px]/[56px] sm:text-[36px]/[36px] text-[28px]/[24px] ">
              Flourishing flora instills serenity
            </span>
          </div>
          <div className="lg:col-start-8 lg:col-span-5 lg:row-start-[11] lg:row-end-[14] sm:col-start-7 sm:col-span-6 sm:row-start-[8] sm:row-end-[12] col-start-3 col-span-4 row-start-[8] row-end-[11] z-20 ">
            <p className="lg:text-[36px]/[36px] sm:text-[28px]/[28px] text-[20px]/[20px]">
              The abundant trees, flowers, and shrubs that flourish within the
              confines of Parque das Virtudes collectively form a lush and
              vibrant tapestry of nature&#39;s splendor.
            </p>
          </div>
          <div className="lg:col-start-4 lg:col-span-5 lg:row-start-[15] lg:row-end-[19] sm:col-start-2 sm:col-span-7 sm:row-start-[11] sm:row-end-[14] col-start-1 col-span-4 row-start-[13] row-end-[15] z-10 ">
            <p className="lg:text-[36px]/[36px] sm:text-[28px]/[28px] text-[20px]/[20px]">
              This verdant treasure trove of botanical diversity not only
              enhances the park&#39;s visual appeal but also creates a deeply
              immersive and harmonious atmosphere for all who venture within.
            </p>
          </div>
        </div>

        <div className="h-screen" />

        {/* Flora */}
        <div
          className="grid grid-cols-6 sm:grid-cols-12 sm:gap-6 gap-3  auto-rows-[32px] sm:auto-rows-[64px] mt-48 "
          id="flora"
        >
          <div className="sm:col-start-1 sm:col-span-5 lg:row-start-1 lg:row-end-6 sm:row-start-1 sm:row-end-5 col-start-1 col-span-3 row-start-1 row-end-5">
            <AnimatedImage
              src={"/image/camelia.jpg"}
              width={1125}
              height={2000}
            />
          </div>
          <div className="lg:col-start-7 lg:col-span-6 lg:row-start-4 lg:row-end-6 sm:col-start-7 sm:col-span-6 sm:row-start-4 sm:row-end-6 col-start-3 col-span-4 row-start-2 row-end-4 z-30 relative">
            <span className="lg:text-[32px]/[28px] sm:text-[24px]/[20px] text-[16px]/[12px]  opacity-50 absolute bottom-[100%] hover:opacity-100">
              1 ha area
            </span>
            <h2 className="lg:text-[192px]/[164px] sm:text-[120px]/[96px] text-[60px]/[48px] font-extrabold  uppercase">
              Flora
            </h2>
          </div>

          <div className="lg:col-start-3 lg:col-span-4 lg:row-start-5 lg:row-end-[9] sm:col-start-3 sm:col-span-4 sm:row-start-4 sm:row-end-[8] col-start-3 col-span-4 row-start-3 row-end-[7] z-10">
            <AnimatedImage
              src={"/image/ginkgolush.jpg"}
              width={1125}
              height={2000}
            />
          </div>
          <div className="lg:col-start-8 lg:col-span-7 lg:row-start-[8] lg:row-end-[9]  sm:col-start-8 sm:col-span-5 sm:row-start-[7] col-start-3 col-span-4 row-start-[9] z-20 relative">
            <span className="lg:text-[32px]/[28px] sm:text-[24px]/[20px] text-[16px]/[12px]  opacity-50 absolute top-[100%] hover:opacity-100">
              in process of classification
            </span>
            <span className="lg:text-[56px]/[56px] sm:text-[36px]/[36px] text-[24px]/[24px] relative">
              Chorisia speciosa
            </span>
          </div>
          <div className="lg:col-start-5 lg:col-span-7 lg:row-start-[10] lg:row-end-[11] sm:col-start-4 sm:col-span-4 sm:row-start-[9] col-start-1 col-span-5 row-start-[8] row-end-[9] z-20 relative">
            <span className="lg:text-[32px]/[28px] sm:text-[24px]/[20px] text-[16px]/[12px]  opacity-50 absolute top-[100%] hover:opacity-100">
              classified
            </span>
            <span className="lg:text-[56px]/[56px] sm:text-[36px]/[36px] text-[24px]/[24px]">
              Ginkgo biloba
            </span>
          </div>
          <div className="lg:col-start-7 lg:col-span-5 lg:row-start-[12] lg:row-end-[14] sm:col-start-7 sm:col-span-5 sm:row-start-[11] sm:row-end-[14] col-start-1 col-span-4 row-start-[12] row-end-[14] z-20 ">
            <p className="lg:text-[36px]/[36px] sm:text-[28px]/[28px] text-[20px]/[20px]">
              This location is home to Portugal&#39;s largest Ginkgo Biloba
              tree, dating back to the 18th century and originally hailing from
              China.
            </p>
          </div>
          <div className="lg:col-start-2 lg:col-span-6 lg:row-start-[15] lg:row-end-[18] sm:col-start-2 sm:col-span-5 sm:row-start-[14] sm:row-end-[18] col-start-4 col-span-3 row-start-[16] row-end-[19] z-10 ">
            <p className="lg:text-[36px]/[36px] sm:text-[28px]/[28px] text-[20px]/[20px]">
              This majestic tree stands at an impressive height of approximately
              35 meters and was officially recognized as a tree of public
              interest by the General Directorate of Forestry in January 2005.
            </p>
          </div>
        </div>

        <div className="h-screen" />

        {/* Overview */}
        <div
          className="grid grid-cols-6 sm:grid-cols-12 sm:gap-6 gap-3  auto-rows-[32px] sm:auto-rows-[64px] mt-48"
          id="overview"
        >
          <div className="lg:col-start-3 lg:col-span-10 lg:row-start-1 lg:row-end-4 sm:col-start-3 sm:col-span-10 sm:row-start-1 sm:row-end-4 col-start-2 col-span-5 row-start-1 row-end-4 z-20 relative">
            <span className="lg:text-[32px]/[28px] sm:text-[24px]/[20px] text-[16px]/[12px]  opacity-50 absolute bottom-[100%] sm:left-[-10.5%] left-[-21%] hover:opacity-100">
              Unparalleled overlooks
            </span>
            <h2 className="lg:text-[192px]/[164px] sm:text-[120px]/[96px] text-[60px]/[48px] font-extrabold  uppercase">
              UNIQUE <br />
              OVERVIEW
            </h2>
          </div>
          <div className="sm:col-start-2 sm:col-span-7 lg:row-start-2 lg:row-end-[9] sm:row-start-2 sm:row-end-[8] col-start-1 col-span-5 row-start-2 row-end-[7]">
            <AnimatedImage
              src={"/image/river1.jpg"}
              width={1125}
              height={2000}
              positionPercentageDivider={1}
            />
          </div>
          <div className="lg:col-start-4 lg:col-span-9 lg:row-start-5 lg:row-end-[7] sm:col-start-4 sm:col-span-9 sm:row-start-4 sm:row-end-[6] col-start-3 col-span-4 row-start-4 row-end-[6] z-30">
            <span className="lg:text-[56px]/[56px] sm:text-[36px]/[36px] text-[28px]/[24px]">
              Impressive panoramic views fill with inspiration
            </span>
          </div>
          <div className="lg:col-start-8 lg:col-span-4 lg:row-start-[7] lg:row-end-[15] sm:col-start-7 sm:col-span-5 sm:row-start-[7] sm:row-end-[12] col-start-4 col-span-3 row-start-[6] row-end-[11] z-20">
            <AnimatedImage
              src={"/image/custom.jpg"}
              width={1125}
              height={2000}
            />
          </div>
          <div className="lg:col-start-9 lg:col-span-4 lg:row-start-[13] lg:row-end-[23] sm:col-start-9 sm:col-span-4 sm:row-start-[11] sm:row-end-[17] col-start-2 col-span-4 row-start-[10] row-end-[16]">
            <AnimatedImage src={"/image/view.jpg"} width={994} height={1766} />
          </div>
          <div className="lg:col-start-2 lg:col-span-5 lg:row-start-[11] lg:row-end-[12] sm:col-start-1 sm:col-span-5 sm:row-start-[10] sm:row-end-[11] col-start-1 col-span-4 row-start-[18] row-end-[19] relative">
            <span className="lg:text-[32px]/[28px] sm:text-[24px]/[20px] text-[16px]/[12px]  opacity-50 absolute bottom-[100%] hover:opacity-100">
              Iconic
            </span>
            <span className="lg:text-[56px]/[56px] sm:text-[36px]/[36px] text-[28px]/[24px]">
              Customs House
            </span>
          </div>
          <div className="lg:col-start-3 lg:col-span-4 lg:row-start-[12] lg:row-end-[15] sm:col-start-2 sm:col-span-4 sm:row-start-[11] sm:row-end-[16] col-start-2 col-span-5 row-start-[19] row-end-[23] ">
            <p className="lg:text-[36px]/[36px] sm:text-[28px]/[28px] text-[20px]/[20px]">
              One of Porto&#39;s iconic landmarks, the Customs House, is often
              visible from the park. This historic building, with its
              distinctive architecture, adds to the scenic charm of the park.
            </p>
          </div>

          <div className="lg:col-start-3 lg:col-span-5 lg:row-start-[17] lg:row-end-[18] sm:col-start-2 sm:col-span-4 sm:row-start-[16] sm:row-end-[17] col-start-1 col-span-4 row-start-[25] row-end-[25]  relative">
            <span className="lg:text-[32px]/[28px] sm:text-[24px]/[20px] text-[16px]/[12px]  opacity-50 absolute bottom-[100%] hover:opacity-100">
              Majestic
            </span>
            <span className="lg:text-[56px]/[56px] sm:text-[36px]/[36px] text-[28px]/[24px]">
              Douro River
            </span>
          </div>

          <div className="lg:col-start-4 lg:col-span-4 lg:row-start-[18] lg:row-end-[23] sm:col-start-3 sm:col-span-5 sm:row-start-[17] sm:row-end-[22] col-start-2 col-span-5 row-start-[26] row-end-[30] ">
            <p className="lg:text-[36px]/[36px] sm:text-[28px]/[28px] text-[20px]/[20px]">
              While not directly overlooking the river, the park&#39;s elevated
              position provides glimpses of the Douro River, especially as it
              winds its way through the city. The views of the river can be
              particularly enchanting during sunrise and sunset.
            </p>
          </div>
          <div className="lg:col-start-4 lg:col-span-7 lg:row-start-[25] lg:row-end-[26] sm:col-start-4 sm:col-span-7 sm:row-start-[22] sm:row-end-[23] col-start-1 col-span-6 row-start-[33] row-end-[34] relative">
            <span className="lg:text-[32px]/[28px] sm:text-[24px]/[20px] text-[16px]/[12px]  opacity-50 absolute bottom-[100%] hover:opacity-100">
              Charming
            </span>
            <span className="lg:text-[56px]/[56px] sm:text-[36px]/[36px] text-[28px]/[24px]">
              {" "}
              Vila Nova de Gaia
            </span>
          </div>
          <div className="lg:col-start-5 lg:col-span-5 lg:row-start-[26] lg:row-end-[29] sm:col-start-5 sm:col-span-7 sm:row-start-[23] sm:row-end-[26] col-start-2 col-span-5 row-start-[34] row-end-[38]">
            <p className="lg:text-[36px]/[36px] sm:text-[28px]/[28px] text-[20px]/[20px]">
              Across the Douro River, you can see the charming district of Vila
              Nova de Gaia. This area is known for its wine cellars and colorful
              buildings lining the riverfront.
            </p>
          </div>
        </div>

        <div className="h-screen" />

        {/* Oasis */}
        <div className="grid grid-cols-6 sm:grid-cols-12 sm:gap-6 gap-3  auto-rows-[32px] sm:auto-rows-[64px] mt-48 ">
          <div className="sm:col-start-4 sm:col-span-5 lg:row-start-1 lg:row-end-[9] sm:row-start-1 sm:row-end-[7] col-start-2 col-span-4 row-start-1 row-end-[8]">
            <AnimatedImage src={"/image/pool.jpeg"} width={720} height={1280} />
          </div>
          <div className="lg:col-start-1 lg:col-span-6 lg:row-start-3 lg:row-end-[7] sm:col-start-1 sm:col-span-6 sm:row-start-3 sm:row-end-[7] col-start-1 col-span-5 row-start-2 row-end-[5] relative">
            <span className="lg:text-[32px]/[28px] sm:text-[24px]/[20px] text-[16px]/[12px]  opacity-50 absolute bottom-[100%] hover:opacity-100">
              Gentle Serenity
            </span>
            <h2 className="lg:text-[192px]/[164px] sm:text-[120px]/[96px] text-[60px]/[48px] font-extrabold  uppercase">
              Hidden <br />
              Oasis
            </h2>
          </div>
          <div className="sm:col-start-7 sm:col-span-5 lg:row-start-6 lg:row-end-[11] sm:row-start-5 sm:row-end-[9] col-start-4 col-span-4 row-start-5 row-end-[9] z-10">
            <AnimatedImage
              src={"/image/water.jpg"}
              width={1125}
              height={2000}
            />
          </div>
          <div className="lg:row-start-[12] lg:row-end-[14] sm:col-start-2 sm:col-span-11 sm:row-start-[10] sm:row-end-[12] col-start-3 col-span-4 row-start-[10] row-end-[12] z-20">
            <span className="lg:text-[56px]/[56px] sm:text-[36px]/[36px] text-[28px]/[24px]">
              Escape from the city&#39;s hustle and bustle
            </span>
          </div>
          <div className="lg:col-start-3 lg:col-span-6 lg:row-start-[14] lg:row-end-[17] sm:col-start-3 sm:col-span-7 sm:row-start-[12] sm:row-end-[15] col-start-1 col-span-4 row-start-[14] row-end-[20] ">
            <p className="lg:text-[36px]/[36px] sm:text-[28px]/[28px] text-[20px]/[20px]">
              Nestled within the historic heart of Porto, along Rua de Azevedo
              de Albuquerque, the Parque das Virtudes, formerly known as the
              Companhia Hortícola Portuense, found its new stewardship in 1965
              when it was acquired by the Porto City Council.
            </p>
          </div>
          <div className="lg:col-start-7 lg:col-span-5 lg:row-start-[18] lg:row-end-[20] sm:col-start-6 sm:col-span-6 sm:row-start-[16] sm:row-end-[18] col-start-3 col-span-4 row-start-[21] row-end-[24] z-10 ">
            <p className="lg:text-[36px]/[36px] sm:text-[28px]/[28px] text-[20px]/[20px]">
              Substantial restoration efforts were undertaken in 1998 to
              preserve and enhance this cherished space.
            </p>
          </div>
        </div>

        <div className="h-screen" />

        {/* Sculpture */}
        <div
          className="grid grid-cols-6 sm:grid-cols-12 sm:gap-6 gap-3 auto-rows-[32px] sm:auto-rows-[64px] mt-48 "
          id="art"
        >
          <div className="lg:col-start-10 lg:col-span-3 lg:row-start-1 lg:row-end-[8] sm:col-start-9 sm:col-span-4 sm:row-start-1 sm:row-end-[6] col-start-4 col-span-3 row-start-1 row-end-[7]">
            <AnimatedImage
              src={"/image/mask.jpg"}
              width={750}
              height={1333}
              positionPercentageDivider={1}
            />
          </div>
          <div className="lg:col-start-1 lg:col-span-12 lg:row-start-2 lg:row-end-5 sm:col-start-1 sm:col-span-12 sm:row-start-2 sm:row-end-[4] col-start-1 col-span-6 row-start-2 row-end-[4] z-20 relative">
            {/* <span className="lg:text-[32px]/[28px] sm:text-[24px]/[20px] text-[16px]/[12px]  opacity-50 absolute top-[55%] hover:opacity-100">
              and
            </span> */}
            <h2 className="lg:text-[192px]/[164px] sm:text-[112px]/[96px] text-[52px]/[48px] font-extrabold whitespace-nowrap overflow-hidden block text-ellipsis uppercase">
              SCULPTURE <br />
              ARCHITECTURE
            </h2>
          </div>
          {/* <div className="lg:col-start-1 lg:col-span-12 lg:row-start-4 lg:row-end-6 sm:col-start-1 sm:col-span-12 sm:row-start-3 sm:row-end-[4] col-start-1 col-span-6 row-start-3 row-end-[4]  z-10">
            <h2 className="xl:text-[192px]/[164px] lg:text-[158px]/[152px]  sm:text-[112px]/[96px] text-[52px]/[48px] font-extrabold  uppercase">
              ARCHITECTURE
            </h2>
          </div> */}
          <div className="lg:col-start-1 lg:col-span-9 lg:row-start-[8] sm:col-start-1 sm:col-span-9 sm:row-start-[7] sm:row-end-[8] col-start-1 col-span-5 row-start-[13] row-end-[14] relative">
            <span className="lg:text-[32px]/[28px] sm:text-[24px]/[20px] text-[16px]/[12px]  opacity-50 absolute bottom-[100%] hover:opacity-100">
              2013
            </span>
            <span className="lg:text-[56px]/[56px] sm:text-[36px]/[36px] text-[20px]/[20px] ">
              A meio entre isto e aquilo
            </span>
          </div>
          <div className="lg:col-start-8 lg:col-span-5 lg:row-start-[9] sm:col-start-7 sm:col-span-6 sm:row-start-[8] sm:row-end-[9] col-start-1 col-span-4 row-start-[11] row-end-[12] relative">
            <span className="lg:text-[32px]/[28px] sm:text-[24px]/[20px] text-[16px]/[12px]  opacity-50 absolute bottom-[100%] hover:opacity-100">
              1972
            </span>
            <span className="lg:text-[56px]/[56px] sm:text-[36px]/[36px] text-[20px]/[20px]">
              Isaque Pinheiro
            </span>
          </div>
          <div className="lg:col-start-3 lg:col-span-4 lg:row-start-[10] sm:col-start-3 sm:col-span-4 sm:row-start-[9] sm:row-end-[10] col-start-5 col-span-2 row-start-[12] row-end-[13] relative">
            <span className="lg:text-[32px]/[28px] sm:text-[24px]/[20px] text-[16px]/[12px]  opacity-50 absolute bottom-[100%] hover:opacity-100">
              2013
            </span>
            <span className="lg:text-[56px]/[56px] sm:text-[36px]/[36px] text-[20px]/[20px]">
              Roda
            </span>
          </div>
          <div className="lg:col-start-5 lg:col-span-7 lg:row-start-[11] sm:col-start-5 sm:col-span-7 sm:row-start-[10] sm:row-end-[11] col-start-4 col-span-3 row-start-[10] row-end-[11] relative">
            <span className="lg:text-[32px]/[28px] sm:text-[24px]/[20px] text-[16px]/[12px]  opacity-50 absolute bottom-[100%] hover:opacity-100">
              2013
            </span>
            <span className="lg:text-[56px]/[56px] sm:text-[36px]/[36px] text-[20px]/[20px] whitespace-nowrap overflow-hidden block text-ellipsis">
              Árvore das Virtudes
            </span>
          </div>
          <div className="lg:col-start-10 lg:col-span-3 lg:row-start-[12] sm:col-start-9 sm:col-span-4 sm:row-start-[11] sm:row-end-[12] col-start-5 col-span-2 row-start-[14] row-end-[15] relative">
            <span className="lg:text-[32px]/[28px] sm:text-[24px]/[20px] text-[16px]/[12px]  opacity-50 absolute bottom-[100%] hover:opacity-100">
              1957
            </span>
            <span className="lg:text-[56px]/[56px] sm:text-[36px]/[36px] text-[20px]/[20px] whitespace-nowrap overflow-hidden block text-ellipsis">
              Vítor Ribeiro
            </span>
          </div>
          <div className="lg:col-start-2 lg:col-span-5 lg:row-start-[13] sm:col-start-2 sm:col-span-5 sm:row-start-[12] sm:row-end-[13] col-start-2 col-span-3 row-start-[15] row-end-[16] relative">
            <span className="lg:text-[32px]/[28px] sm:text-[24px]/[20px] text-[16px]/[12px]  opacity-50 absolute bottom-[100%]  hover:opacity-100">
              1619
            </span>
            <span className=" lg:text-[20px]/[20px] sm:text-[16px]/[16px] text-[12px]/[12px] opacity-50 absolute top-[100%] hover:opacity-100">
              Baroque fountain, initially designated as Fonte do Rio Frio.
              National Monument by Royal order of D. Manuel II of 23-06-1910
            </span>
            <span className="lg:text-[56px]/[56px] sm:text-[36px]/[36px] text-[20px]/[20px] whitespace-nowrap">
              Chafariz das Virtudes
            </span>
          </div>
          <div className="lg:col-start-9 lg:col-span-4 lg:row-start-[14] lg:row-end-[15] sm:col-start-8 sm:col-span-5 sm:row-start-[13] sm:row-end-[14] col-start-2 col-span-4 row-start-[9] row-end-[10] relative">
            <span className="lg:text-[32px]/[28px] sm:text-[24px]/[20px] text-[16px]/[12px] opacity-50 absolute bottom-[100%] hover:opacity-100">
              1959
            </span>
            <span className="lg:text-[56px]/[56px] sm:text-[36px]/[36px] text-[20px]/[20px]">
              Paulo Neves
            </span>
          </div>
        </div>

        <div className="h-screen" />

        {/* Explore */}
        <div className="grid grid-cols-6 sm:grid-cols-12 sm:gap-6 gap-3  auto-rows-[32px] sm:auto-rows-[64px] mt-48 ">
          <div className="lg:col-start-1 lg:col-span-7 lg:row-start-1 lg:row-end-[3] sm:col-start-1 sm:col-span-8 sm:row-start-[1] sm:row-end-[3] col-start-1 col-span-6 row-start-[1] row-end-[2] relative">
            <span className="lg:text-[32px]/[28px] sm:text-[24px]/[20px] text-[16px]/[12px]  opacity-50 absolute bottom-[100%] hover:opacity-100">
              The Sky&#39;s Final Brushstroke
            </span>
            <h2 className="lg:text-[192px]/[164px] sm:text-[120px]/[96px] text-[60px]/[48px] font-extrabold  uppercase">
              Explore
            </h2>
          </div>
          <div className="lg:col-start-2 lg:col-span-11 lg:row-start-[3] sm:col-start-2 sm:col-span-11 sm:row-start-[3] col-start-1 col-span-6 row-start-[3]">
            <span className="lg:text-[56px]/[56px] sm:text-[36px]/[36px] text-[28px]/[24px]">
              the nearby historic neighborhoods
            </span>
          </div>
          <div className="lg:col-start-8 lg:col-span-4 lg:row-start-[5] lg:row-end-[8] sm:col-start-8 sm:col-span-5 sm:row-start-[5] sm:row-end-[8] col-start-3 col-span-4 row-start-[6] row-end-[9] ">
            <p className="lg:text-[36px]/[36px] sm:text-[28px]/[28px] text-[20px]/[20px]">
              Beyond the river and cityscape, you can also glimpse some of
              Porto&#39;s historic neighborhoods and districts.
            </p>
          </div>
        </div>

        <div className="h-screen" />

        {/* Working hours */}
        <div
          className="grid grid-cols-6 sm:grid-cols-12 sm:gap-6 gap-3  auto-rows-[32px] sm:auto-rows-[64px] mt-48 "
          id="contact"
        >
          <div className="lg:col-start-1 lg:col-span-11 lg:row-start-1 lg:row-end-[4] sm:col-start-1 sm:col-span-11 sm:row-start-1 sm:row-end-[3] col-start-1 col-span-6 row-start-1 row-end-[4] relative">
            <span className="lg:text-[32px]/[28px] sm:text-[24px]/[20px] text-[16px]/[12px]  opacity-50 absolute bottom-[100%] hover:opacity-100">
              Open to visitors
            </span>
            <h2 className="lg:text-[192px]/[164px] sm:text-[120px]/[96px] text-[60px]/[48px] font-extrabold  uppercase">
              Working <br /> hours
            </h2>
          </div>

          <div className="lg:col-start-6 lg:col-span-3 lg:row-start-[6] sm:col-start-5 sm:col-span-4 sm:row-start-[5]  col-start-1 col-span-3 row-start-[5]  relative ">
            <span className="lg:text-[32px]/[28px] sm:text-[24px]/[20px] text-[16px]/[12px]  opacity-50 absolute top-[100%] hover:opacity-100">
              April - September
            </span>
            <span className="lg:text-[56px]/[56px] sm:text-[36px]/[36px] text-[24px]/[24px]">
              Summer
            </span>
          </div>
          <div className="lg:col-start-9 lg:col-span-4 lg:row-start-[6] sm:col-start-9 sm:col-span-4 sm:row-start-[5]  col-start-4 col-span-3 row-start-[5] ">
            <span className="lg:text-[56px]/[56px] sm:text-[36px]/[36px] text-[24px]/[24px]">
              09:00 - 19:00
            </span>
          </div>
          <div className="lg:col-start-6 lg:col-span-3 lg:row-start-[8] sm:col-start-5 sm:col-span-4 sm:row-start-[7]  col-start-1 col-span-3 row-start-[7] relative ">
            <span className="lg:text-[32px]/[28px] sm:text-[24px]/[20px] text-[16px]/[12px]  opacity-50 absolute top-[100%] hover:opacity-100">
              October - March
            </span>
            <span className="lg:text-[56px]/[56px] sm:text-[36px]/[36px] text-[24px]/[24px]">
              Winter
            </span>
          </div>
          <div className="lg:col-start-9 lg:col-span-4 lg:row-start-[8] sm:col-start-9 sm:col-span-4 sm:row-start-[7]  col-start-4 col-span-3 row-start-[7] ">
            <span className="lg:text-[56px]/[56px] sm:text-[36px]/[36px] text-[24px]/[24px]">
              09:00 - 18:00
            </span>
          </div>
        </div>

        <div className="h-screen" />

        {/* Location */}
        <div className="grid grid-cols-6 sm:grid-cols-12 sm:gap-6 gap-3  auto-rows-[32px] sm:auto-rows-[64px] mt-48 mb-36 lg:mb-20">
          <div className="lg:col-start-3 lg:col-span-9 lg:row-start-1 lg:row-end-[3] sm:col-start-4 sm:col-span-9 sm:row-start-1 sm:row-end-[3] col-start-1 col-span-6 row-start-1 row-end-[3] relative z-20">
            <span className="lg:text-[32px]/[28px] sm:text-[24px]/[20px] text-[16px]/[12px]  opacity-50 absolute  bottom-[100%] hover:opacity-100">
              Click the map for view
            </span>
            <h2 className="lg:text-[192px]/[164px] sm:text-[120px]/[96px] text-[60px]/[48px] font-extrabold  uppercase">
              Location
            </h2>
          </div>

          <div className="lg:col-start-5 lg:col-span-8 lg:row-start-[5] lg:row-end-[7] sm:col-start-6 sm:col-span-7 sm:row-start-5 sm:row-end-[7] col-start-1 col-span-6 row-start-[6] row-end-[9]">
            <span className="lg:text-[56px]/[56px] sm:text-[36px]/[36px] text-[24px]/[24px]">
              <span className=" font-bold">Porto, Portugal</span> <br />
              Passeio das Virtudes 53-3
            </span>
          </div>
          <div className="lg:col-start-1 lg:col-span-4 lg:row-start-[2] lg:row-end-[7] sm:col-start-1 sm:col-span-5 sm:row-start-1 sm:row-end-[6] sm:pt-8 col-start-1 col-span-6 row-start-[1] row-end-[6] pt-8">
            <a
              href="https://maps.app.goo.gl/sJpQPms8j2r9GjvS7"
              target="_blank"
              className="inline-block w-full h-full "
            >
              <div className="relative z-10 w-full h-full  ">
                <Image
                  width="2624"
                  height="1334"
                  alt=""
                  className="object-cover relative  w-full h-full rounded-lg outline-[12px] outline-[#201F36] outline bg-[#201F36] opacity-100"
                  src={url("/image/mapa.png")}
                />

                {/* <Image
                  width="1024"
                  height="1024"
                  alt=""
                  className="w-1/4 object-cover z-2 absolute block"
                  style={{ top: "17%", left: "48%" }}
                  src={url("/image/treeTwoPreLoad.png")}
                /> */}
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

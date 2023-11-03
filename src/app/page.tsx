import Image from "next/image";
import FadingText from "@/components/FadingText";
import FlexImageGallery from "@/components/FlexImageGallery";
import url from "@/helpers/url";

export default function Home() {
  return (
    <div className="text-[#cbf0d0] relative z-0">
      <div className="h-screen grid p-4 pt-16 mb-64 place-items-center">
        <div className="p-4">
          <h1 className="pb-0 lg:text-8xl text-6xl font-extrabold  text-center">
            <span className="block ">PARQUE</span>
            <span className="block lg:text-6xl text-4xl "> DAS </span>
            <span className="block">VIRTUDES</span>
          </h1>
          <h2 className="lg:text-5xl text-3xl  text-center leading-tight ">
            Peaceful lovely park in the heart of Porto, Portugal
          </h2>
        </div>
        <div className="mt-8 text-center ">
          <span className="mouse p-4 w-full block lg:text-2xl text-xl text-center opacity-60 animate-bounce infinite leading-tight invisible">
            lets walk together
          </span>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 mb-64 p-4 pb-0 pt-16" id="home">
        <div className=" lg:col-start-1 p-4">
          <span className="lg:text-8xl text-6xl font-extrabold block uppercase">
            Magic <br />
            Garden
          </span>
          <span className=" tracking-widest font-bold block">
            Brings beauty to your life
          </span>
          <div className="mt-4 pr-6">
            <span className="lg:text-5xl text-3xl leading-tight font-bold">
              Designed by the visionary horticulturist
            </span>
          </div>
        </div>
        <div className="p-4 lg:col-start-2 ">
          <FlexImageGallery
            className="mt-6"
            images={[
              { src: "/image/pinktree1.jpg", width: 833, height: 1480 },
              { src: "/image/camelia1.jpg", width: 890, height: 1581 },
              { src: "/image/decortree.jpg", width: 1084, height: 1927 },
            ]}
          />
        </div>
        <div className=" lg:col-start-1 p-4"></div>
        <div className=" lg:col-start-2 p-4 lg:text-5xl text-3xl leading-tight ">
          <span className="block font-bold">José Marques Loureiro</span>
          <FadingText offset={0.067}>
            (1830-1898), the landscape gardener, left a timeless tribute to
            nature through the roses, camellias, and palms he cultivated.
          </FadingText>
        </div>
      </div>

      {/* <Image
            width="266"
            height="318"
            alt=""
            className=" object-cover absolute  z-0 inset-0 m-auto w-64 h-64 opacity-60 rounded-lg block"
            src="/image/marques-loureiro.jpg"
          /> */}

      <div className="grid lg:grid-cols-2 p-4  pt-16" id="greenery">
        <div className=" lg:col-start-1 p-4">
          <span className="lg:text-8xl text-6xl font-extrabold block uppercase">
            NATURAL
          </span>
          <span className="lg:text-8xl text-6xl font-extrabold block uppercase">
            BEAUTY
          </span>
          <span className=" tracking-widest font-bold block">
            Lush Greenery
          </span>

          <div className="mt-4 pr-6 ">
            <span className="lg:text-5xl text-3xl leading-tight font-bold">
              Flourishing flora instills serenity
            </span>
          </div>
        </div>
        <div className="p-4 lg:col-start-2 ">
          <FlexImageGallery
            className="mt-6"
            images={[
              { src: "/image/grass.jpeg", width: 720, height: 1280 },
              { src: "/image/flower1.jpeg", width: 720, height: 1280 },
              { src: "/image/tree.jpeg", width: 720, height: 1280 },
            ]}
          />
        </div>
      </div>

      <div className="grid lg:grid-cols-2 pt-0 p-4 pb-0 mb-64  ">
        <div className=" lg:col-start-2 pt-0 p-4 ">
          <div className="lg:text-5xl text-3xl leading-tight ">
            <FadingText offset={0.152}>
              The abundant trees, flowers, and shrubs that flourish within the
              confines of Parque das Virtudes collectively form a lush and
              vibrant tapestry of nature&#39;s splendor. This verdant treasure
              trove of botanical diversity not only enhances the park&#39;s
              visual appeal but also creates a deeply immersive and harmonious
              atmosphere for all who venture within.
            </FadingText>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 p-4  pt-16 pb-0">
        <div className="p-4 lg:col-start-1 ">
          <p className="lg:text-8xl text-6xl font-extrabold uppercase">FLORA</p>
          <span className="font-bold tracking-widest">1 ha area</span>
          <div className="mt-4">
            <p className="lg:text-5xl text-3xl leading-tight block">
              Ginkgo biloba
            </p>
            <span className="font-bold block tracking-widest">classified</span>
            <p className="lg:text-5xl text-3xl leading-tight block">
              Chorisia speciosa
            </p>
            <span className="font-bold block tracking-widest">in process</span>
          </div>
        </div>
        <div className="p-4 lg:col-start-2 ">
          <FlexImageGallery
            className="mt-6"
            images={[
              { src: "/image/ginkgolush.jpg", width: 1125, height: 2000 },
              { src: "/image/ginkgo1.jpg", width: 911, height: 1619 },
              { src: "/image/camelia.jpg", width: 1125, height: 2000 },
            ]}
          />
        </div>
      </div>

      <div className="grid lg:grid-cols-2 p-4 pb-0 pt-0 mb-64 ">
        <div className=" lg:col-start-2 p-4 ">
          <div className="lg:text-5xl text-3xl leading-tight ">
            <FadingText offset={0.278}>
              This location is home to Portugal&#39;s largest Ginkgo Biloba
              tree, dating back to the 18th century and originally hailing from
              China. This majestic tree stands at an impressive height of
              approximately 35 meters and was officially recognized as a tree of
              public interest by the General Directorate of Forestry in January
              2005.
            </FadingText>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-2   pt-16 p-4 pb-0 " id="overview">
        <div className=" lg:col-start-1 p-4">
          <span className="lg:text-8xl text-6xl font-extrabold block uppercase">
            Unique
          </span>
          <span className="lg:text-8xl text-6xl font-extrabold block uppercase">
            overview
          </span>
          <span className=" tracking-widest text-xl font-bold block">
            Unparalleled overlooks
          </span>

          <div className="mt-4 pr-6 ">
            <span className="lg:text-5xl text-3xl font-bold  leading-tight">
              Impressive panoramic views fill with inspiration
            </span>
          </div>
        </div>
        <div className="p-4 lg:col-start-2 ">
          <FlexImageGallery
            className="mt-6"
            images={[
              { src: "/image/view.jpg", width: 994, height: 1766 },
              { src: "/image/river1.jpg", width: 1125, height: 2000 },
              { src: "/image/custom.jpg", width: 1125, height: 2000 },
            ]}
          />
        </div>
      </div>

      <div className="grid lg:grid-cols-2 mb-64 pb-0 pt-0 p-4 ">
        <div className=" lg:col-start-2 p-4 ">
          <span className="font-bold  tracking-widest block"> Majestic</span>
          <p className="lg:text-5xl text-3xl pb-4 font-bold leading-tight block ">
            Douro River
          </p>
          <div className="lg:text-5xl text-3xl  mb-16 leading-tight block ">
            <FadingText offset={0.411}>
              While not directly overlooking the river, the park&#39;s elevated
              position provides glimpses of the Douro River, especially as it
              winds its way through the city. The views of the river can be
              particularly enchanting during sunrise and sunset.
            </FadingText>
          </div>
          <span className="font-bold tracking-widest block"> Iconic </span>
          <p className="lg:text-5xl text-3xl pb-4  font-bold leading-tight block ">
            Customs House
          </p>
          <div className="lg:text-5xl text-3xl mb-16 leading-tight block ">
            <FadingText offset={0.473}>
              One of Porto&#39;s iconic landmarks, the Customs House, is often
              visible from the park. This historic building, with its
              distinctive architecture, adds to the scenic charm of the park.
            </FadingText>
          </div>
          <span className="font-bold tracking-widest block"> Charming</span>
          <p className="lg:text-5xl text-3xl pb-4 font-bold leading-tight block ">
            Vila Nova de Gaia
          </p>
          <div className="lg:text-5xl text-3xl mb-16 leading-tight block ">
            <FadingText offset={0.52}>
              Across the Douro River, you can see the charming district of Vila
              Nova de Gaia. This area is known for its wine cellars and colorful
              buildings lining the riverfront.
            </FadingText>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-2   pt-16 p-4 pb-0">
        <div className=" lg:col-start-1 p-4  ">
          <span className="lg:text-8xl text-6xl font-extrabold block ">
            HIDDEN
          </span>
          <span className="lg:text-8xl text-6xl font-extrabold block ">
            OASIS
          </span>
          <span className=" text-xl tracking-widest font-bold block">
            Gentle Serenity
          </span>
          <div className="mt-4 pr-6 ">
            <span className="lg:text-5xl text-3xl font-bold  leading-tight">
              Escape from the city&#39;s hustle and bustle
            </span>
          </div>
        </div>
        <div className="p-4 lg:col-start-2 ">
          <FlexImageGallery
            className="mt-6"
            images={[
              { src: "/image/mask.jpg", width: 750, height: 1333 },
              { src: "/image/water.jpg", width: 1125, height: 2000 },
              { src: "/image/pool.jpeg", width: 720, height: 1280 },
            ]}
          />
        </div>
      </div>

      <div className="grid lg:grid-cols-2  p-4 pt-0 pb-0 mb-64">
        <div className=" lg:col-start-2 p-4">
          <div className="lg:text-5xl text-3xl leading-tight">
            <FadingText offset={0.61}>
              Nestled within the historic heart of Porto, along Rua de Azevedo
              de Albuquerque, the Parque das Virtudes, formerly known as the
              Companhia Hortícola Portuense, found its new stewardship in 1965
              when it was acquired by the Porto City Council. Substantial
              restoration efforts were undertaken in 1998 to preserve and
              enhance this cherished space.
            </FadingText>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 p-4  pb-0 pt-16 mb-64" id="art">
        <div className="p-4  lg:col-span-1 ">
          <span className=" lg:text-7xl  text-5xl block  font-extrabold uppercase">
            SCULPTURE
          </span>
          <span className="lg:text-4xl  text-2xl "> and</span>

          <span className=" lg:text-7xl text-5xl block  font-extrabold uppercase ">
            ARCHITECTURE
          </span>
        </div>
        <div className="p-4 lg:col-span-1 ">
          <p className=" lg:text-5xl text-3xl   leading-tight">
            A meio entre isto e aquilo
          </p>
          <span className=" tracking-widest font-bold block pb-2"> (2013)</span>
          <p className="lg:text-5xl text-3xl leading-tight">Isaque Pinheiro</p>

          <span className="tracking-widest font-bold block pb-2"> (1972)</span>
          <p className=" lg:text-5xl text-3xl leading-tight">Roda</p>

          <span className="tracking-widest font-bold block pb-2">(2013)</span>
          <p className="lg:text-5xl text-3xl leading-tight">Paulo Neves</p>

          <span className="tracking-widest font-bold block pb-2"> (1959)</span>
          <p className="lg:text-5xl text-3xl leading-tight">
            Árvore das Virtudes
          </p>

          <span className="tracking-widest font-bold block pb-2"> (2013)</span>
          <p className="lg:text-5xl text-3xl leading-tight">Vítor Ribeiro</p>

          <span className="tracking-widest font-bold block pb-2"> (1957)</span>
          <p className=" lg:text-5xl text-3xl ">Chafariz das Virtudes</p>
          <span className="tracking-widest font-bold block ">
            Baroque fountain, initially designated as Fonte do Rio Frio, 1619.
          </span>
          <span className="tracking-widest font-bold block ">
            National Monument by Royal order of D. Manuel II of 23-06-1910
          </span>
        </div>
      </div>

      <div className="grid lg:grid-cols-2    pt-16 p-4">
        <div className=" lg:col-start-1 p-4 pb-0">
          <span className="lg:text-8xl text-6xl font-extrabold block ">
            DON&#39;T MISS
          </span>
          <span className=" text-xl tracking-widest font-bold block">
            The Sky&#39;s Final Brushstroke
          </span>
          <div className="mt-4 pr-6">
            <span className="lg:text-5xl text-3xl leading-tight font-bold block">
              The sunset views over the Douro River
            </span>

            <span className=" lg:text-4xl text-2xl  block">and</span>
            <span className="lg:text-5xl text-3xl font-bold block">
              explore the nearby historic neighborhoods
            </span>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-2  pb-0 pt-0 p-4 mb-64">
        <div className=" lg:col-start-2 p-4 lg:text-5xl text-3xl leading-tight block">
          <FadingText offset={0.832}>
            Beyond the river and cityscape, you can also glimpse some of
            Porto&#39;s historic neighborhoods and districts. These views
            provide a sense of the city&#39;s rich history and architectural
            diversity.
          </FadingText>
        </div>
      </div>

      <div className="grid lg:grid-cols-4 p-4 pb-0 pt-16 mb-64" id="contact">
        <div className="p-4  lg:col-start-1 lg:col-span-2 row-span-2">
          <span className="lg:text-8xl text-6xl block font-extrabold uppercase">
            WORKING HOURS
          </span>
          <span className="text-xl block tracking-widest font-bold ">
            Open to visitors
          </span>
        </div>
        <div className="p-4  lg:col-start-3 leading-tight">
          <span className=" lg:text-5xl text-3xl font-bold block">Summer</span>
          <span className=" text-xl tracking-widest font-bold block">
            April - September
          </span>
        </div>
        <div className="p-4  lg:col-start-4 leading-tight">
          <span className=" lg:text-5xl text-3xl font-bold block">
            09:00 - 19:00
          </span>
        </div>
        <div className="p-4  lg:col-start-3 leading-tight">
          <span className=" lg:text-5xl text-3xl font-bold block">Winter</span>
          <span className=" text-xl tracking-widest font-bold block">
            October - March
          </span>
        </div>
        <div className="p-4  lg:col-start-4 leading-tight">
          <span className=" lg:text-5xl text-3xl font-bold block">
            09:00 - 18:00
          </span>
        </div>
      </div>
      <div className="grid lg:grid-cols-2  p-4 pb-0 pt-16 ">
        <div className="p-4  lg:col-start-1 relative z-1">
          <a
            href="https://maps.app.goo.gl/sJpQPms8j2r9GjvS7"
            target="_blank"
            className="pb-0 lg:text-8xl text-6xl block font-extrabold uppercase"
          >
            LOCATION
          </a>
          <span className="text-xl tracking-widest block font-bold ">
            Click the map for view
          </span>
          <span className="lg:text-5xl text-3xl  mt-4  block ">
            Porto, Portugal
          </span>
          <span className="lg:text-4xl text-2xl block  ">
            Passeio das Virtudes 53-3
          </span>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 mb-32 xl:mb-20 pt-0 pb-0 p-4">
        <div>
          <a
            href="https://maps.app.goo.gl/sJpQPms8j2r9GjvS7"
            target="_blank"
            className="p-4 pt-0 inline-block"
          >
            <div className="relative z-10 inline-block top-0 left-0">
              <Image
                width="640"
                height="325"
                alt=""
                className="object-cover relative z-1 top-0 left-0 w-96 h-96 rounded-xl opacity-100"
                src={url("/image/map.png")}
              />

              <Image
                width="1024"
                height="1024"
                alt=""
                className="w-1/4 object-cover z-2 absolute block"
                style={{ top: "17%", left: "48%" }}
                src={url("/image/treeTwoPreLoad.png")}
              />
            </div>
          </a>
        </div>
      </div>
      {/* 
      <div className="sm:hidden " style={{ height: "80px" }} /> */}
    </div>
  );
}

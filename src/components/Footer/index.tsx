"use client";
import React from "react";
import useAudio from "@/hooks/useAudio";
import styles from "./Footer.module.css";
import url from "@/helpers/url";
import { useTheme } from "@/context/ThemeContext";

export default function Footer() {
  const [isActive, setIsActive] = React.useState(false);
  const { toggle } = useAudio(url("/music/Virtudes2.mp3"), { startTime: 0 });

  const { toggleTheme, theme } = useTheme();
  const isSunOpen = theme === "dark";

  // let sunClass = styles.sun + " pointer";
  // if (isSunOpen) sunClass += " active";

  const handleSoundClick = () => {
    setIsActive((v) => !v);
    toggle();
  };

  let iconClassName = styles.bird + " pointer";
  if (isActive) iconClassName += " active";

  return (
    <div className="flex justify-end p-6 gap-4">
      {isSunOpen ? (
        <Sun onClick={toggleTheme} />
      ) : (
        <Moon onClick={toggleTheme} />
      )}

      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#FDF7FA"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={iconClassName + " -scale-x-100"}
        onClick={handleSoundClick}
      >
        <path d="M16 7h.01" />
        <path d="M3.4 18H12a8 8 0 0 0 8-8V7a4 4 0 0 0-7.28-2.3L2 20" />
        <path d="m20 7 2 .5-2 .5" />
        <path d="M10 18v3" />
        <path d="M14 17.75V21" />
        <path d="M7 18a6 6 0 0 0 3.84-10.61" />
      </svg>

      {/* 
      <svg
        height="24"
        viewBox="0 0 42 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={iconClassName}
        onClick={handleSoundClick}
      >
        <path
          d="M36.3753 14.0574L36.8208 13.7606L40.357 11.4042L36.3753 14.0574ZM36.3753 14.0574V14.5928V18.0038C36.3705 22.51 34.5784 26.8303 31.392 30.0167C28.2056 33.2031 23.8853 34.9952 19.3791 35H1.3851H1.38448C1.31207 35 1.24112 34.9796 1.17981 34.9411C1.11849 34.9026 1.06932 34.8475 1.03794 34.7822C1.00657 34.717 0.994272 34.6442 1.00247 34.5723C1.01067 34.5003 1.03904 34.4321 1.08429 34.3756L1.08453 34.3753L17.3926 13.9907L17.6117 13.7168V13.366V10.3916V10.3906C17.6096 8.1496 18.4098 5.98181 19.8674 4.27959C21.3251 2.57737 23.3439 1.45316 25.5586 1.1104C27.7733 0.767646 30.0375 1.22899 31.9416 2.41094C33.8456 3.59289 35.2636 5.41737 35.939 7.55422L36.0451 7.88981L36.338 8.08499L40.357 10.7632C40.4097 10.7983 40.4528 10.8459 40.4826 10.9017C40.5125 10.9575 40.5281 11.0198 40.528 11.0831L40.528 11.0844M36.3753 14.0574L40.528 11.0844M40.528 11.0844C40.5281 11.1476 40.5125 11.2099 40.4826 11.2657M40.528 11.0844L40.4826 11.2657M39.4515 11.0843L38.2031 11.9159L35.7778 13.5317L39.4515 11.0843ZM39.4515 11.0843L38.2036 10.2518M39.4515 11.0843L38.2036 10.2518M38.2036 10.2518L35.4905 8.44193L35.4894 8.44117L38.2036 10.2518ZM18.3802 13.853V13.8522V10.3927V10.3916H19.3802L18.3802 13.853ZM18.3802 13.853C18.3803 13.9401 18.3507 14.0246 18.2965 14.0927C18.2964 14.0929 18.2963 14.093 18.2962 14.0931L3.48349 32.6068L2.18354 34.2315M18.3802 13.853L2.18354 34.2315M2.18354 34.2315H4.26432M2.18354 34.2315H4.26432M4.26432 34.2315H19.3802L19.3813 34.2315M4.26432 34.2315L19.3813 34.2315M19.3813 34.2315C23.6831 34.2266 27.8073 32.5156 30.8491 29.4738C33.8909 26.432 35.6019 22.3078 35.6068 18.006V18.0049M19.3813 34.2315L35.6068 18.0049M35.6068 18.0049V13.8522L35.6068 13.8515M35.6068 18.0049L35.6068 13.8515M35.6068 13.8515C35.6068 13.7883 35.6224 13.726 35.6522 13.6702M35.6068 13.8515L35.6522 13.6702M40.4826 11.2657C40.4529 11.3214 40.4099 11.3688 40.3575 11.4039L40.4826 11.2657ZM35.6522 13.6702C35.6819 13.6145 35.7249 13.5671 35.7772 13.532L35.6522 13.6702ZM21.0085 20.476L21.0089 20.4764C21.0869 20.5416 21.1358 20.635 21.1451 20.7361C21.1543 20.8369 21.1234 20.9373 21.0591 21.0154C21.0589 21.0157 21.0586 21.016 21.0584 21.0163L14.1392 29.3193L14.1389 29.3197C14.0736 29.3981 13.9798 29.4474 13.8783 29.4567C13.7767 29.4659 13.6756 29.4345 13.5972 29.3692C13.5188 29.304 13.4695 29.2102 13.4602 29.1086C13.4509 29.007 13.4824 28.9059 13.5476 28.8275L20.4672 20.5241C20.4673 20.5239 20.4675 20.5237 20.4676 20.5235C20.4999 20.4851 20.5395 20.4533 20.584 20.4301C20.6287 20.4067 20.6776 20.3924 20.7279 20.388C20.7781 20.3835 20.8288 20.389 20.8769 20.4041C20.9251 20.4192 20.9698 20.4437 21.0085 20.476ZM29.4541 9.00735C29.4541 9.22023 29.391 9.42834 29.2727 9.60534C29.1544 9.78235 28.9863 9.92031 28.7897 10.0018C28.593 10.0832 28.3766 10.1046 28.1678 10.063C27.959 10.0215 27.7672 9.91898 27.6167 9.76845C27.4661 9.61792 27.3636 9.42613 27.3221 9.21734C27.2805 9.00855 27.3019 8.79213 27.3833 8.59545C27.4648 8.39877 27.6028 8.23066 27.7798 8.11239C27.9568 7.99412 28.1649 7.93099 28.3778 7.93099C28.6632 7.93099 28.937 8.04439 29.1389 8.24625C29.3407 8.44811 29.4541 8.72188 29.4541 9.00735Z"
          stroke="#FDF7FA"
          stroke-width="2"
        />
      </svg> */}
    </div>
  );
}

function Sun(props: { onClick: () => void }) {
  return (
    // <svg
    //   height="24"
    //   viewBox="0 0 38 38"
    //   fill="none"
    //   xmlns="http://www.w3.org/2000/svg"
    //   className=" pointer "
    //   onClick={props.onClick}
    // >
    //   <path
    //     d="M19 5.15385V1M9.20938 9.20938L6.27262 6.27262M5.15385 19H1M19 37V32.8462M31.7274 31.7274L28.7906 28.792M37 19H32.8462M9.20938 28.7906L6.27262 31.7274M31.7274 6.27262L28.792 9.20938M27.3077 19C27.3077 21.2033 26.4324 23.3164 24.8744 24.8744C23.3164 26.4324 21.2033 27.3077 19 27.3077C16.7967 27.3077 14.6836 26.4324 13.1256 24.8744C11.5676 23.3164 10.6923 21.2033 10.6923 19C10.6923 16.7967 11.5676 14.6836 13.1256 13.1256C14.6836 11.5676 16.7967 10.6923 19 10.6923C21.2033 10.6923 23.3164 11.5676 24.8744 13.1256C26.4324 14.6836 27.3077 16.7967 27.3077 19Z"
    //     stroke="#FDF7FA"
    //     strokeWidth="2"
    //     strokeLinecap="round"
    //     strokeLinejoin="round"
    //   />
    // </svg>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#FDF7FA"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className=" pointer "
      onClick={props.onClick}
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2" />
      <path d="M12 20v2" />
      <path d="m4.93 4.93 1.41 1.41" />
      <path d="m17.66 17.66 1.41 1.41" />
      <path d="M2 12h2" />
      <path d="M20 12h2" />
      <path d="m6.34 17.66-1.41 1.41" />
      <path d="m19.07 4.93-1.41 1.41" />
    </svg>
  );
}

function Moon(props: { onClick: () => void }) {
  return (
    // <svg
    //   height="24"
    //   viewBox="0 0 38 38"
    //   fill="none"
    //   xmlns="http://www.w3.org/2000/svg"
    //   className=" pointer"
    //   onClick={props.onClick}
    // >
    //   <path
    //     d="M37 20.6216C36.6847 24.0333 35.4043 27.2846 33.3087 29.9951C31.213 32.7056 28.3887 34.7632 25.1663 35.9272C21.9439 37.0911 18.4566 37.3133 15.1126 36.5676C11.7685 35.822 8.70597 34.1394 6.28329 31.7167C3.86061 29.294 2.17801 26.2315 1.43236 22.8874C0.686717 19.5434 0.90887 16.0561 2.07283 12.8337C3.23678 9.61129 5.2944 6.78701 8.00492 4.69134C10.7154 2.59566 13.9667 1.31528 17.3784 1C15.381 3.70227 14.4198 7.03169 14.6697 10.3827C14.9196 13.7338 16.3639 16.8838 18.7401 19.2599C21.1162 21.6361 24.2662 23.0804 27.6173 23.3303C30.9683 23.5802 34.2977 22.619 37 20.6216Z"
    //     stroke="#FDF7FA"
    //     strokeWidth="2"
    //     strokeLinecap="round"
    //     strokeLinejoin="round"
    //   />
    // </svg>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#FDF7FA"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className=" pointer"
      onClick={props.onClick}
    >
      <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
    </svg>
  );
}

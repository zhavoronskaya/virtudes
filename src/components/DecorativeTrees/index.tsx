"use client";
import Image from "next/image";
import { MathUtils } from "three";
import useScrolling from "@/components/Scrolling/useScrolling";
import styles from "./DecorativeTrees.module.css";
import { treesMap } from "./constants";

const DecortiveTrees = () => {
  const scrolling = useScrolling();
  const offset = scrolling.offset;

  // console.log("treesMap", treesMap);
  const firstLargestIndex = treesMap.findIndex((v) => v.offset >= offset);
  const endPos = treesMap[firstLargestIndex + 1];
  const startPos = treesMap[firstLargestIndex];

  // console.log("startPos", startPos, offset);

  if (!startPos || !endPos) return null;

  const interval =
    (offset - startPos.offset) / (endPos.offset - startPos.offset);

  let scale = MathUtils.lerp(startPos.scale, endPos.scale, interval);
  scale = Math.max(1, scale);
  return (
    <div
      className={styles.decorTrees + " relative w-full h-full"}
      style={{ scale: scale }}
    >
      <Image
        width="1024"
        height="1024"
        alt=""
        className={styles.topleft + " w-8/12 object-cover absolute block"}
        src="/image/treePreLoad.png"
      />
      <Image
        width="1024"
        height="1024"
        alt=""
        className={styles.topright + " w-8/12 object-cover absolute block"}
        src="/image/treePreLoad.png"
      />

      <Image
        width="1024"
        height="1024"
        alt=""
        className={styles.bottomleft + " w-8/12 object-cover absolute block"}
        src="/image/treePreLoad.png"
      />

      <Image
        width="1024"
        height="1024"
        alt=""
        className={styles.bottomright + " w-8/12 object-cover absolute block"}
        src="/image/treePreLoad.png"
      />
      {/* <Image
        width="1024"
        height="1024"
        alt=""
        className={styles.center + " w-1/3 object-cover absolute block"}
        src="/image/flowerOnePreLoad.png"
      /> */}

      {/* <Image
        width="1024"
        height="1024"
        alt=""
        className={styles.left + " w-1/3 object-cover absolute block"}
        src="/image/flowerOnePreLoad.png"
      />

      <Image
        width="1024"
        height="1024"
        alt=""
        className={styles.right + " w-1/3 object-cover absolute block"}
        src="/image/flowerOnePreLoad.png"
      /> */}
    </div>
  );
};

export default DecortiveTrees;

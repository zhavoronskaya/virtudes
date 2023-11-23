"use client";
import Image from "next/image";
import { MathUtils } from "three";
import url from "@/helpers/url";
import useScrolling from "@/components/Scrolling/useScrolling";
import styles from "./DecorativeTrees.module.css";
import { treesMap, TreeId } from "./constants";

const treeClassName = (id: TreeId, offset: number) => {
  let classNames = ["w-8/12 object-cover absolute block"];
  if (offset > 0) classNames.push("active");
  if (id === "tl") classNames.push(styles.topleft);
  if (id === "tr") classNames.push(styles.topright);
  if (id === "bl") classNames.push(styles.bottomleft);
  if (id === "br") classNames.push(styles.bottomright);
  return classNames.join(" ");
};

const DecortiveTrees = () => {
  const scrolling = useScrolling();
  const offset = scrolling.offset;
  const firstLargestIndex = treesMap.findIndex((v) => v.offset >= offset);
  const endPos = treesMap[firstLargestIndex + 1];
  const startPos = treesMap[firstLargestIndex];

  if (!startPos || !endPos) return null;

  const interval =
    (offset - startPos.offset) / (endPos.offset - startPos.offset);

  let scale = MathUtils.lerp(startPos.scale, endPos.scale, interval);
  scale = Math.max(1, scale);

  return (
    <div
      className={styles.decorTrees + " relative w-full h-full"}
      style={{ scale }}
    >
      <Image
        width="1024"
        height="1024"
        alt=""
        priority
        className={treeClassName("tl", offset)}
        src={url("/image/treePreLoad.png")}
      />
      <Image
        width="1024"
        height="1024"
        alt=""
        priority
        className={treeClassName("tr", offset)}
        src={url("/image/treePreLoad.png")}
      />

      <Image
        width="1024"
        height="1024"
        alt=""
        priority
        className={treeClassName("bl", offset)}
        src={url("/image/treePreLoad.png")}
      />

      <Image
        width="1024"
        height="1024"
        alt=""
        priority
        className={treeClassName("br", offset)}
        src={url("/image/treePreLoad.png")}
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

import React from "react";
import styles from "@/styles/About.module.css";
import FadeInSection from "@/components/FadeIn/FadeInSection";

interface BlockInterface {
  title: string;
  info?: string;
  list?: Array<string>;
}

export default function Block({ title, info, list }: BlockInterface) {
  return (
    <FadeInSection>
        <div className={styles.subBlock}>{title}</div>
        <div className={styles.subBlock}>
          {info?.length !== undefined ? (
            <>{info}</>
          ) : (
            <>
              <ul className={styles.serviceList}>
                {list != undefined &&
                  list.map((_value: string) => {
                    return (
                      <>
                        <li>{_value}</li>
                      </>
                    );
                  })}
              </ul>
            </>
          )}
        </div>
    </FadeInSection>
  );
}

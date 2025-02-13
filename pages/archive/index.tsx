import styles from "@/styles/Archive.module.css";
import { GraphQLClient } from "graphql-request";
import { archiveQuery } from "@/queries/projectQueries";
import { ArchiveInterface, archiveObjInterface, aspectRatioEnum } from "@/Interfaces/ArchiveInterface";
import { useEffect, useState } from "react";


export const getStaticProps = async () => {
    const hygraph = new GraphQLClient(process.env.hygraphURL + "");

    const otherWorksData: ArchiveInterface = await hygraph.request(archiveQuery);

    return {
        props: {
            otherworks: otherWorksData
        },
    };
};


function getRandomColor() {
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    return randomColor;
}

export default function Archive(otherworks: archiveObjInterface) {
    /**
     * TODO:
     * Order the object based on the order field
     */

    let arrObj: any = otherworks.otherworks.otherworks;
    let descOrderArrObj = arrObj.sort((a:any, b:any) => b.order - a.order);

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(false);
    }, []);


    const numItems = 100;

    const renderItems = () => {
        const items = [];
        for (let i = 1; i <= numItems; i++) {
            const aspectRatioClass = i % 3 === 0 ? styles['aspect-16-9'] :
                i % 3 === 1 ? styles['aspect-4-3'] :
                    styles['aspect-1-1'];
            items.push(
                // <div key={i} className={`${styles.item} ${aspectRatioClass}`} style={{ backgroundColor: getRandomColor() }}>
                <div key={i} className={`${styles.item} ${aspectRatioClass}`}>
                    {i}
                </div>
            );
        }
        return items;
    };


    if (isLoading) return <p>Loading...</p>;
    return (
        <div className={styles.masonryWithColumns}>
            {descOrderArrObj.map((wrk: any, index: number) => {
                let aspectR = wrk.aspectRatio;
                let aspectStyle = styles['aspect-1-1'];

                if (aspectR == aspectRatioEnum.ar1_1) {
                    aspectStyle = styles['aspect-1-1'];

                } else if (aspectR == aspectRatioEnum.ar16_9) {
                    aspectStyle = styles['aspect-16-9'];

                } else if (aspectR == aspectRatioEnum.ar3_4) {
                    aspectStyle = styles['aspect-3-4'];

                } else if (aspectR == aspectRatioEnum.ar9_16) {
                    aspectStyle = styles['aspect-9-16'];

                } else if (aspectR == aspectRatioEnum.ar4_3) {
                    aspectStyle = styles['aspect-4-3'];

                }

                if (wrk.image != null) {
                    return (
                        <img
                            src={wrk.image.url}
                            className={`${styles.item} ${aspectStyle}`}
                            key={`${wrk.id}`}
                            loading="lazy"
                            id={`other-wrk-img-${index}`}
                        />
                    );
                } else {
                    return (
                        <video
                            src={wrk.video?.url}
                            className={`${styles.item} ${aspectStyle}`}
                            key={`${wrk.id}`}
                            preload="auto"
                            autoPlay={true}
                            muted={true}
                            loop={true}
                            id={`other-wrk-video-${index}`}
                        />
                    );
                }
            })
            }
        </div>
    );
}
import React, { useEffect, useState } from "react";
import styles from "@/styles/About.module.css";
import useScrollDirection from "../hooks/useScrollDirection";
import aboutData from "../aboutData.json";
import Block from "@/components/About/Block/Block";
import mainImg from "../public/About/main1.png";
import { GraphQLClient } from "graphql-request";
// import mainAbstrc from "../public/About/abstract_img_1.png";
import mainAbstrc from "../public/About/RL_Logotype_3D.png";
import Image from "next/image";
import SlidingText from "@/components/SlidingText";
import Link from "next/link";
import { aboutQuery } from "@/queries/projectQueries";
import { AboutsInterface, aboutTagsEnum } from "@/Interfaces/AboutInterface";
import useWindowSize from "@/hooks/useWindowSize";

export const getStaticProps = async () => {
  const hygraph = new GraphQLClient(process.env.hygraphURL+"");
  
  const data: AboutsInterface = await hygraph.request(aboutQuery);
  
  return {
    props: { abouts: data.abouts },
  };
};

export default function About({ abouts } : AboutsInterface) {
console.log('abouts :', abouts);
  const size = useWindowSize();
  // const mainTxt = 
  // const introTxt = 
  // const bio1Txt = 
  // const bio2Txt = 
  // const studioTxt = 
  // const clientsAndAgencieTxt = 
  // const booksTxt = 
  // const [bio2Txt, setBio2Txt] = useState<any>(undefined);
  
  let booksTxtEntries = undefined;
  let clientsAndAgencieTxtEntriesOne = undefined;
  let clientsAndAgencieTxtEntriesTwo = undefined;
  let magazinesTxtEntries = undefined;

    const mainTxt = abouts.filter(
      (x: any) => x.aboutTags == aboutTagsEnum.main
      )[0];
  
      const introTxt = abouts.filter(
      (x: any) => x.aboutTags == aboutTagsEnum.intro
      )[0];
  
      const bio1Txt = abouts.filter(
      (x: any) => x.aboutTags == aboutTagsEnum.bio1
      )[0];
  
      const bio2Txt = abouts.filter(
      (x: any) => x.aboutTags == aboutTagsEnum.bio2
      )[0];
  
      const studioTxt = abouts.filter(
      (x: any) => x.aboutTags == aboutTagsEnum.studio
      )[0];
    
      const clientsAndAgencieTxt = abouts.filter(
      (x: any) => x.aboutTags == aboutTagsEnum.clients_agencies
      )[0];
    
      const booksTxt = abouts.filter(
      (x: any) => x.aboutTags == aboutTagsEnum.books
      )[0];
      
      const magazinesTxt = abouts.filter(
      (x: any) => x.aboutTags == aboutTagsEnum.magazines
      )[0];
  
    if (booksTxt != undefined){
      booksTxtEntries = booksTxt.aboutText.split('\n');
    }
    
    if (clientsAndAgencieTxt != undefined){
      clientsAndAgencieTxtEntriesOne = clientsAndAgencieTxt.aboutText.split('\n');
      clientsAndAgencieTxtEntriesOne = [...clientsAndAgencieTxtEntriesOne].sort((a: any, b:any) => b - a).slice(0, 11);
      
      clientsAndAgencieTxtEntriesTwo = clientsAndAgencieTxt.aboutText.split('\n');
      clientsAndAgencieTxtEntriesTwo = [...clientsAndAgencieTxtEntriesTwo].sort((a: any, b:any) => b - a).slice(11);
    }
    
    if (magazinesTxt != undefined){
      magazinesTxtEntries = magazinesTxt.aboutText.split('\n');
    }

    
  return (
    <>
      <div className={styles.mainDiv}>
        {/* <Block title={aboutData.bio.title} info={aboutData.bio.info} />
        <Block
          title={aboutData.services.title}
          list={aboutData.services.list}
        />
        <Block
          title={aboutData.clients.title}
          info={aboutData.clients.info}
        />
        <Block
          title={aboutData.books.title}
          list={aboutData.books.list}
        />
        <Block
          title={aboutData.magazines.title}
          list={aboutData.magazines.list}
        />
        <Block
          title={aboutData.links.title}
          list={aboutData.links.list}
        />
        <div className={styles.block}>
          <div className={styles.subBlock}>For freelance inquiers -</div>
          <div className={styles.subBlock}>
            <a href="mailto:someone@yoursite.com">info@ricardoleite.net</a>
          </div>
        </div> */}

        <div className={styles.firstBlock}>
          <div className={styles.firstBlockLeft}>
            <div>I am Ricardo Leite</div>
            <div className={styles.mainAbstrcImgMobile}></div>
            <div>
              <p>
                {introTxt.aboutText}
              </p>
            </div>
            <div>
              <p>Let’s work on something together →</p>
              <p>
                <u>info@ricardoleite.net</u>
              </p>
            </div>
          </div>
          <div className={styles.firstBlockRight}>
            {/* <div>
              <p>Amsterdam,</p>
              <p>2023.</p>
            </div> */}
            <div className={styles.mainAbstrcImg}>
              <div className={styles.mainAbstrcOverlapDiv}>
                <Image
                  src={mainAbstrc.src}
                  height="100"
                  width="100"
                  alt="abstract"
                  className={styles.mainAbstrcOverlapImg}
                />
              </div>
            </div>
          </div>
        </div>
        <SlidingText />
        <div className={styles.secondBlock}>
          <div className={styles.secondBlockLeftTitle}>Bio</div>
          <div className={styles.secondBlockLeft}>
            <p>
              {bio1Txt.aboutText}
              <br />
              <br />
              {bio2Txt.aboutText}
            </p>
          </div>
          <div className={styles.secondBlockRightTitle}>Services</div>
          <div className={styles.secondBlockRight}>
            <div>
              <div className={styles.secondBlockRightTitle}>
                As a freelancer
              </div>
              <ul className={styles.secondBlockRightList}>
                <li>Design & Art Direction Creative Direction</li>
              </ul>
            </div>
              <br />
            <div>
              <div className={styles.secondBlockRightTitle}>As a studio</div>
              <ul className={styles.secondBlockRightList}>
                <li>
                  {studioTxt.aboutText}
                </li>
              </ul>
            </div>
            <br />
            <div>
              <div className={styles.secondBlockRightTitle}>
                As a Director / Rep. by
              </div>
              <ul className={styles.secondBlockRightList}>
                <li>Brut.works [ES]</li>
              </ul>
            </div>
          </div>
        </div>
        <div className={styles.thirdBlock}>
          <div className={styles.thirdBlockTitle}>Clients & Agencies</div>
          <div className={styles.thirdBlockText}>
            <ul>
              {/* <li>Adidas</li>
              <li>Brut</li>
              <li>Converse</li>
              <li>Facebook</li>
              <li>Pepsi</li>
              <li>Spotify</li>
              <li>WeArePi</li>
              <li>Brut</li>
              <li>CloudFactory</li>
              <li>Ridley Scott Creative Group</li>
              <li>Nike</li> */}
              {clientsAndAgencieTxtEntriesOne != undefined &&
                  clientsAndAgencieTxtEntriesOne.map((_value: string, index: number) => {
                    return (
                      <>
                        <li key={`books-li-${index}`}>{_value}</li>
                      </>
                    );
                  })}
            </ul>
          </div>
          <div className={styles.thirdBlockTitle}></div>
          <div className={styles.thirdBlockText}>
            <ul>
              {/* <li>KNAS Agency</li>
              <li>YourMajesty</li>
              <li>WeTransfer</li>
              <li>LeGuessWho?</li>
              <li>Mr.Frank</li>
              <li>Pepsi</li>
              <li>Experimenta</li>
              <li>Adobe</li> */}
              {clientsAndAgencieTxtEntriesTwo != undefined &&
                  clientsAndAgencieTxtEntriesTwo.map((_value: string, index: number) => {
                    return (
                      <>
                        <li key={`books2-li-${index}`}>{_value}</li>
                      </>
                    );
                  })}
            </ul>
          </div>
          <div className={styles.thirdBlockTitle}>Magazines</div>
          <div className={styles.thirdBlockText}>
            <ul>
              {/* <li>Kinfolk v38 / Rituals, Winter, 2020</li>
              <li>IdN v22n3: Designer Typefaces, 2015</li>
              <li>IdN v20n4: Paper Special, 2014</li>
              <li>Soirée graphique n°6, 2013</li>
              <li>IdN v19n4: Shapes-in-Pattern, 2013</li>
              <li>Étapes, France, 2013</li>
              <li>Creative Review, June, 2012</li>
              <li>IDN v19/ Shaping their own patterns, 2012</li>
              <li>C.R. , Monograph Barcelona, 2012</li> */}
              {magazinesTxtEntries != undefined &&
                  magazinesTxtEntries.map((_value: string, index: number) => {
                    return (
                      <>
                        <li key={`magazines-li-${index}`}>{_value}</li>
                      </>
                    );
                  })}
            </ul>
          </div>
        </div>
        {/* <div className={styles.thirdBlock}>
          <div className={styles.thirdBlockTitle}>Books</div>
          <div className={styles.thirdBlockText}>
            <ul>
              <li>Less is More by Victionary, 2018</li>
              <li>Type Plus by Unit editions, 2015</li>
              <li>CITIx60 Amsterdam by Victionary, 2015</li>
              <li>Portugal by Design, 2015</li>
              <li>RSVP - Invitation Design for Special Occasions, 2015</li>
              <li>Its Nice That Annual Review, 2013</li>
              <li>Poster Graphics, JP, 2013</li>
              <li>Pretty Ugly, Gestalten, 2012</li>
              <li>BASIC COVER, Index Books, 2013</li>
              <li>Posters, Index Books, 2013</li>
              <li>FRESH - Cutting Edge Illustrations, Slanted 2012</li>
            </ul>
          </div>
          <div className={styles.thirdBlockTitle}>Prizes</div>
          <div className={styles.thirdBlockText}>
            <ul>
              <li>Clio Awards / C.F, 2023</li>
              <li>ADCN / 2x Silver Lamp / C.F., 2022</li>
            </ul>
          </div>
          <div className={styles.thirdBlockTitle}>Contacts</div>
          <div className={styles.thirdBlockText}>
            <ul>
              <li>Exhibition & Lectures</li>
              <li>ricardo@ricardoleite.net</li>
              <br />
              <li>Creative Direction</li>
              <li>Brut Representation/US/UK/ES</li>
              <li>sara@brut.works</li>
              <br />
              <li>Freelancer inquiries availability/</li>
              <li>info@ricardoleite.net</li>
            </ul>
          </div>
        </div> */}
        {size != undefined && size.width != undefined && size.width >= 600 ? (
          <>
        <div className={styles.thirdBlock}>
          <div className={styles.thirdBlockTitle}>Links</div>
          <div className={styles.thirdBlockText}>
            <p className={styles.linksText}>
              <Link href="https://www.linkedin.com/in/ricardo-leite-98820523/">LinkedIn</Link>
              <Link href="https://www.instagram.com/_ricardo_leite_/">Instagram</Link>
              <Link href="https://www.behance.net/ricardoleite">Behance</Link>
              <Link href="https://vimeo.com/rl85">Vimeo</Link>
            </p>
            <br/>
            <br/>
             <p>All rights reserved 2023</p>
          <br/>
            <p>
              Type by <u>ABC Dinamo</u>
            </p>
            <p>
              Site by <Link href="https://www.linkedin.com/in/pedromgleite/">Pedro Leite</Link>
            </p>
          </div>
          <div className={styles.thirdBlockTitle}>Contacts</div>
          <div className={styles.thirdBlockText}>
            {/* <p>All rights reserved 2023</p> */}
            <div className={styles.thirdBlockText}>
            <ul>
              <li>Exhibition & Lectures</li>
              <li>ricardo@ricardoleite.net</li>
              <br />
              <li>Creative Direction</li>
              <li>Brut Representation/US/UK/ES</li>
              <li>sara@brut.works</li>
              <br />
              <li>Freelancer inquiries availability/</li>
              <li>info@ricardoleite.net</li>
            </ul>
          </div>
          </div>
          <div className={styles.thirdBlockTitle}>Books</div>
          <div className={styles.thirdBlockText}>
             <ul>
             {booksTxtEntries != undefined &&
                  booksTxtEntries.map((_value: string, index: number) => {
                    return (
                      <>
                        <li key={`books-li-${index}`}>{_value}</li>
                      </>
                    );
                  })}
            </ul>
          </div>
        </div>
        </>
        )
        :
        (
          <>
          <div className={styles.thirdBlock}>
          <div className={styles.thirdBlockTitle}>Books</div>
          <div className={styles.thirdBlockText}>
             <ul>
             {booksTxtEntries != undefined &&
                  booksTxtEntries.map((_value: string, index: number) => {
                    return (
                      <>
                        <li key={`books-li-${index}`}>{_value}</li>
                      </>
                    );
                  })}
            </ul>
          </div>
          <div className={styles.thirdBlockTitle}>Contacts</div>
          <div className={styles.thirdBlockText}>
            {/* <p>All rights reserved 2023</p> */}
            <div className={styles.thirdBlockText}>
            <ul>
              <li>Exhibition & Lectures</li>
              <li>ricardo@ricardoleite.net</li>
              <br />
              <li>Creative Direction</li>
              <li>Brut Representation/US/UK/ES</li>
              <li>sara@brut.works</li>
              <br />
              <li>Freelancer inquiries availability/</li>
              <li>info@ricardoleite.net</li>
            </ul>
          </div>
          </div>
          <div className={styles.thirdBlockTitle}>Links</div>
          <div className={styles.thirdBlockText}>
            <p className={styles.linksText}>
              <Link href="https://www.linkedin.com/in/ricardo-leite-98820523/">LinkedIn</Link>
              <Link href="https://www.instagram.com/_ricardo_leite_/">Instagram</Link>
              <Link href="https://www.behance.net/ricardoleite">Behance</Link>
              <Link href="https://vimeo.com/rl85">Vimeo</Link>
            </p>
            <br/>
            <br/>
             <p>All rights reserved 2023</p>
          <br/>
            <p>
              Type by <u>ABC Dinamo</u>
            </p>
            <p>
              Site by <Link href="https://www.linkedin.com/in/pedromgleite/">Pedro Leite</Link>
            </p>
          </div>
        </div>
          </>
        )}
        <SlidingText />
      </div>
    </>
  );
}
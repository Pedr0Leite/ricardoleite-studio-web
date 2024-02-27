import React, { useEffect, useState } from "react";
import styles from "@/styles/About.module.css";
import { GraphQLClient } from "graphql-request";
import SlidingText from "@/components/SlidingText/SlidingText";
import Link from "next/link";
import { aboutQuery } from "@/queries/projectQueries";
import { AboutsInterface, aboutTagsEnum } from "@/Interfaces/AboutInterface";
import useWindowSize from "@/hooks/useWindowSize";
import AboutMainImg from "@/components/About/MainImg/AboutMainImg";
import AboutMainImgMobile from "@/components/About/MainImg/AboutMainImgMobile";

export const getStaticProps = async () => {
  const hygraph = new GraphQLClient(process.env.hygraphURL+"");
  
  const data: AboutsInterface = await hygraph.request(aboutQuery);
  
  return {
    props: { abouts: data.abouts },
  };
};

export default function About({ abouts } : AboutsInterface) {
  const size = useWindowSize();
  let booksTxtEntries = undefined;
  let clientsAndAgencieTxtEntriesOne = undefined;
  let clientsAndAgencieTxtEntriesTwo = undefined;
  let magazinesTxtEntries = undefined;

      const main = abouts.filter(
      (x: any) => x.aboutTags == aboutTagsEnum.main
      )[0];
 
      const logo = abouts.filter(
      (x: any) => x.aboutTags == aboutTagsEnum.logo
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
        <div className={styles.firstBlock}>
          <div className={styles.firstBlockLeft}>
            <div>I am Ricardo Leite</div>
              <AboutMainImgMobile url={main.image?.url != undefined ? main.image?.url : ''}/>
            <div>
              <p>
                {introTxt.aboutText}
              </p>
            </div>
            <div>
              <p>Let’s work on something together →</p>
              <p>
                <u><a className={styles.aboutContacts} href="mailto:info@ricardoleite.net">info@ricardoleite.net</a></u>
              </p>
            </div>
          </div>
          <div className={styles.firstBlockRight}>
            <AboutMainImg 
            url={main.image?.url != undefined ? main.image?.url : ''} 
            logoUrl={logo.image?.url != undefined ? logo.image?.url : ''}/>
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
                As a Freelancer / Work Pal
              </div>
              <ul className={styles.secondBlockRightList}>
                <li>Designer & Art Director</li>
              </ul>
            </div>
              <br />
            <div>
              <div className={styles.secondBlockRightTitle}>As a Studio</div>
              <ul className={styles.secondBlockRightList}>
                <li>
                  {studioTxt.aboutText}
                </li>
              </ul>
            </div>
            <br />
          </div>
        </div>
        {size != undefined && size.width != undefined && size.width >= 600 ? (
        <div className={styles.thirdBlock}>
          <div className={styles.thirdBlockTitle}>Clients & Agencies</div>
          <div className={styles.thirdBlockText}>
            <ul>
              {clientsAndAgencieTxtEntriesOne != undefined &&
                  clientsAndAgencieTxtEntriesOne.map((_value: string, index: number) => {
                    return (
                      <>
                        <li key={`client-agency1-li-${index}`}>{_value}</li>
                      </>
                    );
                  })}
            </ul>
          </div>
          <div className={styles.thirdBlockTitle}></div>
          <div className={styles.thirdBlockText}>
            <ul>
              {clientsAndAgencieTxtEntriesTwo != undefined &&
                  clientsAndAgencieTxtEntriesTwo.map((_value: string, index: number) => {
                    return (
                      <>
                        <li key={`client-agency2-li-${index}`}>{_value}</li>
                      </>
                    );
                  })}
            </ul>
          </div>
          <div className={styles.thirdBlockTitle}>Books & Magazines</div>
          <div className={styles.thirdBlockText}>
            <ul>
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
        ) : (
            <>
          <div className={styles.thirdBlock}>
            <div className={styles.thirdBlockTitle}>Clients & Agencies</div>
            <div className={styles.thirdBlockText}>
              <ul>
                {clientsAndAgencieTxtEntriesOne != undefined &&
                    clientsAndAgencieTxtEntriesOne.map((_value: string, index: number) => {
                      return (
                        <>
                          <li key={`client-agency1-li-${index}`}>{_value}</li>
                        </>
                      );
                    })}
              </ul>
            </div>
            <div className={styles.thirdBlockTitle}></div>
            <div className={styles.thirdBlockText}>
              <ul>
                {clientsAndAgencieTxtEntriesTwo != undefined &&
                    clientsAndAgencieTxtEntriesTwo.map((_value: string, index: number) => {
                      return (
                        <>
                          <li key={`client-agency2-li-${index}`}>{_value}</li>
                        </>
                      );
                    })}
              </ul>
            </div>
          </div>
          <div className={styles.thirdBlock}>
            <div className={styles.thirdBlockTitle}>Books & Magazines</div>
            <div className={styles.thirdBlockText}>
              <ul>
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
        </>
        )}
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
          <br/>
          </div>
          <div className={styles.thirdBlockTitle}>Contacts</div>
          <div className={styles.thirdBlockText}>
            <div className={styles.thirdBlockText}>
            <ul>
              <li>Exhibition / Lectures</li>
              <li><a  className={styles.aboutContacts} href="mailto:ricardo@ricardoleite.net">ricardo@ricardoleite.net</a></li>
              <br />
              <li>Freelancer Availability /</li>
              <li>/ Projects Inquiries</li>
              <li><a  className={styles.aboutContacts} href="mailto:info@ricardoleite.net">info@ricardoleite.net</a></li>
            </ul>
          </div>
          </div>
          <div className={styles.thirdBlockTitle}>Workshops & Lectures</div>
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
            <div className={styles.thirdBlockTitle}>Workshops & Lectures</div>
            <div className={styles.thirdBlockText}>
              <ul>
              {booksTxtEntries != undefined &&
                    booksTxtEntries.map((_value: string, index: number) => {
                      return (
                        <>
                          <li key={`books-m-li-${index}`}>{_value}</li>
                        </>
                      );
                    })}
              </ul>
            </div>
          </div>
          <div className={styles.thirdBlock}>
            <div className={styles.thirdBlockTitle}>Contacts</div>
            <div className={styles.thirdBlockText}>
              <div className={styles.thirdBlockText}>
              <ul>
                <li>Exhibition / Lectures</li>
                <li><a  className={styles.aboutContacts} href="mailto:ricardo@ricardoleite.net">ricardo@ricardoleite.net</a></li>
                <br />
                <li>Freelancer inquiries availability/</li>
                <li><a  className={styles.aboutContacts} href="mailto:info@ricardoleite.net">info@ricardoleite.net</a></li>
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
              <br/>
            </div>
        </div>
          </>
        )}
        <SlidingText />
      </div>
    </>
  );
}
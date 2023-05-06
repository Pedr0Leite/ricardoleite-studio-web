import React from "react";
import styles from "@/styles/About.module.css";
import useScrollDirection from "../hooks/useScrollDirection";
import aboutData from "../aboutData.json";
import Block from "@/components/About/Block/Block";
import mainImg from "../public/About/main1.png";
import mainAbstrc from "../public/About/abstract_img_1.png";
import Image from "next/image";
import SlidingText from "@/components/SlidingText";

export default function About() {
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
            <div className={styles.mainAbstrcImgForMobile}></div>
            <div>
              <p>
                Amsterdam-based creative designer and art director, with a
                strong typography passion and identity-driven profile, bringing
                emotion and character into Design
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
            <div>
              <p>Amsterdam,</p>
              <p>2023.</p>
            </div>
            <div className={styles.mainAbstrcImg}>
              <Image
                src={mainAbstrc.src}
                height="100"
                width="100"
                alt="abstract"
              ></Image>
            </div>
          </div>
        </div>
        <div className={styles.secondBlock}>
          <div className={styles.secondBlockLeftTitle}></div>
          <div className={styles.secondBlockLeft}>
            <p>
              Since 2010, he has worked on global projects as art director,
              designer, and illustrator for arts, culture, and advertising
              clients. Specializing in the development of creative strategies
              and visual concepts for sports, fashion, food, tech, and music
              fields. Creativity as a tool to create visual narratives. From
              local brands to global briefings.
            </p>
          </div>
          <div className={styles.secondBlockRightTitle}>Services</div>
          <div className={styles.secondBlockRight}>
            <p>
              Branding Design & Art Direction, Brand DNA & Development, Visual
              Strategies, 360 Campaign, Visual Identity ,Graphic Design,
              Illustration, Motion Design, Web Design, UX , 3D, Set Design.
            </p>
          </div>
        </div>
        <div className={styles.thirdBlock}>
          <div className={styles.thirdBlockTitle}>Clients & Agencies</div>
          <div className={styles.thirdBlockText}>
            <ul>
              <li>Adidas</li>
              <li>Brut</li>
              <li>Converse</li>
              <li>Facebook</li>
              <li>Pepsi</li>
              <li>Spotify</li>
            </ul>
          </div>
          <div className={styles.thirdBlockTitle}></div>
          <div className={styles.thirdBlockText}>
            <ul>
              <li>WeArePi</li>
              <li>Brut</li>
              <li>CloudFactory</li>
              <li>Ridley Scott Creative Group</li>
              <li>Nike</li>
              <li>KNAS Agency</li>
              <li>YourMajesty</li>
            </ul>
          </div>
          <div className={styles.thirdBlockTitle}></div>
          <div className={styles.thirdBlockText}>
            <ul>
              <li>WeTransfer</li>
              <li>LeGuessWho?</li>
              <li>Mr.Frank</li>
              <li>Pepsi</li>
              <li>Experimenta</li>
              <li>Adobe</li>
            </ul>
          </div>
        </div>
        <div className={styles.thirdBlock}>
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
          <div className={styles.thirdBlockTitle}>Magazines</div>
          <div className={styles.thirdBlockText}>
            <ul>
              <li>Kinfolk v38 / Rituals, Winter, 2020</li>
              <li>IdN v22n3: Designer Typefaces, 2015</li>
              <li>IdN v20n4: Paper Special, 2014</li>
              <li>Soirée graphique n°6, 2013</li>
              <li>IdN v19n4: Shapes-in-Pattern, 2013</li>
              <li>Étapes, France, 2013</li>
              <li>Creative Review, June, 2012</li>
              <li>IDN v19/ Shaping their own patterns, 2012</li>
              <li>C.R. , Monograph Barcelona, 2012</li>
            </ul>
          </div>
          <div className={styles.thirdBlockTitle}>Prizes</div>
          <div className={styles.thirdBlockText}>
            <ul>
              <li>Clio Awards / C.F, 2023</li>
              <li>ADCN / 2x Silver Lamp / C.F., 2022</li>
            </ul>
          </div>
        </div>
        <div className={styles.thirdBlock}>
          <div className={styles.thirdBlockTitle}>Links</div>
          <div className={styles.thirdBlockText}>
            <p className={styles.linksText}>
              LinkedIn, Instagram, Behance, Vimeo
            </p>
          </div>
          <div className={styles.thirdBlockTitle}></div>
          <div className={styles.thirdBlockText}>
            <p>All rights reserved 2023</p>
          </div>
          <div className={styles.thirdBlockTitle}></div>
          <div className={styles.thirdBlockText}>
            <p>
              Type by <u>ABC Dinamo</u>
            </p>
            <p>
              Site by <u>Pedro Leite</u>
            </p>
          </div>
        </div>
        <SlidingText />
      </div>
    </>
  );
}

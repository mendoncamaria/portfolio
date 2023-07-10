import React from 'react';
import { skillsList } from './SkillList';
// import Image from '../../common/Image';
import styles from './skills.module.css';
import Carousel from '../../common/Carousel';
import '../../common/carousel.css';

const Card = ({ title, content, alt, item }) => (
  <div className="carousel_card">
    {/* <h2 className="card_h2">{title}</h2> */}
    <img src={item} alt={item} height="299px" width="299px" />
    {/* <p className='carousel_p'>{content}</p> */}
    {/* <Image item={item} /> */}
  </div>
);
function Skills() {
  return (
    <>
      <div className="heading">
        <p className={styles.heading}>Skills</p>
      </div>
      <div className="app">
        <Carousel>
          {skillsList.map((category) => (
            <Card item={category} key={category} />
          ))}
        </Carousel>
      </div>
    </>
  );
}

export default Skills;

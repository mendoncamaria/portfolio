import React from 'react';
import { skillCategories } from './SkillList';
import Image from '../../common/Image';
import styles from './skills.module.css';

function Skills() {
  return (
    <>
      <div className="heading">
        <p className={styles.heading}>Skills</p>
      </div>
      <div>
        {skillCategories.map((category) => (
          <div key={category.title} className={category.className}>
            <h2>{category.title}</h2>
            {category.skills.map((item) => (
              <Image key={item.alt} item={item} />
            ))}
          </div>
        ))}
      </div>
    </>
  );
}

export default Skills;

import React from 'react';
import { skillCategories } from './SkillList';
import Image from '../../common/Image';

function Skills() {
  return (
    <>
      <div className="heading">SKILLS</div>
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
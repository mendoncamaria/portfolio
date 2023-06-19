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
            <h1>{category.title}</h1>
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
import React from "react";
import Title from "./reusable components/Title";
import postsData from '../works_data/data';
import WorkCard from './reusable components/Work_Card';

function MyWorks() {
  return (
    <div className="works my-5" id="projects">
      <Title title="Projects" />
      <div className="workExemples mx-auto d-grid">
        {postsData.map(work => {
          return <WorkCard key={work.id} src={work.image} title={work.title} description={work.description}/>
        })}
      </div>
    </div>
  );
}

export default MyWorks;

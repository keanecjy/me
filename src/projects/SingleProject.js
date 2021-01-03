import React from 'react';
import IconList from '../component/iconList/IconList';
import './styles.css';

const SingleProject = ({ props }) => {
  const { img, name, description, appLink, codeLink, techStack } = props;

  return (
    <div className="single-project">
      <img src={img} alt={name} className="project-image" />
      <h2>{name}</h2>
      <p>{description}</p>
      <div className="links">
        <a href={appLink} className="app-link" target="_blank" rel="noopener noreferrer">
          View the application here
        </a>
        <a href={codeLink} className="code-link" target="_blank" rel="noopener noreferrer">
          View the code for {name}
        </a>
      </div>
      <IconList icons={techStack} />
    </div>
  );
};

export default SingleProject;
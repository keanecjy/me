import React from 'react';
import IconList from '../component/iconList/IconList';

const SingleProject = ({ props }) => {
  const { img, name, description, appLink, codeLink, techStack } = props;

  return (
    <div>
      <img src={img} alt={name} className="project-image" />
      <h2>{name}</h2>
      <p>{description}</p>
      {appLink && (
        <a href={appLink} className="code-link" target="_blank" rel="noopener noreferrer">
          View the application here
        </a>
      )}
      <a href={codeLink} className="code-link" target="_blank" rel="noopener noreferrer">
        View the code for {name}
      </a>
      <IconList icons={techStack} />
    </div>
  );
};

export default SingleProject;
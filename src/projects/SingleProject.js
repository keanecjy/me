import React, { useState } from 'react';
import IconList from '../component/iconList/IconList';
import './styles.css';

const SingleProject = ({ props }) => {
  const { img, name, description, appLink, gif, codeLink, techStack, marginTop } = props;

  const [image, setHoverImage] = useState(img);

  return (
    <div className="single-project" style={{ marginTop: marginTop }}>
      <img
        src={image}
        alt={name}
        style={{borderRadius: 40}}
        className="project-image"
        onMouseEnter={() => setHoverImage(gif)}
        onMouseLeave={() => setHoverImage(img)}
      />
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

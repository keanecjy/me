import React, { useContext, useState } from 'react';
import IconList from '../component/iconList/IconList';
import './styles.css';
import { StateContext } from '../App';

const SingleProject = ({ props }) => {
  const { img, name, description, appLink, gif, codeLink, techStack, marginTop } = props;
  const { isLight } = useContext(StateContext);
  const [image, setHoverImage] = useState(img);

  return (
    <div className="single-project" style={{ marginTop: marginTop }}>
      <img
        src={image}
        alt={name}
        className="project-image"
        onMouseEnter={() => setHoverImage(gif)}
        onMouseLeave={() => setHoverImage(img)}
      />
      <div>
        <h2>{name}</h2>
        <p style={{ color: isLight ? '#707070' : 'rgba(250,250,250,0.9)' }}>{description}</p>
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
    </div>
  );
};

export default SingleProject;

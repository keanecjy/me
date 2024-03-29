import React, { useContext } from 'react';
import { StateContext } from '../App';
import IconList from '../component/iconList/IconList';
import './styles.css';

const ProjectItem = ({ props }) => {
  const { name, description, appLink, gif, codeLink, techStack } = props;
  const { isLight } = useContext(StateContext);

  return (
    <div className="single-project">
      <div className="project-image">
        <img src={gif} alt={name} className="image-style" width="100%" height="auto" />
      </div>
      <div className="width-100">
        <h2>{name}</h2>
        <p style={{ color: isLight ? '#707070' : 'rgba(250,250,250,0.9)' }}>{description}</p>
        <div className="links">
          {appLink && (
            <a
              href={appLink}
              className="app-link"
              style={{ marginBottom: 6 }}
              target="_blank"
              rel="noopener noreferrer"
            >
              View the application here
            </a>
          )}
          <a
            href={codeLink}
            className="app-link"
            style={{ marginBottom: 26 }}
            target="_blank"
            rel="noopener noreferrer"
          >
            View the code here
          </a>
        </div>
        <IconList icons={techStack} />
      </div>
    </div>
  );
};
export default ProjectItem;

import React, { useContext, useRef, useState } from 'react';
import IconList from '../component/iconList/IconList';
import './styles.css';
import { StateContext } from '../App';
import useWindowDimensions from '../util/WindowDimensions';
import 'intersection-observer';
import IsVisible from 'react-is-visible';

const SingleProject = ({ props }) => {
  const { img, name, description, appLink, gif, codeLink, techStack, marginTop } = props;
  const { isLight } = useContext(StateContext);
  const [image, setHoverImage] = useState(img);

  const nodeRef = useRef();
  const width = useWindowDimensions();

  const getImageTransition = (isVisible) => ({
    transform: isVisible
      ? `translateX(0px)`
      : width >= 992
      ? `translateX(300px)`
      : `translateX(300px)`,
    transition: `all 1s ease-in-out`,
  });

  const getDescriptionTransition = (isVisible) => ({
    transform: isVisible ? `translateX(0px)` : `translateX(-300px)`,
    transition: `all 1s ease-in-out`,
  });

  return (
    <IsVisible once>
      {(isVisible) => (
        <div className="single-project" style={{ marginTop: marginTop }} ref={nodeRef}>
          <img
            src={image}
            alt={name}
            className="project-image"
            onMouseEnter={() => setHoverImage(gif)}
            onMouseLeave={() => setHoverImage(img)}
            style={getImageTransition(isVisible)}
          />
          <div style={getDescriptionTransition(isVisible)}>
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
      )}
    </IsVisible>
  );
};
export default SingleProject;

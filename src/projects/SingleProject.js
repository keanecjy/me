import React, { useContext } from 'react';
import IconList from '../component/iconList/IconList';
import './styles.css';
import { StateContext } from '../App';
import 'intersection-observer';
import IsVisible from 'react-is-visible';
import { transitionHorizontal } from '../util/TransitionHorizontal';

const SingleProject = ({ props }) => {
  const { name, description, appLink, gif, codeLink, techStack, marginTop } = props;
  const { isLight } = useContext(StateContext);

  return (
    <IsVisible once>
      {(isVisible) => (
        <div className="single-project" style={{ marginTop: marginTop }}>
          <div className="project-image">
            <img
              src={gif}
              alt={name}
              className="image-style"
              style={transitionHorizontal(isVisible, 300)}
            />
          </div>
          <div style={transitionHorizontal(isVisible, -300)} className="width-100">
            <h2>{name}</h2>
            <p style={{ color: isLight ? '#707070' : 'rgba(250,250,250,0.9)' }}>{description}</p>
            <div className="links">
              <a
                href={appLink}
                className="app-link"
                style={{ marginBottom: 6 }}
                target="_blank"
                rel="noopener noreferrer"
              >
                View the application here
              </a>
              <a
                href={codeLink}
                className="app-link"
                style={{ marginBottom: 26 }}
                target="_blank"
                rel="noopener noreferrer"
              >
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

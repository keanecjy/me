import React, { useContext } from 'react';
import IsVisible from 'react-is-visible';
import 'intersection-observer';
import './styles.css';
import '../projects/styles.css';
import { StateContext } from '../App';
import IconList from '../component/iconList/IconList';
import { transitionHorizontal } from '../util/TransitionHorizontal';

const SingleExperience = ({ props }) => {
  const { position, company, companyLink, period, desc, techStack, marginTop } = props;
  const { isLight } = useContext(StateContext);

  const grey = {
    color: isLight ? '#707070' : 'rgba(250,250,250,0.9)',
    fontWeight: 600,
  };

  return (
    <IsVisible once>
      {(isVisible) => (
        <>
          <div style={{ height: marginTop }} />
          <div className="single-experience" style={transitionHorizontal(isVisible, -300)}>
            <div className="job-title">
              {position}&nbsp;@&nbsp;
              <a href={companyLink} className="app-link" target="_blank" rel="noopener noreferrer">
                {company}
              </a>
            </div>
            <p style={grey}>{period}</p>
            {desc.map((d) => (
              <div className="single-desc">
                <p className="dot">•</p>
                <p>{d}</p>
              </div>
            ))}
            <div style={{ marginTop: '1em' }}>
              <p style={grey}>Tech Stack</p>
              <IconList icons={techStack} />
            </div>
          </div>
        </>
      )}
    </IsVisible>
  );
};

export default SingleExperience;

/*

    {
      position: 'Software Engineer Intern (Backend)',
      company: 'TransferWise',
      companyLink: 'https://wise.com/',
      period: 'May 2021 - Present',
      desc: [''],
      techStack: [javaIcon, springIcon, grpcIcon, dockerIcon, postgreSQLIcon],
    },
 */

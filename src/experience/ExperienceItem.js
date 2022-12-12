import React, { useContext } from 'react';
import { StateContext } from '../App';
import IconList from '../component/iconList/IconList';
import '../projects/styles.css';
import './styles.css';

const ExperienceItem = ({ props }) => {
  const { position, company, period, desc, techStack } = props;
  const { isLight } = useContext(StateContext);

  const grey = {
    color: isLight ? '#707070' : 'rgba(250,250,250,0.9)',
    fontWeight: 600,
  };

  return (
    <div>
      <div className="job-title">
        {position}&nbsp;@&nbsp;&nbsp;
        {company}
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
  );
};

export default ExperienceItem;

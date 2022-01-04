import React, { useContext } from 'react';
import './styles.css';
import { OverlayTrigger } from 'react-bootstrap';
import { StateContext } from '../../App';

const Icon = ({ icon, name, height }) => {
  const { isLight } = useContext(StateContext);

  return (
    <OverlayTrigger
      key={'bottom'}
      placement={'bottom'}
      overlay={
        <p
          style={{
            color: isLight ? '#8d8d8d' : 'rgba(239, 239, 239, 0.9)',
          }}
        >
          {name}
        </p>
      }
    >
      <img
        alt={name}
        src={icon}
        style={{ height: height || '1.9em', width: 'auto' }}
        className="icon"
      />
    </OverlayTrigger>
  );
};

export default Icon;

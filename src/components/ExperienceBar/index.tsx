import React from 'react';

import { Container } from './styles';

const ExperienceBar: React.FC = () => {
  return (
    <Container>
      <span>0 xp</span>
      <div>
        <div style={{ width: '50%' }} />
        <span className="current-exp" style={{ left: '50%' }}>
          300 xp
        </span>
      </div>
      <span>600 xp</span>
    </Container>
  );
};

export default ExperienceBar;

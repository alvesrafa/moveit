import React from 'react';
import { useChallenges } from '../../contexts';

import { Container } from './styles';

const ExperienceBar = () => {
  const { currentExp, expToNextLevel } = useChallenges();
  const percentToNextLevel = Math.round((currentExp * 100) / expToNextLevel);

  return (
    <Container>
      <span>0 xp</span>
      <div>
        <div style={{ width: `${percentToNextLevel}%` }} />
        <span
          className="current-exp"
          style={{ left: `${percentToNextLevel}%` }}
        >
          {currentExp !== 0 && `${currentExp} xp atualmente`}
        </span>
      </div>
      <span>{expToNextLevel} xp</span>
    </Container>
  );
};

export default ExperienceBar;

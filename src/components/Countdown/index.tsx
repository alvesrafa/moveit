import { useState, useEffect } from 'react';
import { useChallenges } from '../../contexts';
import { Container } from './styles';

let countdownTimeout: NodeJS.Timeout;

const Countdown = () => {
  const { startNewChallenge } = useChallenges();

  const initialTime = 0.05 * 60;
  // const initialTime = 25 * 60
  const [time, setTime] = useState(initialTime);
  const [isActive, setIsActive] = useState(false);
  const [hasFinished, setHasFinished] = useState(false);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

  const startCountdown = () => {
    setIsActive(true);
  };
  const resetCountdown = () => {
    clearTimeout(countdownTimeout);
    setIsActive(false);
    setTime(initialTime);
  };
  useEffect(() => {
    if (isActive && time > 0) {
      countdownTimeout = setTimeout(() => {
        setTime(time - 1);
      }, 1000);
    } else if (isActive && time === 0) {
      setHasFinished(true);
      setIsActive(false);

      startNewChallenge();
    }
  }, [isActive, time]);

  return (
    <Container>
      <div className="timer-wrapper">
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </div>

      {hasFinished ? (
        <button
          disabled
          type="button"
          className="finished"
          onClick={resetCountdown}
        >
          Ciclo encerrado
        </button>
      ) : isActive ? (
        <button type="button" className="active" onClick={resetCountdown}>
          Abandonar um ciclo
        </button>
      ) : (
        <button type="button" className="inactive" onClick={startCountdown}>
          Iniciar um ciclo
        </button>
      )}
    </Container>
  );
};

export default Countdown;

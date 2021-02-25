import { useCountdown } from '../../contexts/CountdownContext';
import { Container } from './styles';

const Countdown = () => {
  const {
    hasFinished,
    minutes,
    seconds,
    resetCountdown,
    startCountdown,
    isActive,
  } = useCountdown();

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

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

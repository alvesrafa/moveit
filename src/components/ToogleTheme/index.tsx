import { Container } from './styles';

interface ToggleThemeProps {
  theme: string;
  onChange: () => void;
}

const ToogleTheme = ({ onChange, theme }: ToggleThemeProps) => {
  return (
    <Container themeString={theme}>
      <input
        type="checkbox"
        checked={theme === 'dark'}
        title={
          theme === 'dark' ? 'Mudarpara tema  claro' : 'Mudar para tema escuro'
        }
        onChange={onChange}
      />
      <span
        className="slider"
        title={
          theme === 'dark' ? 'Mudar para tema claro' : 'Mudar para tema escuro'
        }
      />
    </Container>
  );
};

export default ToogleTheme;

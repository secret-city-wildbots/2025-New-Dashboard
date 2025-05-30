import { h } from 'npm:preact';

interface ButtonProps {
  text: string;
  onClick?: () => void;
  onRelease?: () => void;
  disabled?: boolean;
  color?: string;
}

const Button = ({
  text,
  onClick,
  onRelease,
  disabled = false,
  color = 'rgb(68,142,205)',
}: ButtonProps) => {
  const buttonClass = `button${disabled ? ' disabled' : ''}`;

  return (
    <button
      className={buttonClass}
      type="button"
      onMouseDown={() => !disabled && onClick?.()}
      onMouseUp={() => !disabled && onRelease?.()}
      style={{
        backgroundColor: color,
      }}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default Button;
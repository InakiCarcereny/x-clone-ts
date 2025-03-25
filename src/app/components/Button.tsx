import { ButtonProps } from '@/types/button';

export function Button({
  label,
  handleClick,
  textSize,
  textColor,
  bgColor,
  borderRadius,
  borderSize,
  paddingX,
  paddingY,
  fontWeight,
  borderColor,
  hoverBgColor,
  cursor,
  className,
}: ButtonProps) {
  return (
    <button
      onClick={handleClick}
      className={`${textSize} ${textColor} ${bgColor} ${borderColor} ${borderRadius} ${hoverBgColor} ${borderSize} ${paddingX} ${paddingY} ${fontWeight} ${cursor} ${className}`}
    >
      {label}
    </button>
  );
}

interface ButtonProps {
  label: string;
  handleClick?: () => void;
  textSize: TextSize;
  textColor: TextColor;
  bgColor: BgColor;
  borderRadius: BorderRadius;
  borderSize: BorderSize;
  paddingX: PaddingX;
  paddingY: PaddingY;
  borderColor?: BorderColor;
  hoverBgColor?: HoverBgColor;
}

type TextSize = 'text-sm' | 'text-md' | 'text-lg' | 'text-xl';
type TextColor = 'text-white' | 'text-black';
type BgColor = 'bg-white' | 'bg-black';
type BorderRadius = 'rounded-full';
type BorderSize = 'border';
type PaddingX = 'px-4';
type PaddingY = 'py-2';
type BorderColor = 'border-cyan-500';
type HoverBgColor = 'hover:bg-white/10';

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
  borderColor,
  hoverBgColor,
}: ButtonProps) {
  return (
    <button
      onClick={handleClick}
      className={`${textSize} ${textColor} ${bgColor} ${borderColor} ${borderRadius} ${hoverBgColor} ${borderSize} ${paddingX} ${paddingY}`}
    >
      {label}
    </button>
  );
}

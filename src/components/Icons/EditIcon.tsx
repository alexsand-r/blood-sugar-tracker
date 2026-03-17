type IconProps = {
  size?: number;
  color?: string;
  onClick?: () => void;
};

export const EditIcon = ({
  size = 30,
  color = "#eabe03",
  onClick,
}: IconProps) => {
  return (
    <svg
      onClick={onClick}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className="mx-auto block cursor-pointer"
    >
      <path
        fill={color}
        d="M9.64,19.08v0a.59.59,0,0,0,.12-.2s0,0,0,0,0,0,0,0a.6.6,0,0,0,0-.19s0,0,0-.07a.61.61,0,0,0-.13-.22L6.1,14.76l8.32-8.33,3.15,3.15L11.12,16a.57.57,0,0,0,0,.79.56.56,0,0,0,.79,0l7.72-7.72a3.34,3.34,0,0,0-4.72-4.72l-10,10a.46.46,0,0,0-.13.22l0,0L3.23,20.09a.55.55,0,0,0,.68.68l5.48-1.54,0,0a.46.46,0,0,0,.22-.13Zm9.2-13.92a2.22,2.22,0,0,1,0,3.14l-.48.49L15.21,5.64l.49-.48A2.22,2.22,0,0,1,18.84,5.16ZM4.57,19.43l1-3.61,2.59,2.59Z"
      />
    </svg>
  );
};

type IconProps = {
  size?: number;
  color?: string;
};

export const SmileOk = ({ size = 30, color = "#ffffff" }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 100 100"
    >
      <path
        fill={color}
        d="M50,97.5A47.5,47.5,0,1,1,97.5,50,47.56,47.56,0,0,1,50,97.5Zm0-92A44.5,44.5,0,1,0,94.5,50,44.55,44.55,0,0,0,50,5.5Z"
      />

      <circle fill={color} cx="33.5" cy="38" r="8.5" />

      <circle fill={color} cx="66.5" cy="38" r="8.5" />

      <path
        fill={color}
        d="M50,81.5A37.31,37.31,0,0,1,16.41,60.67l2.68-1.34a34.5,34.5,0,0,0,61.82,0l2.68,1.34A37.31,37.31,0,0,1,50,81.5Z"
      />
    </svg>
  );
};

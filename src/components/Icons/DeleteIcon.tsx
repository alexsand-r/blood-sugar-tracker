type IconProps = {
  size?: number;
  color?: string;
  onClick?: () => void;
};

export const DeleteIcon = ({
  size = 24,
  color = "#848383",
  onClick,
}: IconProps) => {
  return (
    <svg
      onClick={onClick}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className="mx-auto block cursor-pointer hover:[&_path]:fill-red-500"
    >
      <path
        fill={color}
        d="M4.48,21.28A1.83,1.83,0,0,0,6.3,23H17.2A1.83,1.83,0,0,0,19,21.28L19.9,6.69H3.6ZM14.8,10.47a.5.5,0,0,1,.56-.43.49.49,0,0,1,.43.55L14.7,19.53a.5.5,0,0,1-.56.43.49.49,0,0,1-.43-.55Zm-3.55,0a.5.5,0,0,1,1,0v9a.5.5,0,0,1-1,0ZM8.14,10a.5.5,0,0,1,.56.43l1.09,8.94a.49.49,0,0,1-.43.55.5.5,0,0,1-.56-.43L7.71,10.59A.49.49,0,0,1,8.14,10Z"
      />
      <path
        fill={color}
        d="M20,2.74H16.69A.74.74,0,0,0,16,2H7.55a.74.74,0,0,0-.74.74H3.47a1.24,1.24,0,0,0,0,2.47H20a1.24,1.24,0,0,0,0-2.47Z"
      />
    </svg>
  );
};

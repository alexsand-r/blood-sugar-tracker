type IconProps = {
  size?: number;
  color?: string;
};

export const CalendarIcon = ({ size = 24, color = "#8c8888" }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
    >
      {/* Основний корпус календаря */}
      <path
        fill={color}
        d="M19.46,3.63h-.4V2.89a1.86,1.86,0,1,0-3.71,0v.74H13.86V2.89a1.86,1.86,0,0,0-3.72,0v.74H8.65V2.89a1.86,1.86,0,1,0-3.71,0v.74h-.4A2.21,2.21,0,0,0,2.33,5.84V20.76A2.21,2.21,0,0,0,4.54,23H19.46a2.21,2.21,0,0,0,2.21-2.21V5.84A2.21,2.21,0,0,0,19.46,3.63Zm-3.37-.74a1.12,1.12,0,0,1,2.23,0V5.12a1.12,1.12,0,1,1-2.23,0V2.89Zm-5.21,0a1.12,1.12,0,0,1,2.24,0V5.12a1.12,1.12,0,0,1-2.24,0V2.89Zm-5.2,0a1.12,1.12,0,0,1,2.23,0V5.12a1.12,1.12,0,1,1-2.23,0V2.89Zm14.5,16.8a1.79,1.79,0,0,1-1.8,1.79H5.62a1.79,1.79,0,0,1-1.8-1.79V7.35H20.18Z"
      />
      {/* Дні/клітинки календаря */}
      <rect fill={color} x="5.06" y="10.33" width="2.97" height="2.23" />
      <rect fill={color} x="5.06" y="13.3" width="2.97" height="2.23" />
      <rect fill={color} x="5.06" y="16.28" width="2.97" height="2.23" />
      <rect fill={color} x="16.21" y="10.33" width="2.97" height="2.23" />
      <rect fill={color} x="16.21" y="13.3" width="2.97" height="2.23" />
      <rect fill={color} x="16.21" y="16.28" width="2.97" height="2.23" />
      <rect fill={color} x="12.5" y="10.33" width="2.97" height="2.23" />
      <rect fill={color} x="12.5" y="13.3" width="2.97" height="2.23" />
      <rect fill={color} x="12.5" y="16.28" width="2.97" height="2.23" />
      <rect fill={color} x="8.78" y="10.33" width="2.97" height="2.23" />
      <rect fill={color} x="8.78" y="13.3" width="2.97" height="2.23" />
      <rect fill={color} x="8.78" y="16.28" width="2.97" height="2.23" />
    </svg>
  );
};

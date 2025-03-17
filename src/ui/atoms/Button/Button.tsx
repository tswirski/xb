import { type ComponentProps } from 'react';
import { classMerge } from '@ui';

// enum ColorsValues {
//   Turquoise = "#1ABC9C",
//   Sunflower = "#F1C40F",
//   Wisteria = "#8E44AD",
//   Asphalt = "#34495E",
// }

const colors = {
  turquoise: '#1abc9c',
  emerald: '#2ecc71',
  peterRiver: '#3498db',
  amethyst: '#9b59b6',
  wetAsphalt: '#34495e',
  greenSea: '#16a085',
  nephritis: '#27ae60',
  belizeHole: '#2980b9',
  wisteria: '#8e44ad',
  midnightBlue: '#2c3e50',
  sunFlower: '#f1c40f',
  carrot: '#e67e22',
  alizarin: '#e74c3c',
  clouds: '#ecf0f1',
  concrete: '#95a5a6',
  orange: '#f39c12',
  pumpkin: '#d35400',
  pomegranate: '#c0392b',
  silver: '#bdc3c7',
  asbestos: '#7f8c8d',
};
type ColorsValues = keyof typeof colors;

// interface Props {
//   children: string;
//   className?: string;
//   color?: ColorsValues;
//   bgcolor?: ColorsValues;
//   onClick?: () => void;
// }

type Props = ComponentProps<'button'> & {
  color?: ColorsValues;
  bgColor?: ColorsValues;
};

export const Button = ({
  children,
  color = 'wetAsphalt',
  bgColor = 'sunFlower',
  className,
  ...rest
}: Props) => {
  return (
    <button
      className={classMerge(
        'my-4 py-2 px-4 cursor-pointer text-md rounded-md transition-colors hover:opacity-85',
        className,
      )}
      style={{
        color: colors[color],
        backgroundColor: colors[bgColor],
      }}
      {...rest}
    >
      {children}
    </button>
  );
};

// with CssProperties:
// import { ComponentPropsWithoutRef, MouseEventHandler } from 'react';

// type ColorKey =
//   | 'turquoise'
//   | 'emerald'
//   | 'peterRiver'
//   | 'amethyst'
//   | 'wetAsphalt'
//   | 'greenSea'
//   | 'nephritis'
//   | 'belizeHole'
//   | 'wisteria'
//   | 'midnightBlue'
//   | 'sunFlower'
//   | 'carrot'
//   | 'alizarin'
//   | 'clouds'
//   | 'concrete'
//   | 'orange'
//   | 'pumpkin'
//   | 'pomegranate'
//   | 'silver'
//   | 'asbestos';

// const colors: Record<ColorKey, string> = {
//   // sfsdfsdfs: '#ffffff',
//   turquoise: '#1abc9c',
//   emerald: '#2ecc71',
//   peterRiver: '#3498db',
//   amethyst: '#9b59b6',
//   wetAsphalt: '#34495e',
//   greenSea: '#16a085',
//   nephritis: '#27ae60',
//   belizeHole: '#2980b9',
//   wisteria: '#8e44ad',
//   midnightBlue: '#2c3e50',
//   sunFlower: '#f1c40f',
//   carrot: '#e67e22',
//   alizarin: '#e74c3c',
//   clouds: '#ecf0f1',
//   concrete: '#95a5a6',
//   orange: '#f39c12',
//   pumpkin: '#d35400',
//   pomegranate: '#c0392b',
//   silver: '#bdc3c7',
//   asbestos: '#7f8c8d',
// };

// type FancyButtonProps = {
//   children: React.ReactNode;
//   bgColor?: ColorKey;
//   color?: ColorKey;
//   onClick?: MouseEventHandler<HTMLButtonElement>;
// } & ComponentPropsWithoutRef<'button'>;

// export const Button = ({
//   children,
//   bgColor = 'peterRiver',
//   color = 'clouds',
//   onClick,
// }: FancyButtonProps) => {
//   const buttonStyle: React.CSSProperties = {
//     backgroundColor: colors[bgColor],
//     color: colors[color],
//     padding: '10px 20px',
//     border: 'none',
//     borderRadius: '5px',
//     cursor: 'pointer',
//     fontSize: '16px',
//     fontWeight: 'bold',
//     transition: 'all 0.3s ease',
//   };

//   return (
//     <button style={buttonStyle} onClick={onClick} className="my-4">
//       {children}
//     </button>
//   );
// };

// type ButtonProps = typeof Button;
// type ButtonPropsReturnType = ReturnType<typeof Button>;
// type ButtonPropsParameters = Parameters<typeof Button>[0];

// const myButton: ButtonPropsParameters = {
//   bgColor,
//   children
// }

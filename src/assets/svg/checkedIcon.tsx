import { SvgIcon } from '@mui/material';
import { IconProps } from './svgIconProps';

export function CheckedIcon(props: IconProps) {
  const { rootStyle, ...rest } = props;

  const rootSx = {
    height: 18,
    width: 18,
    ...rootStyle,
  };
  return (
    <SvgIcon
      xmlns="http://www.w3.org/2000/svg"
      sx={rootSx}
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox="0 0 16 16"
      height="1em"
      width="1em"
      {...rest}
    >
      <path d="M13.485 1.431a1.473 1.473 0 0 1 2.104 2.062l-7.84 9.801a1.473 1.473 0 0 1-2.12.04L.431 8.138a1.473 1.473 0 0 1 2.084-2.083l4.111 4.112 6.82-8.69a.486.486 0 0 1 .04-.045z"></path>
    </SvgIcon>
  );
}

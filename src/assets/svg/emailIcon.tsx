import { SvgIcon } from '@mui/material';
import { IconProps } from './svgIconProps';

export function EmailIcon(props: IconProps) {
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
      viewBox="0 0 20 20"
      height="1.2em"
      width="1.2em"
      {...rest}
    >
      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
    </SvgIcon>
  );
}

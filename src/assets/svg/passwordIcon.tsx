import { SvgIcon } from '@mui/material';
import { IconProps } from './svgIconProps';

export function PasswordIcon(props: IconProps) {
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
      <path
        fillRule="evenodd"
        d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
        clipRule="evenodd"
      ></path>
    </SvgIcon>
  );
}

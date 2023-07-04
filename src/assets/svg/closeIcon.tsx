import { SvgIcon } from '@mui/material';
import { IconProps } from './svgIconProps';

export function CloseIcon(props: IconProps) {
  const { rootStyle, ...rest } = props;

  const rootSx = {
    height: 18,
    width: 18,
    ...rootStyle,
  };
  return (
    <SvgIcon
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth={0}
      viewBox="0 0 512 512"
      sx={rootSx}
      {...rest}
    >
      <path
        stroke="none"
        d="M405 136.798 375.202 107 256 226.202 136.798 107 107 136.798 226.202 256 107 375.202 136.798 405 256 285.798 375.202 405 405 375.202 285.798 256z"
      />
    </SvgIcon>
  );
}

import { SvgIcon } from '@mui/material';
import { IconProps } from './svgIconProps';

export function InfoIcon(props: IconProps) {
  const { rootStyle, ...rest } = props;

  const rootSx = {
    height: 18,
    width: 18,
    ...rootStyle,
  };
  return (
    <SvgIcon
      xmlns="http://www.w3.org/2000/svg"
      // width="1em"
      // height="1em"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth={0}
      viewBox="0 0 24 24"
      sx={rootSx}
      {...rest}
    >
      <path fill="none" stroke="none" d="M0 0h24v24H0z" />
      <path
        stroke="none"
        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"
      />
    </SvgIcon>
  );
}

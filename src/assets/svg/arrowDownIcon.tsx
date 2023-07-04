import { SvgIcon } from '@mui/material';
import { IconProps } from './svgIconProps';

export function ArrowDownIcon(props: IconProps) {
  const { rootStyle, ...rest } = props;

  const rootSx = {
    height: 18,
    width: 18,
    ...rootStyle,
  };
  return (
    <SvgIcon
      sx={rootSx}
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox="0 0 24 24"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <g>
        <path fill="none" d="M0 0h24v24H0z"></path>
        <path d="M12 15l-4.243-4.243 1.415-1.414L12 12.172l2.828-2.829 1.415 1.414z"></path>
      </g>
    </SvgIcon>
  );
}

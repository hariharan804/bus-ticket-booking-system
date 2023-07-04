import { SxProps } from '@mui/material';
import React, { HTMLInputTypeAttribute } from 'react';

export interface ImageViewerProps {
  width?: number;
  height?: number;
  src: string | any;
  style?: SxProps | React.CSSProperties;
  alt?: string;
  container?: string | number;
  priority?: boolean;
}

export interface MyInputProps {
  id?: string;
  testId?: string;
  className?: string;
  type: HTMLInputTypeAttribute | 'textArea';
  label?: string;
  placeholder?: string;
  disabled?: boolean;
  endAdornment?: React.ReactNode;
  startAdornment?: React.ReactNode;
  row?: string | number;
  onChange: (e: string | React.ChangeEvent<Element>) => void;
  onBlur?: () => void;
  helperText?: string;
  error?: boolean;
  value: unknown;
  max?: string | number;
  min?: string | number;
  defaultValue?: unknown | string | number | readonly string[];
  style?: SxProps | React.CSSProperties;
}

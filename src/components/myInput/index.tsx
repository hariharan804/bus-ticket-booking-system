import TextareaAutosize from '@mui/material/TextareaAutosize';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { MyInputProps } from '@/types';
import { CSSProperties } from 'react';
import { useTheme } from '@mui/material';

export const MyInput = (props: MyInputProps) => {
  const {
    id = '',
    testId = '',
    className,
    type = 'text',
    label = '',
    placeholder = '',
    disabled = false,
    endAdornment,
    startAdornment,
    row = '2',
    onChange = () => {},
    onBlur = () => {},
    helperText = '',
    error = false,
    value = '',
    max,
    min,
    defaultValue,
    style,
    ...reset
  } = props;
  const theme = useTheme();

  const Styles = {
    inputBlock: {
      margin: '1px 0px',
      '& svg': {
        fontSize: '1.0em',
      },
      '& svg path': {
        fill: theme.palette.text[500],
      },
      '.Mui-focused': {
        '& svg path': {
          fill: theme.palette.primary.light,
        },
      },
      '.Mui-error': {
        '& svg path': {
          fill: theme.palette.secondary.dark,
        },
      },
    },
    input: {
      '& .MuiInputBase-root.Mui-focused': {
        border: '1px solid' + theme.palette.primary.light + ' !important',
        color: theme.palette.primary.dark,
      },
      '& .MuiInputLabel-root.Mui-focused': {
        color: theme.palette.primary.dark,
        fontWeight: '700',
      },
      '& .MuiInputLabel-root.Mui-error': {
        color: theme.palette.secondary.dark,
      },
      '& .MuiInputBase-root.Mui-error': {
        border: '1px solid' + theme.palette.error.main + ' !important',
        color: theme.palette.secondary.dark,
      },
      '& .MuiInputBase-root': {
        fontWeight: '600',
        fontSize: '16px',
        border: '1px solid #E4E8EE',
        borderRadius: '8px',
        padding: '3px 6px',
        color: 'text.500',
      },
      '& .MuiInputLabel-root': {
        fontWeight: '600',
        fontSize: '16px',
        letterSpacing: '0.05rem',
        color: theme.palette.text.A100,
        marginBottom:'4px'
      },
      '& .MuiFormHelperText-root': {
        fontWeight: '500',
        fontSize: '12px',
        lineHeight: '16px',
        letterSpacing: '0.05rem',
        color: theme.palette.error.main + ' !important    ',
        marginLeft: '3px',
      },
    },
  };
  return (
    <Box sx={Styles?.inputBlock}>
      {
        // type === "date" ? (
        //   <MobileDatePicker
        //     label="For mobile"
        //     value={"value"}
        //     // onChange={(newValue) => {
        //     //   setValue(newValue);
        //     // }}
        //     renderInput={(params) => <TextField {...params} />}
        //   />
        // ) :
        type !== 'textArea' ? (
          <TextField
            label={label}
            sx={{ ...Styles.input, ...style }}
            type={type}
            variant="standard"
            fullWidth={true}
            value={value}
            placeholder={placeholder}
            onChange={onChange}
            onBlur={onBlur}
            defaultValue={defaultValue}
            helperText={helperText ? helperText : ' '}
            error={error}
            InputLabelProps={{
              shrink: true,
            }}
            InputProps={{
              className: className,
              id: id,
              // maxLength: max | 100,
              // minLength: min,
              readOnly: disabled,
              disableUnderline: true,
              // 'data-testid': testId,
              startAdornment: (
                <InputAdornment position="start">
                  {startAdornment}
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">{endAdornment}</InputAdornment>
              ),
            }}
            // {...reset}
          />
        ) : (
          <TextareaAutosize
            minRows={row}
            onChange={onChange}
            value={value as string}
            aria-label="maximum height"
            style={
              {
                ...Styles.input,
                minWidth: '100%',
                maxWidth: '100%',
                ...style,
              } as CSSProperties
            }
            placeholder={placeholder}
            defaultValue={defaultValue as string}
            data-testid={testId}
            {...reset}
          />
        )
      }
    </Box>
  );
};

export default MyInput;

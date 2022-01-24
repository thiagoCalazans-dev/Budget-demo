import { Button } from "@mui/material";

import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  button: {
        margin: theme.spacing(1),
  },
}));

export default function DefaultButton({
  variant,
  size,
  color,
  disabled,
  type,
  onClick,
  endIcon,
  children,
  startIcon
}) {

  const classes = useStyles()

  return (
    <Button
    className={classes.button}
      variant={variant}
      size={size}
      color={color}
      disabled={disabled}
      type={type}
      onClick={onClick}
      endIcon={endIcon}
      startIcon={startIcon}
    >
      {children}
    </Button>
  );
}

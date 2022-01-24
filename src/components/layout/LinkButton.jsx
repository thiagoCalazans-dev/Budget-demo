import { useNavigate } from "react-router-dom";
import { Button} from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  nav: {
    marginBottom: theme.spacing(3),
  },
}));



export default function LinkButton({ to, text, icon, variant, color, size }) {
  const classes = useStyles();
const navigate = useNavigate();

  return (
    <nav className={classes.nav}>
      <Button onClick={() => navigate(to)}variant={variant} color={color} size={size}>
        {text}
        {icon}
      </Button>
    </nav>
  );
}

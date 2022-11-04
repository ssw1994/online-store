import {
  Card,
  CardActions,
  CardHeader,
  CardContent,
  TextField,
  Stack,
  Button,
  Typography,
} from "@mui/material";
import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { VarientContext } from "../../shared/contexts";

/**
 * @author
 * @function Login
 **/

export const Login = (props) => {
  const variant = useContext(VarientContext);
  const navigate = useNavigate();
  const login = () => {
    navigate("/");
  };
  return (
    <Card>
      <CardHeader title="Login" className="ct" />
      <CardContent>
        <Stack spacing={2}>
          <TextField variant={variant}></TextField>
          <TextField variant={variant}></TextField>
          <Button onClick={login}>Login</Button>
        </Stack>
      </CardContent>
      <CardActions>
        <div className="ct">
          <div>
            <Typography fontSize={12}>New to Online shopping ?</Typography>
            <div>
              <Typography fontSize={14}>
                Creact Account here &nbsp;
                <Link to="/auth/register">Register</Link>
              </Typography>
            </div>
          </div>
        </div>
      </CardActions>
    </Card>
  );
};

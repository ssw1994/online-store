import React from "react";
import { Card, CardActions, CardHeader, CardContent } from "@mui/material";
import { Link } from "react-router-dom";

/**
 * @author
 * @function Register
 **/

export const Register = (props) => {
  return (
    <Card>
      <CardHeader title="Register" className="ct" />
      <CardContent></CardContent>
      <CardActions>
        <Link to="/auth/login">Login</Link>
      </CardActions>
    </Card>
  );
};

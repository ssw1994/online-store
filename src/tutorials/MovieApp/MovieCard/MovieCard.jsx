import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";
import "../movie.module.css";
export default function MovieCard({ movie }) {
  return (
    <Card className="movie-card">
      <CardHeader title={movie.title} />
      <CardContent>
        <Typography>
          <label>Director : </label>
          {movie.director}
        </Typography>
        <Typography>
          <label>Relase Date : </label>
          {movie.director}
        </Typography>
        <Typography>{movie.opening_crawl}</Typography>
      </CardContent>
    </Card>
  );
}

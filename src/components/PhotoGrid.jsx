import React from "react";
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
//   makeStyles,
} from "@mui/material";
import { ThemeProvider, createMuiTheme, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 200,
  },
});

const photos = [
  {
    id: 1,
    title: "Foto 1",
    description: "Descripción de la Foto 1.",
    imageUrl: "imagen1.jpg",
  },
  {
    id: 2,
    title: "Foto 2",
    description: "Descripción de la Foto 2.",
    imageUrl: "imagen2.jpg",
  },
  // Agrega más fotos aquí
];

function PhotoGrid() {
  const classes = useStyles();

  return (
    <Grid container spacing={3}>
      {photos.map((photo) => (
        <Grid item key={photo.id} xs={12} sm={6} md={4}>
          <Card className={classes.root}>
            <CardMedia
              className={classes.media}
              image={photo.imageUrl}
              title={photo.title}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {photo.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {photo.description}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

export default PhotoGrid;

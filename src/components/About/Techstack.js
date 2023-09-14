import { React, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiPython,
  DiGit,
  DiJava,
} from "react-icons/di";
import lalo from "../../Assets/lalo.png";
import poli from "../../Assets/polonia.png";
import atenas from "../../Assets/atenas.png";
import negrito from "../../Assets/negrito.jpeg";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import PhotoGrid from "../PhotoGrid";

function Techstack() {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <Row
      style={{
        justifyContent: "center",
        paddingBottom: "50px",
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        alignContent: "center",
        gap: "15px",
        marginTop: "50px",
      }}
    >
      <Card
        sx={{
          maxWidth: 350,
          backgroundColor: "black",
          border: "2px solid violet",
          borderRadius: "10px",
          boxShadow: isHovered ? "0 0 500px rgba(104, 24, 122, 0.8)" : "none",
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <CardActionArea>
          <CardMedia
            component="img"
            height="250"
            image={atenas}
            alt="green iguana"
          />
          <CardContent>
            <p style={{ justifyContent: "center", color: "white" }}>Atenas</p>
          </CardContent>
        </CardActionArea>
      </Card>
      <Card
       sx={{
          maxWidth: 350,
          backgroundColor: "black",
          border: "2px solid violet",
          borderRadius: "10px",
          boxShadow: isHovered ? "0 0 500px rgba(104, 24, 122, 0.8)" : "none",
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <CardActionArea>
          <CardMedia
            component="img"
            height="250"
            image={atenas}
            alt="green iguana"
          />
          <CardContent>
            <p style={{ justifyContent: "center", color: "white" }}>Lizard</p>
          </CardContent>
        </CardActionArea>
      </Card>
      <Card
         sx={{
          maxWidth: 350,
          backgroundColor: "black",
          border: "2px solid violet",
          borderRadius: "10px",
          boxShadow: isHovered ? "0 0 500px rgba(104, 24, 122, 0.8)" : "none",
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <CardActionArea>
          <CardMedia
            component="img"
            height="250"
            image={atenas}
            alt="green iguana"
          />
          <CardContent>
            <p style={{ justifyContent: "center", color: "white" }}>Lizard</p>
          </CardContent>
        </CardActionArea>
      </Card>
      <Card
       sx={{
        maxWidth: 350,
        backgroundColor: "black",
        border: "2px solid violet",
        borderRadius: "10px",
        boxShadow: isHovered ? "0 0 500px rgba(104, 24, 122, 0.8)" : "none",
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      >
        <CardActionArea>
          <CardMedia
            component="img"
            height="250"
            image={atenas}
            alt="green iguana"
          />
          <CardContent>
            <p style={{ justifyContent: "center", color: "white" }}>Lizard</p>
          </CardContent>
        </CardActionArea>
      </Card>
    </Row>
    // <PhotoGrid/>
  );
}

export default Techstack;

import React from "react";
import {
  Avatar,
  AvatarGroup,
  Box,
  Divider,
  ImageList,
  ImageListItem,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";

import photo1 from "../assets/img/6.jpg";
import photo2 from "../assets/img/5.jpg";
import photo3 from "../assets/img/3.jpg";
import photo4 from "../assets/img/2.jpg";
import photo5 from "../assets/img/7.jpg";
import photo6 from "../assets/img/8.jpg";
import photo8 from "../assets/img/10.jpg";
import photo9 from "../assets/img/11.jpg";
import photo10 from "../assets/img/12.jpg";
export default function Rightbar() {
  return (
    <Box flex={2} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position="fixed" width={300}>
        <Typography variant="h6" fontWeight={200}>
          Online Friends
        </Typography>
        <AvatarGroup max={7}>
          <Avatar
            alt="Sara"
            src={photo1}
          />
          <Avatar
            alt="Tara"
            src={photo2}
          />
          <Avatar
            alt="Taraneh"
            src={photo6}
          />
          <Avatar
            alt="Zahra"
            src={photo3}
          />
          <Avatar
            alt="Roya"
            src={photo4}
          />
          
          <Avatar
            alt="Mahya"
            src={photo5}
          />
          
          <Avatar
            alt=""
            src=""
          />
          <Avatar
            alt=""
            src=""
          />
          
         
        </AvatarGroup>
        <Typography variant="h6" fontWeight={200} mt={5} mb={2}>
          Latest Photos
        </Typography>
        <ImageList cols={3} rowHeight={100} gap={5}>
          <ImageListItem>
            <img
              src={photo8}
              alt=""
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src={photo10}
              alt=""
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src={photo9}
              alt=""
            />
          </ImageListItem>
        </ImageList>
        <Typography variant="h6" fontWeight={200} mt={5}>
          Latest Conversations
        </Typography>
        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        >
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar
                alt="Remy Sharp"
                src={photo2}
              />
            </ListItemAvatar>
            <ListItemText
              primary="Summer"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Sara
                  </Typography>
                  {" — I'll be in ..."}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Travis Howard" src={photo5} />
            </ListItemAvatar>
            <ListItemText
              primary="Autumn"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Baran
                  </Typography>
                  {" — Wish I could come..."}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Cindy Baker" src={photo1} />
            </ListItemAvatar>
            <ListItemText
              primary="Winter"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Tara
                  </Typography>
                  {" — Have you ever…"}
                </React.Fragment>
              }
            />
          </ListItem>
        </List>
      </Box>
    </Box>
  );
}

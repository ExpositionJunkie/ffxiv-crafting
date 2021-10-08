import React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import ListSubheader from "@mui/material/ListSubheader";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";

export default function CharImageList({ items }) {
  if (typeof items != typeof undefined) {
    return (
      <ImageList sx={12} spacing={4}>
        <ImageListItem key="Subheader" cols={2}>
          <ListSubheader component="div">Possible Characters</ListSubheader>
        </ImageListItem>
        {items.map((item) => (
          <ImageListItem key={item.ID}>
            <img
              src={`${item.Avatar}?w=248&fit=crop&auto=format`}
              srcSet={`${item.Avatar}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.Name}
              loading="lazy"
            />
            <ImageListItemBar
              title={`${item.Name} - ${item.Server}`}
              subtitle={item.ID}
              actionIcon={
                <IconButton
                  sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                  aria-label={`info about ${item.Name}`}
                >
                  <InfoIcon />
                </IconButton>
              }
            />
          </ImageListItem>
        ))}
      </ImageList>
    );
  } else {
    return <div></div>;
  }
}

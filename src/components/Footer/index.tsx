import React from "react";
import { Box, Container, Typography, Stack } from "@mui/material";

import { isMobile, sociallinks } from "src/helpers";

const xicon = "/icons/x.svg";
const blueskyicon = "/icons/bluesky.png";
const linkedinicon = "/icons/linkedin.png";

const Footer = () => {
  const sicons = {
    bluesky: (
      <Box component="img" src={blueskyicon} sx={{ width: 20, height: 20 }} />
    ),
    twitter: <Box component="img" src={xicon} sx={{ width: 20, height: 20 }} />,
    linkedin: (
      <Box component="img" src={linkedinicon} sx={{ width: 20, height: 20 }} />
    ),
  };

  const handleOpenLink = (link) => {
    if (link) {
      window.open(link, "_blunk");
    }
  };

  return (
    <>
      <Box
        sx={{
          borderTop: 1,
          p: 2,
          mb: 5,
        }}
      >
        <Container>
          <Stack
            sx={{
              textAlign: "center",
            }}
            spacing={2}
          >
            <Typography
              sx={{
                fontSize: isMobile ? 30 : 20,
                color: "#445029",
              }}
            >
              Connect with us
            </Typography>
            <Stack
              direction="row"
              alignItems="center"
              spacing={2}
              justifyContent="center"
            >
              {sociallinks.map((social) => (
                <Box
                  sx={{ cursor: "pointer" }}
                  onClick={() => handleOpenLink(social.link)}
                >
                  {sicons[social.name]}
                </Box>
              ))}
            </Stack>
            <Typography sx={{ fontSize: 12, color: "#666" }}>
              <a
                href="https://www.flaticon.com/free-icons/world"
                title="world icons"
              >
                World icons created by Freepik - Flaticon
              </a>
            </Typography>
          </Stack>
        </Container>
      </Box>
    </>
  );
};

export default Footer;

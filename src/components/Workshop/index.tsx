// External imports
import React, { useState, useEffect, useRef } from "react";
import ViewAllIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import {
  Grid,
  Container,
  Typography,
  Box,
  Stack,
  Divider,
  Alert,
} from "@mui/material";
import { Link } from "react-router-dom";

// App related imports
import Footer from "src/components/Footer";
import { customStyles } from "src/styles";
import { isMobile, workshops, papers } from "src/helpers";

const Workshop = (props) => {
  const { activeWs } = props;
  const [espeakers, setESpeakers] = useState([]);
  const [eisls, setEIsls] = useState([]);
  const [epanelists, setEPanelists] = useState([]);
  const mainContentRef = useRef<HTMLDivElement>(null);

  const toggleExpandS = (e) => {
    const index = e.currentTarget.getAttribute("id");
    if (index) {
      const id = Number(index);
      setESpeakers((prev) =>
        prev?.map((item, i) =>
          i === id ? { ...item, expanded: !item.expanded } : item,
        ),
      );
    }
  };

  const toggleExpandI = (e) => {
    const index = e.currentTarget.getAttribute("id");
    if (index) {
      const id = Number(index);
      setEIsls((prev) =>
        prev?.map((item, i) =>
          i === id ? { ...item, expanded: !item.expanded } : item,
        ),
      );
    }
  };

  const toggleExpandP = (e) => {
    const index = e.currentTarget.getAttribute("id");
    if (index) {
      const id = Number(index);
      setEPanelists((prev) =>
        prev?.map((item, i) =>
          i === id ? { ...item, expanded: !item.expanded } : item,
        ),
      );
    }
  };

  useEffect(() => {
    if (mainContentRef.current) {
      mainContentRef.current.scrollIntoView({
        block: "start",
        behavior: "smooth",
      });
    }
    setESpeakers(workshops[activeWs].speakers);
    setEIsls(workshops[activeWs].isls);
    setEPanelists(workshops[activeWs].panelists);
  }, [activeWs]);

  const handExternalLink = (link) => {
    if (link) {
      window.open(link, "_blunk");
    }
  };

  return (
    <React.Fragment>
      <Box ref={mainContentRef}>
        <Box
          sx={{
            backgroundColor: "#e6ecda",
            pt: 2,
            pb: 8,
            mt: isMobile ? 10 : -2,
          }}
        >
          <Stack
            sx={{
              mt: 15,
              textAlign: "center",
              dislay: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography
              variant="h2"
              sx={{
                fontWeight: 700,
                color: "#445029",
              }}
            >
              Trust AI Workshop
            </Typography>
            <Typography
              variant={isMobile ? "h4" : "h5"}
              sx={{
                textAlign: "center",
                color: "#445029",
              }}
            >
              @ {workshops[activeWs].location}
            </Typography>
            {workshops[activeWs].datetime && (
              <Typography
                sx={{
                  textAlign: "center",
                  color: "#445029",
                  fontSize: isMobile ? 20 : 18,
                }}
              >
                {workshops[activeWs].datetime}
              </Typography>
            )}
            <Box sx={{ mt: 2, textAlign: "center", width: "51.5%" }}>
              <Alert variant="filled" severity="warning">
                Please note that workshop attendance at indaba is only possible
                for registered Indaba attendees. To submit a paper to our
                workshop, at least one author must be accepted at Indaba at the
                time of the workshop to be able to present the work on August
                21st.
              </Alert>
            </Box>
          </Stack>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {!isMobile && (
              <Box
                sx={{
                  backgroundColor: "#fff",
                  padding: 2,
                  width: "50%",
                  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
                  mt: 1,
                }}
              >
                {workshops[activeWs].title && (
                  <>
                    <Typography variant="h6">
                      {workshops[activeWs].title}
                    </Typography>
                    <Box sx={{ mb: 2 }}>
                      <Divider />
                    </Box>
                  </>
                )}
                <Typography
                  sx={{
                    fontSize: 15,
                  }}
                >
                  {workshops[activeWs].about}
                </Typography>
                <Box sx={{ mt: 2 }}>
                  <Stack direction="row" spacing={0.5} alignItems="center">
                    <Typography sx={{ fontSize: isMobile ? 30 : 18 }}>
                      Checkout our
                    </Typography>
                    <Link to="call-for-papers">
                      <Typography
                        sx={{
                          fontSize: isMobile ? 30 : 18,
                          color: "#445029",
                          cursor: "pointer",
                        }}
                      >
                        Call for Papers
                      </Typography>
                    </Link>
                  </Stack>
                </Box>
              </Box>
            )}
          </Box>
        </Box>
        {isMobile && (
          <Box sx={{ p: 5 }}>
            <Typography
              sx={{
                fontSize: 15,
              }}
            >
              {workshops[activeWs].about}
            </Typography>
          </Box>
        )}
        <Box
          sx={{
            backgroundColor: "#e6ecda",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: isMobile ? 100 : 60,
            mb: 2,
            mt: 0.2,
          }}
        >
          <Stack>
            <Typography
              variant={isMobile ? "h3" : "h5"}
              sx={{
                fontWeight: 700,
                color: "#445029",
              }}
            >
              Invited Speakers
            </Typography>
          </Stack>
        </Box>
        <Container sx={{ mt: 4, mb: 4 }}>
          <Grid container spacing={2} justifyContent="center">
            {workshops[activeWs]?.speakers?.map((speaker, index) => (
              <Grid item xs={isMobile ? 12 : 3} key={index}>
                <Stack spacing={2}>
                  <Box sx={{ textAlign: "center" }}>
                    <Box
                      component="img"
                      src={speaker.image}
                      sx={customStyles.mediaStyles}
                    />
                  </Box>
                  <Stack>
                    <Typography
                      onClick={() => handExternalLink(speaker?.link)}
                      sx={{
                        fontSize: isMobile ? 30 : 18,
                        color: "#445029",
                        cursor: "pointer",
                      }}
                    >
                      {speaker.name}
                    </Typography>
                    {speaker.affiliate && (
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{
                          fontSize: isMobile ? 24 : 12,
                        }}
                      >
                        {speaker.affiliate}
                      </Typography>
                    )}
                  </Stack>
                  {speaker.bio && (
                    <Box>
                      <Box
                        sx={{
                          height: espeakers[index]?.expanded
                            ? "auto"
                            : speaker.bio?.length >= 400
                              ? isMobile
                                ? 400
                                : 199
                              : "auto",
                          overflow: "hidden",
                          transition: "height 0.3s ease",
                        }}
                      >
                        <Typography
                          sx={{
                            fontSize: isMobile ? 26 : 13,
                          }}
                        >
                          {speaker.bio}
                        </Typography>
                      </Box>
                      {speaker.bio?.length >= 400 && (
                        <Box>
                          <Stack
                            alignItems="center"
                            onClick={toggleExpandS}
                            id={`${index}`}
                            direction="row"
                            sx={{
                              float: "right",
                              cursor: "pointer",
                            }}
                          >
                            <Typography sx={{ fontSize: isMobile ? 25 : 14 }}>
                              {espeakers[index]?.expanded
                                ? "Read less"
                                : "Read more"}
                            </Typography>
                            <ViewAllIcon
                              sx={{ fontSize: isMobile ? 28 : 15 }}
                            />
                          </Stack>
                        </Box>
                      )}
                    </Box>
                  )}
                </Stack>
              </Grid>
            ))}
          </Grid>
        </Container>
        {workshops[activeWs].panelists?.length > 0 && (
          <>
            <Box
              sx={{
                backgroundColor: "#e6ecda",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: isMobile ? 100 : 60,
                mb: 2,
              }}
            >
              <Stack>
                <Typography
                  variant={isMobile ? "h3" : "h5"}
                  sx={{
                    fontWeight: 700,
                    color: "#445029",
                  }}
                >
                  Panelists
                </Typography>
              </Stack>
            </Box>
            <Container sx={{ mt: 4, mb: 4 }}>
              <Grid container spacing={4} justifyContent="center">
                {workshops[activeWs]?.panelists?.map((panelist, index) => (
                  <Grid item xs={isMobile ? 6 : 3} key={index}>
                    <Stack spacing={2}>
                      {panelist.image && (
                        <Box sx={{ textAlign: "center" }}>
                          <Box
                            component="img"
                            src={panelist.image}
                            sx={customStyles.mediaStyles}
                          />
                        </Box>
                      )}
                      <Stack>
                        <Typography
                          onClick={() => handExternalLink(panelist?.link)}
                          sx={{
                            fontSize: isMobile ? 30 : 18,
                            color: "#445029",
                            cursor: "pointer",
                          }}
                        >
                          {panelist.name}
                        </Typography>
                        {panelist.affiliate && (
                          <Typography
                            variant="body2"
                            color="text.secondary"
                            sx={{
                              fontSize: isMobile ? 24 : 12,
                            }}
                          >
                            {panelist.affiliate}
                          </Typography>
                        )}
                      </Stack>
                      {panelist.bio && (
                        <Box>
                          <Box
                            sx={{
                              height: epanelists[index]?.expanded
                                ? "auto"
                                : panelist.bio?.length >= 400
                                  ? 180
                                  : "auto",
                              overflow: "hidden",
                              transition: "height 0.3s ease",
                            }}
                          >
                            <Typography variant="body2" color="text.secondary">
                              {panelist.bio}
                            </Typography>
                          </Box>
                          {panelist.bio?.length >= 400 && (
                            <Box>
                              <Stack
                                alignItems="center"
                                onClick={toggleExpandP}
                                id={`${index}`}
                                direction="row"
                                sx={{
                                  float: "right",
                                  cursor: "pointer",
                                }}
                              >
                                <Typography variant="body2">
                                  {epanelists[index]?.expanded
                                    ? "Read less"
                                    : "Read more"}
                                </Typography>
                                <ViewAllIcon
                                  sx={{ fontSize: isMobile ? 25 : 15 }}
                                />
                              </Stack>
                            </Box>
                          )}
                        </Box>
                      )}
                    </Stack>
                  </Grid>
                ))}
              </Grid>
            </Container>
          </>
        )}
        {workshops[activeWs].isls?.length > 0 && (
          <>
            <Box
              sx={{
                backgroundColor: "#e6ecda",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: isMobile ? 100 : 60,
                mb: 2,
              }}
            >
              <Stack>
                <Typography
                  variant={isMobile ? "h3" : "h5"}
                  sx={{
                    fontWeight: 700,
                    color: "#445029",
                  }}
                >
                  Interactive Session Leads
                </Typography>
              </Stack>
            </Box>
            <Container sx={{ mt: 4, mb: 4 }}>
              <Grid container spacing={4} justifyContent="center">
                {workshops[activeWs]?.isls?.map((isl, index) => (
                  <Grid item xs={isMobile ? 6 : 3} key={index}>
                    <Stack spacing={2}>
                      {isl.image && (
                        <Box sx={{ textAlign: "center" }}>
                          <Box
                            component="img"
                            src={isl.image}
                            sx={customStyles.mediaStyles}
                          />
                        </Box>
                      )}
                      <Stack>
                        <Typography
                          onClick={() => handExternalLink(isl?.link)}
                          sx={{
                            fontSize: isMobile ? 30 : 18,
                            color: "#445029",
                            cursor: "pointer",
                          }}
                        >
                          {isl.name}
                        </Typography>
                        {isl.affiliate && (
                          <Typography
                            variant="body2"
                            color="text.secondary"
                            sx={{
                              fontSize: isMobile ? 24 : 12,
                            }}
                          >
                            {isl.affiliate}
                          </Typography>
                        )}
                      </Stack>
                      {isl.bio && (
                        <Box>
                          <Box
                            sx={{
                              height: eisls[index]?.expanded
                                ? "auto"
                                : isl.bio?.length >= 400
                                  ? 180
                                  : "auto",
                              overflow: "hidden",
                              transition: "height 0.3s ease",
                            }}
                          >
                            <Typography variant="body2" color="text.secondary">
                              {isl.bio}
                            </Typography>
                          </Box>
                          {isl.bio?.length >= 400 && (
                            <Box>
                              <Stack
                                alignItems="center"
                                onClick={toggleExpandI}
                                id={`${index}`}
                                direction="row"
                                sx={{
                                  float: "right",
                                  cursor: "pointer",
                                }}
                              >
                                <Typography variant="body2">
                                  {eisls[index]?.expanded
                                    ? "Read less"
                                    : "Read more"}
                                </Typography>
                                <ViewAllIcon
                                  sx={{ fontSize: isMobile ? 25 : 15 }}
                                />
                              </Stack>
                            </Box>
                          )}
                        </Box>
                      )}
                    </Stack>
                  </Grid>
                ))}
              </Grid>
            </Container>
          </>
        )}
        {activeWs === "taid2025" && (
          <>
          <Box
          sx={{
            backgroundColor: "#e6ecda",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: isMobile ? 100 : 60,
            mb: 2,
          }}
        >
          <Stack>
            <Typography
              variant={isMobile ? "h3" : "h5"}
              sx={{
                fontWeight: 700,
                color: "#445029",
              }}
            >
              Accepted Papers
            </Typography>
          </Stack>
        </Box>
        <Container sx={{ mt: 4, mb: 4 }}>
          <Stack spacing={2}>
            {papers.map((paper, index) => (
              <Stack key={index}>
                <Typography
                  sx={{
                    color: "#90a959",
                    fontSize: isMobile ? 18 : 16,
                  }}
                >
                  {paper.title}
                </Typography>
                <Typography
                  sx={{
                    fontSize: isMobile ? 16 : 14,
                    fontStyle: "italic",
                  }}
                >
                  {paper.author}
                </Typography>
              </Stack>
            ))}
          </Stack>
        </Container>
          </>
        )}
        <Box
          sx={{
            backgroundColor: "#e6ecda",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: isMobile ? 100 : 60,
            mb: 2,
          }}
        >
          <Stack>
            <Typography
              variant={isMobile ? "h3" : "h5"}
              sx={{
                fontWeight: 700,
                color: "#445029",
              }}
            >
              Code of Conduct
            </Typography>
          </Stack>
        </Box>
        <Container sx={{ mt: 4, mb: 4 }}>
          <Typography sx={{ fontSize: 15 }}>
            This workshop follows{" "}
            <span
              onClick={() => handExternalLink(workshops[activeWs]?.coc.source)}
              style={customStyles.externalLinks}
            >
              Deep Learning Indaba Code of Conduct
            </span>
            .
          </Typography>
        </Container>
      </Box>
      <Footer />
    </React.Fragment>
  );
};

export default Workshop;

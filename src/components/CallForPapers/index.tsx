import React, { useState, useEffect, useRef } from "react";
import SquareIcon from "@mui/icons-material/Square";
import { Box, Stack, Typography, Container, Grid } from "@mui/material";

import { workshops, isMobile, activeCfp } from "src/helpers";
import { customStyles } from "src/styles";

const CallForPapers = () => {
  const mainContentRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(activeCfp);

  const wsyears = [activeCfp];

  useEffect(() => {
    if (mainContentRef.current) {
      mainContentRef.current.scrollIntoView({
        block: "start",
        behavior: "smooth",
      });
    }
  }, []);

  const handleChangeActive = (e) => {
    const id = e.currentTarget.getAttribute("id");
    if (id) {
      setActive(id);
    }
  };

  const handExternalLink = (link) => {
    if (link) {
      window.open(link, "_blunk");
    }
  };

  const cfp = workshops[`taid${active}`]?.cfp;

  return (
    <React.Fragment>
      <Box
        sx={{
          overflowY: "auto",
          mb: 6,
        }}
      >
        <Box
          sx={{
            backgroundColor: "#e6ecda",
            pt: 2,
            mt: isMobile ? 10 : -2,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: 350,
          }}
        >
          <Stack>
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
              sx={{ textAlign: "center" }}
            >
              @ {workshops[`taid${active}`].location}
            </Typography>
            {workshops[`taid${active}`].datetime && (
              <Typography
                sx={{
                  textAlign: "center",
                  color: "#445029",
                  fontSize: isMobile ? 20 : 18,
                }}
              >
                {workshops[`taid${active}`].datetime}
              </Typography>
            )}
          </Stack>
        </Box>
        <Container sx={{ mt: isMobile ? 4 : 2, mb: isMobile ? 8 : 2 }}>
          <Stack direction="row" alignItems="center" spacing={2} mt={2}>
            {wsyears.map((wssy) => (
              <Box
                key={wssy}
                onClick={handleChangeActive}
                id={wssy}
                sx={{
                  border: "2px solid #445029",
                  backgroundColor: active === wssy ? "#445029" : "white",
                  color: active === wssy ? "white" : "#445029",
                  p: 1,
                  width: isMobile ? 100 : 50,
                  textAlign: "center",
                  cursor: "pointer",
                  "&:hover": {
                    backgroundColor: "#445029",
                    color: "white",
                  },
                }}
              >
                <Typography
                  sx={{
                    fontSize: isMobile ? 24 : 16,
                  }}
                >
                  {wssy}
                </Typography>
              </Box>
            ))}
          </Stack>
          {!Object.keys(cfp)?.length && (
            <Box mt={2}>
              <Typography>
                The final call for papers will be published soon
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
              my: 2,
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
                Call for Papers
              </Typography>
            </Stack>
          </Box>
          <Container sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={2}>
              <Grid item xs={isMobile ? 12 : 8}>
                <Stack spacing={2}>
                  <Typography
                    variant={isMobile ? "h4" : "h6"}
                    sx={{
                      fontWeight: 500,
                    }}
                  >
                    {cfp?.title}
                  </Typography>
                  {cfp?.description && (
                    <Typography sx={{ fontSize: isMobile ? 30 : 14 }}>
                      {cfp?.description}
                    </Typography>
                  )}
                  <Typography sx={{ fontSize: 15 }}>
                    We welcome submissions across disciplines, including
                    computer science, law, social sciences, ethics, and policy.
                    Interdisciplinary approaches are highly encouraged. General
                    areas of interest include but are not limited to:
                  </Typography>
                  <Stack sx={{ pl: 5 }} spacing={1}>
                    {cfp?.topics?.map((tps, index) => (
                      <Stack
                        direction="row"
                        alignItems="center"
                        spacing={1}
                        key={index}
                      >
                        <SquareIcon sx={{ fontSize: isMobile ? 18 : 9 }} />
                        <Typography sx={{ fontSize: isMobile ? 30 : 14 }}>
                          <span style={{ fontWeight: 700 }}>{tps.title}</span>{" "}
                          {tps.description}
                        </Typography>
                      </Stack>
                    ))}
                  </Stack>
                  {cfp?.additionalinfo && (
                    <Typography sx={{ fontSize: 15 }}>
                      {cfp?.additionalinfo}
                    </Typography>
                  )}
                  {cfp?.topicofsub && (
                    <Box>
                      <Typography
                        sx={{ fontSize: isMobile ? 33 : 16, fontWeight: 700 }}
                      >
                        Topic of the submission
                      </Typography>
                      <Typography sx={{ fontSize: isMobile ? 30 : 14 }}>
                        {cfp?.topicofsub}
                      </Typography>
                    </Box>
                  )}
                  <Box>
                    <Typography
                      sx={{ fontSize: isMobile ? 33 : 16, fontWeight: 700 }}
                    >
                      Anonymization
                    </Typography>
                    <Typography sx={{ fontSize: isMobile ? 30 : 14 }}>
                      {cfp?.anonymization}
                    </Typography>
                  </Box>
                  <Box>
                    <Typography
                      sx={{ fontSize: isMobile ? 33 : 16, fontWeight: 700 }}
                    >
                      Important Prerequisite
                    </Typography>
                    <Typography sx={{ fontSize: isMobile ? 30 : 14 }}>
                      Attendance at indaba requires a
                      <span
                        onClick={() =>
                          handExternalLink(
                            `https://deeplearningindaba.com/${active}/`,
                          )
                        }
                        style={customStyles.externalLinks}
                      >
                        {" "}
                        pre-application
                      </span>
                      . To submit a paper to our workshop, at least one author
                      must be accepted at Indaba at the time of the workshop to
                      be able to present the work on August 07th.
                    </Typography>
                  </Box>
                  <Stack>
                    <Typography
                      sx={{ fontSize: isMobile ? 33 : 16, fontWeight: 700 }}
                    >
                      Contact:
                    </Typography>
                    <Typography sx={{ fontSize: isMobile ? 30 : 14 }}>
                      For questions, please contact{" "}
                      <span style={customStyles.externalLinks}>
                        trustaideepindaba@gmail.com
                      </span>
                    </Typography>
                  </Stack>
                </Stack>
              </Grid>
              <Grid item xs={isMobile ? 12 : 4}>
                <Stack spacing={2}>
                  <Typography
                    variant={isMobile ? "h4" : "h6"}
                    sx={{
                      fontWeight: 500,
                    }}
                  >
                    Submissions & Dates
                  </Typography>
                  {cfp?.submittype === "cmt" && (
                    <Box>
                      <Typography
                        sx={{ fontSize: isMobile ? 33 : 16, fontWeight: 700 }}
                      >
                        Submission instructions
                      </Typography>
                      <Typography sx={{ fontSize: isMobile ? 30 : 14 }}>
                        {cfp?.submitinstruction}{" "}
                        <span
                          onClick={() =>
                            handExternalLink(cfp?.submitinstructionlink)
                          }
                          style={customStyles.externalLinks}
                        >
                          here
                        </span>
                        .
                      </Typography>
                    </Box>
                  )}
                  <Typography sx={{ fontSize: isMobile ? 30 : 14 }}>
                    If you’re interested in presenting your work at TrustAI
                    Workshop, please submit your extended abstract{" "}
                    <span
                      onClick={() => handExternalLink(cfp?.submissionlink)}
                      style={customStyles.externalLinks}
                    >
                      here
                    </span>{" "}
                    before{" "}
                    {cfp?.old_sub_date && (
                      <span
                        style={{
                          color: "black",
                          textDecoration: "line-through",
                        }}
                      >
                        {`${cfp?.old_sub_date} `}
                      </span>
                    )}
                    <span style={{ color: "red" }}>
                      {cfp?.abstractsubdate}.
                    </span>
                  </Typography>
                  <Box>
                    <Typography
                      sx={{ fontSize: isMobile ? 33 : 16, fontWeight: 700 }}
                    >
                      Formatting and Length
                    </Typography>
                    <Typography sx={{ fontSize: isMobile ? 30 : 14 }}>
                      {cfp?.formatting}{" "}
                      <span
                        onClick={() => handExternalLink(cfp?.formatlink)}
                        style={customStyles.externalLinks}
                      >
                        {cfp?.formatname}
                      </span>
                    </Typography>
                  </Box>
                  {cfp?.dualsubpolicy && (
                    <Box>
                      <Typography
                        sx={{ fontSize: isMobile ? 33 : 16, fontWeight: 700 }}
                      >
                        No dual submission policy
                      </Typography>
                      <Typography sx={{ fontSize: isMobile ? 30 : 14 }}>
                        {cfp?.dualsubpolicy}
                      </Typography>
                    </Box>
                  )}
                  <Box>
                    <Stack direction="row" alignItems="center" spacing={1}>
                      <Typography
                        sx={{
                          fontSize: isMobile ? 30 : 14,
                          fontWeight: 700,
                          color: "black",
                        }}
                      >
                        Submission Deadline:
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: isMobile ? 30 : 14,
                        }}
                      >
                        {cfp?.old_sub_date ? (
                          <>
                            <span
                              style={{
                                color: "black",
                                textDecoration: "line-through",
                              }}
                            >
                              {`${cfp?.old_sub_date} `}
                            </span>
                            <span style={{ color: "red" }}>
                              {cfp?.abstractsubdate}
                            </span>
                          </>
                        ) : (
                          <span style={{ color: "red" }}>
                            {cfp?.abstractsubdate}
                          </span>
                        )}
                        .
                      </Typography>
                    </Stack>
                    {cfp?.notificationdate && (
                      <Stack direction="row" alignItems="center" spacing={1}>
                        <Typography
                          sx={{
                            fontSize: isMobile ? 30 : 14,
                            fontWeight: 700,
                            color: "black",
                          }}
                        >
                          Notifications:
                        </Typography>
                        <Typography
                          sx={{
                            fontSize: isMobile ? 30 : 14,
                            color: "#90a959",
                          }}
                        >
                          {cfp?.old_notification_date ? (
                            <>
                              <span
                                style={{
                                  color: "black",
                                  textDecoration: "line-through",
                                }}
                              >
                                {`${cfp?.old_notification_date} `}
                              </span>
                              <span style={{ color: "#90a959" }}>
                                {cfp?.notificationdate}
                              </span>
                            </>
                          ) : (
                            <span style={{ color: "#90a959" }}>
                              {cfp?.notificationdate}
                            </span>
                          )}
                        </Typography>
                      </Stack>
                    )}
                    <Stack direction="row" alignItems="center" spacing={1}>
                      <Typography
                        sx={{
                          fontSize: isMobile ? 30 : 14,
                          fontWeight: 700,
                          color: "black",
                        }}
                      >
                        Submission portal:
                      </Typography>
                      <Typography
                        onClick={() => handExternalLink(cfp?.submissionlink)}
                        sx={{
                          ...customStyles.externalLinks,
                          fontSize: isMobile ? 30 : 14,
                        }}
                      >
                        {cfp?.submitname}
                      </Typography>
                    </Stack>
                    {cfp?.submittype === "cmt" && (
                      <Stack direction="row" alignItems="center" spacing={1}>
                        <Typography
                          sx={{
                            fontSize: isMobile ? 30 : 14,
                            fontWeight: 700,
                            color: "black",
                          }}
                        >
                          Microsoft CMT tutorial:
                        </Typography>
                        <Typography
                          onClick={() => handExternalLink(cfp?.tutoriallink)}
                          sx={{
                            ...customStyles.externalLinks,
                            fontSize: isMobile ? 30 : 14,
                          }}
                        >
                          Here
                        </Typography>
                      </Stack>
                    )}
                  </Box>
                  {cfp?.whycmt && (
                    <Box>
                      <Typography
                        sx={{ fontSize: isMobile ? 33 : 16, fontWeight: 700 }}
                      >
                        Acknowledgment
                      </Typography>
                      <Typography sx={{ fontSize: isMobile ? 30 : 14 }}>
                        {cfp?.whycmt}
                      </Typography>
                    </Box>
                  )}
                </Stack>
              </Grid>
            </Grid>
          </Container>
          <Box
            sx={{
              backgroundColor: "#e6ecda",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: isMobile ? 100 : 60,
              my: 2,
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
                Call for Reviewers
              </Typography>
            </Stack>
          </Box>
          {cfp?.call_for_reviewers && (
            <Box>
              <Typography sx={{ fontSize: isMobile ? 30 : 14 }}>
                {`${cfp?.call_for_reviewers} `}
                <span
                  onClick={() =>
                    handExternalLink(
                      "https://docs.google.com/forms/d/e/1FAIpQLScBn1oR-0IjvJi6ymW0ZHcFIN9Y47NMXkHnV0v6Vnxyynwhsg/viewform",
                    )
                  }
                  style={{
                    ...customStyles.externalLinks,
                    fontSize: isMobile ? 30 : 14,
                  }}
                >
                  Self-nominate form
                </span>
              </Typography>
            </Box>
          )}
        </Container>
      </Box>
    </React.Fragment>
  );
};

export default CallForPapers;

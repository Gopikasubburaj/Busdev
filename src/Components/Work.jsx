import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import Image from "../Images/Image.jpg";

function Work() {
  return (
    <Box sx={{ flexGrow: 1, mt: 20 }}>
      <Grid container spacing={2} alignItems="center">
        <Grid item lg={6} md={6} sm={12}>
          <Box sx={{ position: "relative", width: "fit-content", mx: "auto" }}>
            <Box
              sx={{
                backgroundColor: "#F3F5F9",
                width: "650px",
                height: "470px",
                position: "relative",
                zIndex: 1,
              }}
            />

            <Box
              sx={{
                backgroundColor: "#F3F5F9",
                width: "430px",
                height: "150px",
                position: "relative",
                top: "0.5px",
                zIndex: 1,
              }}
            />

            <Box
              sx={{
                backgroundColor: "#0A0A3C",
                width: "170px",
                height: "170px",
                position: "absolute",
                top: "430px",
                left: "0px",
                zIndex: 2,
              }}
            />

            <Box
              sx={{
                backgroundColor: "#375FF5",
                width: "70px",
                height: "80px",
                position: "absolute",
                top: "520px",
                left: "0px",
                zIndex: 3,
              }}
            />

            <Box
              component="img"
              src={Image}
              alt="Person"
              sx={{
                width: "500px",
                height: "450px",
                position: "absolute",
                top: "70px",
                left: "70px",
                zIndex: 4,
              }}
            />
          </Box>
        </Grid>

        <Grid item lg={10} md={6} sm={12}>
          <Box
            sx={{
              width: { xs: "100%", md: "450px" },
              ml: 23,
              mb: 35,
              position: "relative",
            }}
          >
            <Typography variant="overline" color="primary">
              ________
              <br />
              WORK WITH US
            </Typography>
            <Typography variant="h4" sx={{ fontWeight: "bold", mt: 2 }}>
              Driving Your Success Through Innovation and Expertise
            </Typography>
            <Typography
              
              sx={{ color: "text.secondary", mt: 2, width: "450px" }}
            >
              Partnering with us means unlocking unparalleled technological
              advancements tailored to fuel your growth. At Busdev, we're
              dedicated to being your strategic partner in success.
            </Typography>
            <Typography variant="h6" sx={{ fontStyle: "italic", mt: 2 ,width:"500px"}}>
              "Working with Busdev has been a game-changer for our business.
              Their solutions have significantly boosted our efficiency."
            </Typography>
            <Typography  sx={{ color: "text.secondary", mt: 1 }}>
              Michael Smith, CTO at LMN Enterprises.
            </Typography>

            <Box sx={{ mt: 2 }}>
              <Button
                variant="contained"
                sx={{
                  bgcolor: "#375FF5",
                  borderRadius: 0,
                  boxShadow: 0,
                  textTransform: "none",
                }}
              >
                About Us
              </Button>
              <Button
                variant="outlined"
                sx={{
                  ml: 2,
                  color: "black",
                  border: "1px solid grey",
                  borderRadius: 0,
                  textTransform: "none",
                }}
              >
                Mission & Values
              </Button>
            </Box>

            <Box
              sx={{
                position: "absolute",
                left: 530,
                top: 570,
                width:100,
              }}
            >
              <Box
                sx={{
                  width: "150px",
                  height: "130px",
                  bgcolor: "#375FF5",
                  position: "absolute"
                }}
              />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Work;
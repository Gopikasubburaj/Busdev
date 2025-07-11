import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import Image1 from "../Images/5.jpg";

function About () {
  return (
    <Box sx={{ flexGrow: 2 }}>
      <Grid container spacing={2}>
        <Grid size={{ lg: 6 }}>
          <Box sx={{ display: "flex", justifyContent: "center", mt: 20 }}>
            <Box sx={{ width: "400px" }}>
              <Typography variant="overline" color="primary">
                ________
                <br />
                MODERN BUSINESS
              </Typography>
              <Typography variant="h4" sx={{ fontWeight: "bold", mt: 5 }}>
                We are at the forefront of technological innovation.
              </Typography>

              <Box sx={{ width: "430px" }}>
                <Typography sx={{ color: "text.secondary", mb: 2, mt: 3 }}>
                  our journey began over a decade ago,driven by a passion for
                  delivering cutting-edge solution to bussiness <br />
                  worlwide
                </Typography>

                <Box sx={{ display: "flex", gap: 5, mt: 7 }}>
                  <Box>
                    <Typography variant="h4" sx={{ fontWeight: "bold" }}>
                      15+
                    </Typography>
                    <Typography>Years of experience</Typography>
                  </Box>

                  <Box>
                    <Typography variant="h4" sx={{ fontWeight: "bold" }}>
                      5000+
                    </Typography>
                    <Typography>Satisfied Clients</Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Grid>

        <Box
          sx={{ position: "relative", width: "fit-content", height: "auto",ml:2 }}
        >
          <Box
            sx={{
              backgroundColor: "#375FF5",
              width: "170px",
              height: "170px",
              position: "absolute",
              top: 630,
              left: 60,
              zIndex: 1,
            }}
          />

          <Box
            sx={{
              backgroundColor: "#0F1248",
              width: "80px",
              height: "80px",
              position: "absolute",
              top: 720,
              left: "60px",
              zIndex: 2,
            }}
          />

          <Box
            component="img"
            src={Image1}
            alt="Person"
            sx={{
              height: "450px",
              width:"450px",
              position: "relative",
              mt: 34,
              zIndex: 3,
              ml: 17.5,
            }}
          />
        </Box>
      </Grid>
    </Box>
  );
}


 export default About;
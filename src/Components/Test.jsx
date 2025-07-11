import styled from "@emotion/styled";
import { Avatar, Box, Grid, Slider, Typography, IconButton } from "@mui/material";
import React from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const CustomSlider = styled(Slider)({
  color: '#2348DC',
  height: 3,
  borderRadius: 0,
  '& .MuiSlider-thumb': {
    display: 'none',
  },
  '& .MuiSlider-rail': {
    opacity: 0.2,
    backgroundColor: 'grey',
  },
});

function Test() {
  return (
    <Box sx={{ mt: 15, ml: 13 }}>
      <Grid container spacing={3} alignItems="center">
        <Grid item lg={6} md={6} sm={12}>
          <Box sx={{ position: "relative", width: "fit-content", mx: "auto" }}>
            <Typography variant="overline" color="primary">
              ________
              <br />
              TESTIMONIALS
            </Typography>
            <Typography
              variant="h3"
              sx={{ fontWeight: "bold", mt: 2, width: "500px" }}
            >
              Client Success Stories: What Our Partners Say
            </Typography>
          </Box>
        </Grid>

        <Grid item lg={6} md={6} sm={12}>
          <Box
            sx={{
              width: { xs: "100%", md: "450px" },
              ml: 15,
              mt: 15,
              position: "relative",
            }}
          >
            <Typography  variant="h6" sx={{ color: "text.secondary", width: "570px" ,ml:5}}>
              Discover the impact Busdev has made on businesses worldwide
              through firsthand accounts from our valued partners. Explore how
              our innovative solutions and unwavering commitment to excellence.
            </Typography>
          </Box>
        </Grid>
      </Grid>

       {/* Cards container  */}
      <Box
        sx={{
          display: "flex",
          overflow: "hidden",
          mt: 8,
          pl: 0,
          position: "relative", // Important for positioning arrow
        }}
      >
        {/* Wrapper for all cards together */}
        <Box
          sx={{
            display: "flex",
            gap: 3,
            width: "calc(100% + 250px)", // Adjust to control half card showing
          }}
        >
          {/* First card */}
          <Box
            sx={{
              width: "500px",
              height: "220px",
              p: 3,
              bgcolor: "#0F1248",
              color: "white",
            }}
          >
            <Typography sx={{ color: "white" }}>
              Busdev's proactive approach and innovative solutions have been
              instrumental in transforming our digital landscape. Their
              adaptability and professionalism make them an invaluable asset to
              our company.
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", ml: 1, mt: 5 }}>
              <Avatar
                alt=""
                src="https://randomuser.me/api/portraits/men/32.jpg"
                sx={{ width: 40, height: 40 }}
              />
              <Box sx={{ ml: 2 }}>
                <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                  Darvid Smith
                </Typography>
                <Typography sx={{ color: "grey", fontSize: "13px" }}>
                  CEO at XYZ Innovations
                </Typography>
              </Box>
            </Box>
          </Box>

          {/* Second card */}
          <Box
            sx={{
              width: "500px",
              height: "220px",
              p: 3,
              bgcolor: "#F3F5F9",
              color: "black",
            }}
          >
            <Typography sx={{ color: "black" }}>
              Working with Busdev has been a game-changer for us. Their seamless
              integration of technology and business strategies has
              significantly increased our efficiency and competitive edge in the
              market.
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", ml: 1, mt: 5 }}>
              <Avatar
                alt=""
                src="https://i.pravatar.cc/150?img=32.jpg"
                sx={{ width: 40, height: 40 }}
              />
              <Box sx={{ ml: 2 }}>
                <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                  Emily Davis
                </Typography>
                <Typography sx={{ color: "grey", fontSize: "13px" }}>
                  CTO at InnovateTech Solutions.
                </Typography>
              </Box>
            </Box>
          </Box>

          {/* Third card */}
          <Box
            sx={{
              width: "400px",
              height: "220px",
              p: 3,
              bgcolor: "#F3F5F9",
              color: "black",
            }}
          >
            <Typography sx={{ color: "black" }}>
              Busdev's proactive approach and innovative solutions have been
              instrumental in transforming our digital landscape. Their
              adaptability and professionalism make them an invaluable asset to
              our company.
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", ml: 1, mt: 5 }}>
              <Avatar
                alt="User"
                src="https://i.pravatar.cc/150?img=12"
                sx={{ width: 40, height: 40 }}
              />
              <Box sx={{ ml: 2 }}>
                <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                  Adhithiyan
                </Typography>
                <Typography sx={{ color: "grey", fontSize: "13px" }}>
                  CEO at ABC Innovations
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>

        {/* Arrow button in center */}
        <IconButton
          sx={{
            position: "absolute",
            left: "84.5%",
            top: "28%",
           
            backgroundColor: "#fff",
            border: "1px solidrgb(98, 97, 97)",
            boxShadow: 2,
           
            
          }}
        >
          <ArrowForwardIosIcon />
        </IconButton>
      </Box>

      <Box>
        <CustomSlider sx={{ mt: 3 }} defaultValue={15} />
      </Box>
    </Box>
  );
}

export default Test;
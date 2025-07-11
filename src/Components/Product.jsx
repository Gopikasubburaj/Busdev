import {
  Box,
  Button,
  Grid,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import DoneIcon from "@mui/icons-material/Done";
import React from "react";
import Logo from "../Images/logo.jpg";

function Products() {
  return (
    <Box sx={{ p: 5 }}>
      <Box sx={{ width: { xs: "100%", md: "500px" }, ml: { md: 10 }, mt: 20 }}>
        <Typography variant="overline" color="primary">
          ________ <br />
          Our Products
        </Typography>
        <Typography variant="h3" sx={{ fontWeight: "bold", mt: 2 }}>
          We spend one-third of our life at work.
        </Typography>
        <Box sx={{ width: { xs: "100%", md: "430px" }, mt: 2 }}>
          <Typography sx={{ color: "text.secondary", mb: 2 }}>
            Our journey began over a decade ago, driven by a passion for
            delivering cutting-edge solutions to businesses worldwide.
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          gap: 3,
          mt: 5,
          ml: 8,
          p: 2,
        }}
      >
        <Grid container sx={{ p: 2 }}>
          <Grid item size={{ lg: 3, md: 4, xs: 12 }}>
            <Box
              sx={{
                p: 4,
                gap:4,
                width: "300px",
                height: "550px",
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                bgcolor: "#F9F9FB",
              }}
            >
              <Box
                sx={{ display: "flex", justifyContent: "flex-start", mb: 2 }}
              >
                <img
                  src={Logo}
                  alt="Platform Logo"
                  style={{ width: "80px", height: "80px" }}
                />
              </Box>
              <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 }}>
                GridSense Analytics Platform
              </Typography>
              <Typography sx={{ color: "text.secondary", mb: 2 }}>
                The GridSense Analytics Platform is a state-of-the-art data
                analysis tool designed to optimize business performance through
                in-depth insights and predictive analytics.
              </Typography>
              <Box>
                <List dense>
                  <ListItem>
                    <DoneIcon color="primary" />
                    <ListItemText primary="Predictive Modeling" />
                  </ListItem>
                  <ListItem>
                    <DoneIcon color="primary" />
                    <ListItemText primary="Real-time Data Visualization" />
                  </ListItem>
                  <ListItem>
                    <DoneIcon color="primary" />
                    <ListItemText primary="Customizable Dashboard" />
                  </ListItem>
                  <ListItem>
                    <DoneIcon color="primary" />
                    <ListItemText primary="AI-Driven Recommendations" />
                  </ListItem>
                </List>
              </Box>
              <Button
                variant="contained"
                color="primary"
                sx={{ mt: 2, textTransform: "none" }}
              >
                Read More
              </Button>
            </Box>
          </Grid>
        </Grid>
        <Grid container sx={{ p: 2 }}>
          <Grid item size={{ lg: 3, md: 4, xs: 12 }}>
            <Box
              sx={{
                p: 4,
                width: '300px',
                height: "550px",
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                bgcolor: "#F9F9FB",
                ml: 6,
              }}
            >
              <Box
                sx={{ display: "flex", justifyContent: "flex-start", mb: 2 }}
              >
                <img
                  src={Logo}
                  alt="Platform Logo"
                  style={{ width: "80px", height: "80px" }}
                />
              </Box>
              <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 ,width:"200px"}}>
                OmniConnect CRM Suite
              </Typography>
              <Typography sx={{ color: "text.secondary", mb: 2 }}>
                OmniConnect CRM Suite is a comphrenhensive Customer relationship
                management tool that stramlines interactions,boosts
                engagement,and enhances customer satisfaction.
              </Typography>
              <List dense>
                <ListItem>
                  <DoneIcon color="primary" />
                  <ListItemText primary="360-Degree Customer View" />
                </ListItem>
                <ListItem>
                  <DoneIcon color="primary" />
                  <ListItemText primary="Automated Workflows" />
                </ListItem>
                <ListItem>
                  <DoneIcon color="primary" />
                  <ListItemText primary="Multi-Channel Integration" />
                </ListItem>
                <ListItem>
                  <DoneIcon color="primary" />
                  <ListItemText primary="Analystics & Reporting" />
                </ListItem>
              </List>
              <Button
                variant="contained"
                color="primary"
                sx={{ mt: 2, textTransform: "none" }}
              >
                Read More
              </Button>
            </Box>
          </Grid>
        </Grid>
        <Grid container sx={{ p: 2 }}>
          <Grid item size={{ lg: 3, md: 4, xs: 12 }}>
            <Box
              sx={{
                p: 4,
                width: "280px",
                height: "550px",
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                bgcolor: "#F9F9FB",
                ml: 5,
              }}
            >
              <Box
                sx={{ display: "flex", justifyContent: "flex-start", mb: 2 }}
              >
                <img
                  src={Logo}
                  alt="Platform Logo"
                  style={{ width: "80px", height: "80px" }}
                />
              </Box>
              <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2,width:"200px" }}>
                CyberGuard Security Suite
              </Typography>
              <Typography sx={{ color: "text.secondary", mb: 2 }}>
                The CyberGuard Security Suite offers robust cybersecurity
                solutions to safeguard your business fro evoloving threats and
                vulnerabilities
              </Typography>
              <br />
              <List dense>
                <ListItem>
                  <DoneIcon color="primary" />
                  <ListItemText primary="Threat Detection & Response " />
                </ListItem>
                <ListItem>
                  <DoneIcon color="primary" />
                  <ListItemText primary="Continuous Monitoring" />
                </ListItem>
                <ListItem>
                  <DoneIcon color="primary" />
                  <ListItemText primary="Security Training & Awareness" />
                </ListItem>
                <ListItem>
                  <DoneIcon color="primary" />
                  <ListItemText primary="Customizable Security Policies" />
                </ListItem>
              </List>
              <Button
                variant="contained"
                color="primary"
                sx={{ mt: 2, textTransform: "none" }}
              >
                Read More
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default Products;
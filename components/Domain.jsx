import React, { useContext, useState } from "react";
import {
  Button,
  Grid,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import { Box, Container } from "@mui/system";
import PersonIcon from "@mui/icons-material/Person";
import MailIcon from "@mui/icons-material/Mail";
import LanguageIcon from "@mui/icons-material/Language";
import CallIcon from "@mui/icons-material/Call";
import AttachMoneySharpIcon from "@mui/icons-material/AttachMoneySharp";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { ColorModeContext } from "../pages";

export default function Domain() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [offer, setOffer] = useState("");
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);
  const handleSubmit = (event) => {
    console.log("Name: ", name);
    if(name === '' || email === '' || offer === '') {
      alert('Please fill all the fields')
      return
    }else{
    event.preventDefault();
    setName("");
    setEmail("");
    setOffer("");
    window.location = 'mailto:sales@popcorn.com.bd?subject=Domain Offer&body=Name: '+name+'%0D%0AEmail: '+email+'%0D%0AOffer: '+offer
    }
  };
  return (
    <>
      <Box sx={{bgcolor:'background.default', color:'text.primary', height:{lg:'100vh', xs:'100%'}}}>
        <IconButton onClick={colorMode.toggleColorMode} color="inherit">
          {theme.palette.mode === "dark" ? (
            <Brightness7Icon sx={{color:'text.primary'}}/>
          ) : (
            <Brightness4Icon />
          )}
        </IconButton>
        <Container sx={{ mt: {lg:"10em", xs:'2em'} }}>
          <Grid container>
            <Grid item lg={8} xs={12}>
              <Box>
                <Typography
                  variant="h3"
                  sx={{
                    bgcolor: `${theme.palette.mode === "dark" ? "#ffa726" : "#d32f2f"}`,
                    display: "inline",
                    color: `${theme.palette.mode === "dark" ? "#212121" : "#fff"}`,
                    p: "0.2em 0.5em",
                    fontWeight: "bold",
                    borderRadius: "3px",
                  }}
                >
                  For Sale!
                </Typography>
                <Typography
                  variant="h3"
                  sx={{ fontWeight: "bold", my: "0.5em", color:'text.primary' }}
                >
                  MyDomain.com
                </Typography>
                <Typography variant="h5" sx={{ display: "inline", color:'text.primary'}}>
                  Estimated value
                </Typography>
                <Typography
                  variant="h5"
                  sx={{
                    bgcolor: "#388e3c",
                    display: "inline",
                    color: "#fff",
                    p: "0.2em 0.5em",
                    fontWeight: "bold",
                    borderRadius: "3px",
                    mx: "0.5em",
                  }}
                >
                  $650
                </Typography>
                <Typography variant="body1" sx={{ my: "1em", color:'text.primary' }}>
                  12 years old premium domain name available for instantly
                  punches. Invest in a premium domain name to launch your brand{" "}
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: {lg:"80%", xs:'100%'},
                    flexWrap: "wrap",
                    gap: {lg:"0", xs:'1em'},
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <CallIcon sx={{color:'text.primary'}}/>
                    <Typography variant="body1" sx={{ display: "inline",color:'text.primary' }}>
                      (+91) 11-2142-4568
                    </Typography>
                  </Box>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <MailIcon sx={{color:'text.primary'}}/>
                    <Typography variant="body1" sx={{ display: "inline",color:'text.primary' }}>
                      info@mydomain.com
                    </Typography>
                  </Box>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <LanguageIcon sx={{color:'text.primary'}}/>
                    <Typography variant="body1" sx={{ display: "inline",color:'text.primary' }}>
                      More Domain
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>
            <Grid item lg={4} xs={12}>
              <Box sx={{ border: `${theme.palette.mode === 'dark' ? 'none' : "1px solid lightgray"}`, p: "1em 1.2em", bgcolor:`${theme.palette.mode === 'dark' ? '#55536e3b' : 'none'}`, my:{lg:'0', xs:'3em'}, }}>
                <Box sx={{ textAlign: "center", mb: "1.5em" }}>
                  <Typography variant="h6" sx={{ fontWeight: "bold",color:'text.primary' }}>
                    Make Your Offer
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color:'text.primary', my: "1em" }}
                  >
                    Please fill out the form below so that the seller receive
                    your offer
                  </Typography>
                </Box>
                <Box
                  sx={{ gap: "1em", display: "flex", flexDirection: "column" }}
                >
                  <TextField
                    fullWidth
                    size="small"
                    placeholder="Enter Your Name"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <PersonIcon />
                        </InputAdornment>
                      ),
                    }}
                  />
                  <TextField
                    fullWidth
                    placeholder="Enter Your Email"
                    size="small"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <MailIcon />
                        </InputAdornment>
                      ),
                    }}
                  />
                  <TextField
                    fullWidth
                    placeholder="Enter Your Offer"
                    size="small"
                    onChange={(e) => setOffer(e.target.value)}
                    value={offer}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <AttachMoneySharpIcon />
                        </InputAdornment>
                      ),
                    }}
                  />
                  <Button
                    variant="contained"
                    fullWidth
                    sx={{ bgcolor: `${theme.palette.mode === "dark" ? "#ffa726" : null}`, textTransform:'capitalize' }}
                    onClick={handleSubmit}
                  >
                    Send my offer
                  </Button>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}

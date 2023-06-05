import { Box, Button, Card, CardActions, CardContent, CardMedia, Container, Grid, Stack, Typography } from "@mui/material"
import React from "react";


const people = [
    { text: "Haagse Hogeschool (Design Engineering and Process & Food Technology)", name: "Hilde Wijngaard", image: "/hilde.jfif" },
    { text: "Haagse Hogeschool (Technische Natuurkunde)", name: "Jeroen Oostinga", image: "/jeroen.jfif" },
    { text: "Leidse Instrumentmakers School", name: "Gunter Helms", image: "/gunter.jpg" },
    { text: "Haagse Hogeschool (Technische Wiskunde)", name: "Ruud Vermeij", image: "/ruud.jfif" },
    { text: "Universiteit Leiden", name: "Peter Denteneer", image: "/peter.jpg" },
    { text: "Haagse Hogeschool (Technische Natuurkunde)", name: "Marijn Versteegh", image: "/marijn.jfif" },
    { text: "Haagse Hogeschool (IT)", name: "Pascal van den Bosch", image: "/pascal.jfif" },
    { text: "Haagse Hogeschool (Technische Natuurkunde)", name: "Lodewijk Hendrik Arntzen", image: "/lodewijk.jfif" },
  ];
  export function Contact() {
    return (
      
       
        <main>
          {/* Hero unit */}
          <Box
            sx={{
              bgcolor: 'background.paper',
              pt: 8,
              pb: 6,
            }}
          >
            <Container maxWidth="sm">
              <Typography
                component="h1"
                variant="h2"
                align="center"
                color="text.primary"
                gutterBottom
              >
                Contact
              </Typography>
              <Typography variant="h5" align="center" color="text.secondary" paragraph>
                De TLC Delft-Leiden bestaat uit een aantal docenten van de Haagse Hogeschool, de Leidse Instrumentmakers School, en de Universiteit Leiden. 
              </Typography>
              <Stack
                sx={{ pt: 4 }}
                direction="row"
                spacing={2}
                justifyContent="center"
              >
                <Button variant="contained">Mailen</Button>
                {/* <Button variant="outlined">Secondary action</Button> */}
              </Stack>
            </Container>
          </Box>
          <Container sx={{ py: 8 }} maxWidth="md">
            {/* End hero unit */}
            <Grid container spacing={4}>
              {people.map((person) => (
                <Grid item key={person.name} xs={12} sm={6} md={4}>
                  <Card
                    sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                  >
                    <CardMedia
                      component="div"
                      sx={{
                        // 16:9
                        pt: '56.25%',
                        "background-position": "50% 40%"
                      }}
                      image={person.image}
                    />
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography gutterBottom variant="h5" component="h2">
                        {person.name}
                      </Typography>
                      <Typography>
                        {person.text}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small">View</Button>
                      <Button size="small">Edit</Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        </main>
        
    );
  }
  
  export default Contact;
  
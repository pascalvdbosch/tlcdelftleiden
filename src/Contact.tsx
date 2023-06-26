import { Box, Button, Card, CardActions, CardContent, CardMedia, Container, Grid, Stack, Typography } from "@mui/material"
import React from "react";


const people = [
    { li: "https://nl.linkedin.com/in/hilde-wijngaard", text: "Haagse Hogeschool (Process & Food Technology)", name: "Hilde Wijngaard", image: "/hilde2.png" },
    { li: "https://nl.linkedin.com/in/jboostinga", text: "Haagse Hogeschool (Technische Natuurkunde)", name: "Jeroen Oostinga", image: "/jeroen.jfif" },
    { li: "", text: "Leidse Instrumentmakers School", name: "Gunter Helms", image: "/gunter.jpg" },
    { li: "https://nl.linkedin.com/in/ruudvermeij", text: "Haagse Hogeschool (Technische Wiskunde)", name: "Ruud Vermeij", image: "/ruud.jfif" },
    { li: "https://nl.linkedin.com/in/peter-denteneer-99215611b", text: "Universiteit Leiden", name: "Peter Denteneer", image: "/peter.jpg" },
    { li: "https://www.linkedin.com/in/marijn-versteegh-95202918", text: "Haagse Hogeschool (Technische Natuurkunde)", name: "Marijn Versteegh", image: "/marijn.jfif" },
    { li: "", text: "Haagse Hogeschool (IT)", name: "Pascal van den Bosch", image: "/pascal.jfif" },
    { li: "https://nl.linkedin.com/in/lodewijk-arntzen-0b224632", text: "Haagse Hogeschool (Technische Natuurkunde)", name: "Lodewijk Hendrik Arntzen", image: "/lodewijk.jfif" },
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
                      {
                        (person.li !== "") ? 
                          <Button size="small" href={person.li}>LinkedIn</Button>
                        : null
                      }
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
  
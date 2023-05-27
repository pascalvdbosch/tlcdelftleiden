import React from "react";

const people = [
  { name: "Hilde Wijngaard", image: "/hilde.jfif" },
  { name: "Jeroen Oostinga", image: "/jeroen.jfif" },
  { name: "Gunter Helms", image: "/gunter.jpg" },
  { name: "Ruud Vermeij", image: "/ruud.jfif" },
  { name: "Peter Denteneer", image: "/peter.jpg" },
  { name: "Marijn Versteegh", image: "/marijn.jfif" },
  { name: "Pascal van den Bosch", image: "/pascal.jfif" },
  { name: "Lodewijk Hendrik Arntzen", image: "/lodewijk.jfif" },
];

function App() {
  return (
    <div>
      Er wordt gewerkt aan deze website.
      <br />
      De volgende mensen werken bij het TLC Delft Leiden:
      <br />
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {people.map((person, index) => (
          <Grid item xs={2} sm={4} md={4} key={index}>
            <Item>
              <Image src={person.image}></Image>
            </Item>
          </Grid>
        ))}
      </Grid>
      <ul></ul>
    </div>
  );
}

export default App;

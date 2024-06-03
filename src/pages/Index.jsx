import { useEffect } from "react";
import { Container, Text, VStack, Box } from "@chakra-ui/react";
import { FaBicycle } from "react-icons/fa";

const Index = () => {
  useEffect(() => {
    const L = require("leaflet");

    const map = L.map("map").setView([59.3293, 18.0686], 13);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    const bikePumpStations = [
      { lat: 59.33258, lng: 18.0649, name: "Pump Station 1" },
      { lat: 59.3293, lng: 18.0686, name: "Pump Station 2" },
      { lat: 59.325, lng: 18.07, name: "Pump Station 3" },
    ];

    bikePumpStations.forEach((station) => {
      L.marker([station.lat, station.lng]).addTo(map).bindPopup(`<b>${station.name}</b>`);
    });
  }, []);

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4} width="100%">
        <Text fontSize="2xl">Bike Pump Stations in Stockholm</Text>
        <Box id="map" width="100%" height="500px" />
      </VStack>
    </Container>
  );
};

export default Index;

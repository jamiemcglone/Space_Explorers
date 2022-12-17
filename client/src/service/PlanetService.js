const baseURL = 'http://localhost:9000/api/planets/';

const PlanetService = {
    getPlanets() {
        return fetch(baseURL)
        .then((res) => res.json());
    },
};

export default PlanetService;

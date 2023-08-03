const container = document.querySelector(".container");
const peopleEl = document.querySelector(".people");
const prevPageBtn = document.querySelector(".prev-page");
const nextPageBtn = document.querySelector(".next-page");
const planetsEl = document.querySelector(".planets");
const vehiclesEl = document.querySelector(".vehicles");
const paginationPageEl = document.querySelector(".pagin-page");
let currentPage = 1;

const totalPages = 3;
// URL для отримуємо дані
const URLS = {
  people: "https://swapi.dev/api/people/",
  planets: "https://swapi.dev/api/planets/",
  vehicles: "https://swapi.dev/api/vehicles/",
};

// People
function fetchPeople(page) {
  fetch(`https://swapi.dev/api/people/?page=${page}`)
    .then((response) => response.json())
    .then((data) => {
      const peopleList = data.results;
      const peopleHTML = peopleList
        .map(
          (person) => `
        <div class="card" style="width: 18rem; gap: 5px;">
          <div class="card-body">
            <h5 class="card-people">${person.name}</h5>
            <h6 class="card-subtitle mb-2 text-muted">Gender: ${person.gender}</h6>
            <p class="card-text">Birth Year: ${person.birth_year}</p>
          </div>
        </div>
      `
        )
        .join("");
      peopleEl.innerHTML = peopleHTML;
      peopleEl.style.display = "block";
      planetsEl.style.display = "none";
      paginationPageEl.style.display = "block";
      vehiclesEl.style.display = "none";
    })
    .catch((error) => console.error(error));
}

// виводимо Person
const btnPerson = document.querySelector(".nav-link.person");
btnPerson.addEventListener("click", (e) => {
  currentPage = 1;
  fetchPeople(currentPage);
});
const pageLinks = document.querySelectorAll(".page-link[data-page]");
pageLinks.forEach((link) => {
  link.addEventListener("click", () => {
    currentPage = parseInt(link.dataset.page);
    fetchPeople(currentPage);
  });
});
//PageBtn-> persons >>
prevPageBtn.addEventListener("click", () => {
  if (currentPage > 1) {
    currentPage--;
    fetchPeople(currentPage);
  }
});
// <<
nextPageBtn.addEventListener("click", () => {
  if (currentPage < totalPages) {
    currentPage++;
    fetchPeople(currentPage);
  }
});
// виведимо Planet
function fetchPlanets(page) {
  fetch(`https://swapi.dev/api/planets/?page=${page}`)
    .then((response) => response.json())
    .then((data) => {
      const planetsList = data.results;
      const planetsHTML = planetsList
        .map(
          (planet) => `
          <div class="card" style="width: 18rem;">
            <div class="card-body">
              <h5 class="card-planet">${planet.name}</h5>
              <h6 class="card-subtitle mb-2 text-muted">Diameter: ${planet.diameter}</h6>
              <p class="card-text">Climate: ${planet.climate}</p>
            </div>
          </div>
        `
        )
        .join("");

      planetsEl.innerHTML = planetsHTML;
      planetsEl.style.display = "block";
      peopleEl.style.display = "none";
      paginationPageEl.style.display = "block";
      vehiclesEl.style.display = "none";
    })
    .catch((error) => console.error(error));
}

// виводимо Planet
const btnPlanet = document.querySelector(".nav-link.planet");
btnPlanet.addEventListener("click", (e) => {
  currentPage = 1;
  fetchPlanets(currentPage);
});
const pageLinksPlanet = document.querySelectorAll(".page-link[data-page]");
pageLinksPlanet.forEach((link) => {
  link.addEventListener("click", () => {
    currentPage = parseInt(link.dataset.page);
    fetchPlanets(currentPage);
  });
});
// PageBtn >>
prevPageBtn.addEventListener("click", () => {
  if (currentPage > 1) {
    currentPage--;
    fetchPlanets(currentPage);
  }
});
//
nextPageBtn.addEventListener("click", () => {
  if (currentPage < totalPages) {
    currentPage++;
    fetchPlanets(currentPage);
  }
});
//виведимо Vehicles:
function fetchVehicles(page) {
  fetch(`https://swapi.dev/api/vehicles/?page=${page}`)
    .then((response) => response.json())
    .then((data) => {
      const vehiclesList = data.results;
      const vehiclesHTML = vehiclesList
        .map(
          (vehicles) => `
            <div class="card" style="width: 18rem;">
              <div class="card-body">
                <h5 class="card-vehicles">${vehicles.name}</h5>
                <h6 class="card-subtitle mb-2 text-muted">Model: ${vehicles.model}</h6>
                <p class="card-text">Manufacturer: ${vehicles.manufacturer}</p>
              </div>
            </div>
          `
        )
        .join("");

      vehiclesEl.innerHTML = vehiclesHTML;
      vehiclesEl.style.display = "block";
      planetsEl.style.display = "none";
      peopleEl.style.display = "none";
      paginationPageEl.style.display = "block";
    })
    .catch((error) => console.error(error));
}

// виводимо Vehicles
const btnVehicles = document.querySelector(".nav-link.transf");
btnVehicles.addEventListener("click", (e) => {
  currentPage = 1;
  fetchVehicles(currentPage);
});
const pageLinksVehicles = document.querySelectorAll(".page-link[data-page]");
pageLinksVehicles.forEach((link) => {
  link.addEventListener("click", () => {
    currentPage = parseInt(link.dataset.page);
    fetchVehicles(currentPage);
  });
});
// PageBtn >>
prevPageBtn.addEventListener("click", () => {
  if (currentPage > 1) {
    currentPage--;
    fetchVehicles(currentPage);
  }
});
// <<
nextPageBtn.addEventListener("click", () => {
  if (currentPage < totalPages) {
    currentPage++;
    fetchVehicles(currentPage);
  }
});

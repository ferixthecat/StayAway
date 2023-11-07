let rentals = [
    // Add your rental objects here
    {
        "headline": "Ontario Santorini",
        "numSleeps": 9,
        "numBedrooms": 4,
        "numBathrooms": 3,
        "pricePerNight": 200.55,
        "city": "Scugog",
        "province": "Ontario",
        "imageUrl": "/images/h2.jpg",
        "featuredRental": true
    },
    {
        "headline": "Small Abode",
        "numSleeps": 5,
        "numBedrooms": 2,
        "numBathrooms": 1,
        "pricePerNight": 120.95,
        "city": "Scugog",
        "province": "Ontario",
        "imageUrl": "/images/h3.jpg",
        "featuredRental": true
    },
    {
        "headline": "Normal Suburban",
        "numSleeps": 7,
        "numBedrooms": 3,
        "numBathrooms": 2,
        "pricePerNight": 150.75,
        "city": "Scugog",
        "province": "Ontario",
        "imageUrl": "/images/h1.jpg",
        "featuredRental": true
    },
    {
        "headline": "Cozy Cottage",
        "numSleeps": 6,
        "numBedrooms": 3,
        "numBathrooms": 2,
        "pricePerNight": 175.25,
        "city": "Scugog",
        "province": "Ontario",
        "imageUrl": "/images/h4.jpg",
        "featuredRental": true
    },
    {
        "headline": "Basement",
        "numSleeps": 2,
        "numBedrooms": 1,
        "numBathrooms": 1,
        "pricePerNight": 80.75,
        "city": "Hamilton",
        "province": "Ontario",
        "imageUrl": "/images/h5.jpg",
        "featuredRental": false
    },
    {
        "headline": "Loft Apartment",
        "numSleeps": 4,
        "numBedrooms": 2,
        "numBathrooms": 1,
        "pricePerNight": 110.25,
        "city": "Hamilton",
        "province": "Ontario",
        "imageUrl": "/images/h6.jpg",
        "featuredRental": false
    },
];

function getFeaturedRentals() {
    return rentals.filter(rental => rental.featuredRental);
}

function getRentalsByCityAndProvince() {
    let groupedRentals = [];
    let cities = [...new Set(rentals.map(rental => `${rental.city}, ${rental.province}`))];

    cities.forEach(city => {
        let cityRentals = rentals.filter(rental => `${rental.city}, ${rental.province}` === city);
        groupedRentals.push({
            "cityProvince": city,
            "rentals": cityRentals
        });
    });

    return groupedRentals;
}

module.exports = { getFeaturedRentals, getRentalsByCityAndProvince };

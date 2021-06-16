const { Z_NO_FLUSH } = require('zlib');
const { Company } = require('../models');

const companyData = [
    {
        name: "Groomers R US",
        phone: "603-555-1212",
        address: "219 Elm St",
        city: "Manchester",
        state: "NH",
        zipCode: "03104",
        category: "Grooming",
        webAddress: "www.groomersrus.com",
        rating: 4
    },
    {
        name: "Grooming at Tiffany's",
        phone: "603-555-1212",
        address: "127 Rockingham Rd",
        city: "Derry",
        state: "NH",
        zipCode: "03038",
        category: "Grooming",
        webAddress: "www.groomingatiffanys.com",
        rating: 4
    },
    {
        name: "Hollywood Hounds",
        phone: "603-472-7387",
        address: "50 Wallace Rd",
        city: "Bedford",
        state: "NH",
        zipCode: "03110",
        category: "Grooming",
        webAddress: "www.hollywoodhoundsnh.com",
        rating: 4
    },
    {
        name: "Morningstar Dog Grooming",
        phone: "603-347-5348",
        address: "6 Chase St",
        city: "Kingston",
        state: "NH",
        zipCode: "03848",
        category: "Grooming",
        webAddress: "www.morningstargrooming.com",
        rating: 4
    },
    {
        name: "Ruff to Fluff Dog Grrrooming",
        phone: "603-669-1955​",
        address: "1238 Hooksett St",
        city: "Hooksett",
        state: "NH",
        zipCode: "03106",
        category: "Grooming",
        webAddress: "www.rufftofluff.com",
        rating: 4
    },
    {
        name: "Lynmar Kennels",
        phone: "603-673-0088​",
        address: "23 Proctor Hill Rd",
        city: "Brookline",
        state: "NH",
        zipCode: "03033",
        category: "Grooming",
        webAddress: "www.lynmarkennels.com",
        rating: 4
    },
    {
        name: "Clean Paws Grooming",
        phone: "603-298-8600",
        address: "12 Railroad Ave",
        city: "West Lebanon",
        state: "NH",
        zipCode: "03784",
        category: "Grooming",
        webAddress: "www.cleanpawsgrooming.com",
        rating: 4
    },
    {
        name: "Melissa's Pet Salon",
        phone: " 603-458-2206",
        address: "5 Hampshire St",
        city: "Salem",
        state: "NH",
        zipCode: "03079",
        category: "Grooming",
        webAddress: "www.melissak9design.com",
        rating: 4
    },
    {
        name: "Hudson Groomers",
        phone: "603-718-1797",
        address: "43 Lowell Rd",
        city: "Hudson",
        state: "NH",
        zipCode: "03051",
        category: "Grooming",
        webAddress: "www.hudsongroomery.com",
        rating: 4
    },
    {
        name: "Downtown Dog Grooming",
        phone: "603-834-9904",
        address: "10 Third St",
        city: "Dover",
        state: "NH",
        zipCode: "03820",
        category: "Grooming",
        webAddress: "www.ddgdover.com",
        rating: 4
    },
    {
        name: "Voo Dog Daycare",
        phone: "603-393-6165",
        address: "248 Sheep Davis Rd",
        city: "Concord",
        state: "NH",
        zipCode: "03301",
        category: "Doggie Daycare",
        webAddress: "www.voodogdaycare.com",
        rating: 4
    },
    {
        name: "Saltyclaws",
        phone: "603-521-7081",
        address: "4 Bud Way",
        city: "Nashua",
        state: "NH",
        zipCode: "03063",
        category: "Doggie Daycare",
        webAddress: "www.saltyclaws.com",
        rating: 4
    },
    {
        name: "Countryside Doggie Daycare",
        phone: "603-594-0444",
        address: "83 Bush Hill Rd",
        city: "Hudson",
        state: "NH",
        zipCode: "03051",
        category: "Doggie Daycare",
        webAddress: "www..com",
        rating: 4
    },
    {
        name: "Pawquet's Play The Day",
        phone: "603-568-9562",
        address: "302 Rockingham Rd",
        city: "Londonderry",
        state: "NH",
        zipCode: "03053",
        category: "Doggie Daycare",
        webAddress: "www.pawquetsplaystay.com",
        rating: 4
    },
    {
        name: "The Barking Dog",
        phone: "603-773-2275",
        address: "7 Beech Hill Rd",
        city: "Salem",
        state: "NH",
        zipCode: "03079",
        category: "Doggie Daycare",
        webAddress: "www.thebarkingdog.com",
        rating: 4
    },
    {
        name: "Animal Hospital of Nashua",
        phone: "603-880-3034",
        address: "168 Main Dunstable Rd",
        city: "Nashua",
        state: "NH",
        zipCode: "03060",
        category: "Veterinarian",
        webAddress: "www..com",
        rating: 4
    },
    {
        name: "Banfield Pet Hospital",
        phone: "603-890-3744",
        address: "290 S Main St",
        city: "Salem",
        state: "NH",
        zipCode: "03079",
        category: "Veterinarian",
        webAddress: "www.banfieldpethospital.com",
        rating: 4
    },
    {
        name: "Greenland Veterinary Hospital",
        phone: "603-433-5665",
        address: "667 Portsmouth Ave",
        city: "Greenland",
        state: "NH",
        zipCode: "03840",
        category: "Veterinarian",
        webAddress: "www.greenvethospital.com",
        rating: 4
    },
    {
        name: "Holistic Animal Wellness",
        phone: "603-264-0862",
        address: "2 Mont Vernon Rd",
        city: "Hooksett",
        state: "NH",
        zipCode: "03106",
        category: "Veterinarian",
        webAddress: "www.holisticanimal.com",
        rating: 4
    },
    {
        name: "Vetco at Petco",
        phone: "603-890-6922",
        address: "92 Elm St",
        city: "Manchester",
        state: "NH",
        zipCode: "03104",
        category: "Veterinarian",
        webAddress: "www.vetcopetco.com",
        rating: 4
    },
    {
        name: "Canobie Veterinary",
        phone: "603-898-8982",
        address: "72 Range Rd",
        city: "Windham",
        state: "NH",
        zipCode: "03087",
        category: "Veterinarian",
        webAddress: "www.canobievet.com",
        rating: 4
    },
    {
        name: "Waggin Tails Pet Walkers",
        phone: "603-541-2541",
        address: "123 Palomino Rd",
        city: "Salem",
        state: "NH",
        zipCode: "03079",
        category: "Dog Walkers",
        webAddress: "www.waggintail.com",
        rating: 4
    },
    {
        name: "Manchester Dog Walkers",
        phone: "603-888-5412",
        address: "529 Maple St",
        city: "Manchester",
        state: "NH",
        zipCode: "03104",
        category: "Dog Walkers",
        webAddress: "www.mancheterdogwalkers.com",
        rating: 4
    },
    {
        name: "Teacher's Pet Walking Services",
        phone: "603-526-9632",
        address: "234 Central Ave",
        city: "Dover",
        state: "NH",
        zipCode: "03820",
        category: "Dog Walkers",
        webAddress: "www.Teacherspetwalking.com",
        rating: 4
    },
    {
        name: "Have Paws Will Travel",
        phone: "603-417-4267",
        address: "85 Joppa Hill Rd",
        city: "Concord",
        state: "NH",
        zipCode: "03301",
        category: "Dog Walkers",
        webAddress: "www.havepaws.com",
        rating: 4
    },
    {
        name: "Heidi's Walk N' Roll Pet Care",
        phone: "603-789-4561",
        address: "123 Baboosic Lake Rd",
        city: "Merrimack",
        state: "NH",
        zipCode: "03052",
        category: "Dog Walkers",
        webAddress: "www.walknrollpetcare.com",
        rating: 4
    },
    {
        name: "Top Pets Walking Service",
        phone: "603-562-4578",
        address: "845 Ride Out Rd",
        city: "Brookline",
        state: "NH",
        zipCode: "03033",
        category: "Dog Walkers",
        webAddress: "www.toppets.com",
        rating: 4
    },
    {
        name: "Camp Puggle",
        phone: "603-895-2458",
        address: "6 Vilna Ave",
        city: "Nashua",
        state: "NH",
        zipCode: "03063",
        category: "Dog Walkers",
        webAddress: "www.camppuggle.com",
        rating: 4
    },
    {
        name: "All Breeds Dog Training",
        phone: "603-635-9199",
        address: "87B Bridge St.",
        city: "Salem",
        state: "NH",
        zipCode: "03079",
        category: "Dog Trainers",
        webAddress: "www.allbreeds.com",
        rating: 4
    },
    {
        name: "PetSmart Training",
        phone: "603-595-6460",
        address: "4 Cellu Dr",
        city: "Nashua",
        state: "NH",
        zipCode: "03063",
        category: "Dog Trainers",
        webAddress: "www.petsmarttraining.com",
        rating: 4
    },
    {
        name: "The Motivated K9",
        phone: "603-505-6209",
        address: "30 Henniker St",
        city: "Concord",
        state: "NH",
        zipCode: "03301",
        category: "Dog Trainers",
        webAddress: "www.motivatedk9.com",
        rating: 4
    },
    {
        name: "Davis Dog Training",
        phone: "603-393-9527",
        address: "238 Beech St.",
        city: "Manchester",
        state: "NH",
        zipCode: "03104",
        category: "Dog Trainers",
        webAddress: "www.davistraining.com",
        rating: 4
    },
    {
        name: "Alpha Dog Training",
        phone: "603-487-9937",
        address: "286 Province Rd",
        city: "West Lebanon",
        state: "NH",
        zipCode: "03784",
        category: "Dog Trainers",
        webAddress: "www.alphadog.com",
        rating: 4
    },
    {
        name: "Spirit of the Okami",
        phone: "603-738-6113",
        address: "34 Wheeler Ave",
        city: "Concord",
        state: "NH",
        zipCode: "03301",
        category: "Dog Trainers",
        webAddress: "www.spiritofokami.com",
        rating: 4
    },
    {
        name: "The Wholistic Pet",
        phone: "603-472-8300",
        address: "341 Bedford Rd",
        city: "Bedford",
        state: "NH",
        zipCode: "03110",
        category: "Treat Stores",
        webAddress: "www.wholisticpet.com",
        rating: 4
    },
    {
        name: "Four Your Paws Only",
        phone: "603-356-7297",
        address: "1821 White Mountain Dr",
        city: "Concord",
        state: "NH",
        zipCode: "03301",
        category: "Treat Stores",
        webAddress: "www.4yourpaws.com",
        rating: 4
    },
    {
        name: "DogLand",
        phone: "603-888-7412",
        address: "800 Newport Dr",
        city: "Manchester",
        state: "NH",
        zipCode: "03104",
        category: "Treat Stores",
        webAddress: "www.dogland.com",
        rating: 4
    },
    {
        name: "Pets Choice",
        phone: "603-123-6542",
        address: "454 Daniel Webster Dr",
        city: "Merrimack",
        state: "NH",
        zipCode: "03054",
        category: "Treat Stores",
        webAddress: "www.petschoice.com",
        rating: 4
    },
    {
        name: "Friendly Pets",
        phone: "603-456-9744",
        address: "40 Concord Rd",
        city: "Hooksett",
        state: "NH",
        zipCode: "03106",
        category: "Treat Stores",
        webAddress: "www.friendlypets.com",
        rating: 4
    },

];

const seedCompanies = () => Company.bulkCreate(companyData);

module.exports = seedCompanies;
// create an object literar for the pet salon (name, address, hours)
var salon = {
    saloName: "The Fashion Pet",
    address: {
        street: "Av. Universiry",
        number: '214-B'
    },
    hours: {
        open: "8 a.m.",
        close: "5 p.m."
    },
    pets: [],
    prices: {
        'FULL SERVICE': 100,
        'SHOWER': 50,
        'HAIR CUT': 40,
        'NAILS CUT': 30
    }
}

//object contructor
var c=0;
class Pet {
    constructor(name, age, type, breed, gender, service, ownerName, contactPhone)  {
        this.name = name;
        this.age = age;
        this.type = type;
        this.breed = breed;
        this.gender = gender;
        this.service = service;
        this.ownerName = ownerName;
        this.contactPhone = contactPhone;
        this.price = salon.prices[service.toUpperCase()] || 0;
        this.id = c;
        c++;
    }
}

var scooby = new Pet("Scooby", 50, "Dog", "Dane", "Male", "Full Service", "Shaggy", "23423452"),
    Scrappy = new Pet("Scrappy", 12, "Cat", "Dane", "Male", "Shower", "Scooby", "23423452"),
    Bambino = new Pet("Bambino", 43, "Bird", "Great Tit", "Male", "Full Service", "Erick", "23423452");


var txtName = document.getElementById("petName"),
    txtType = document.getElementById("petType"),
    txtAge = document.getElementById("petAge"),
    txtBreed = document.getElementById("petBreed"),
    txtGender = document.getElementById("petGender"),
    txtService = document.getElementById("petService"),
    txtOwnerName = document.getElementById("petOwnerName"),
    txtPhone = document.getElementById("petPhone");

// get the inputs and select the values
function register() {
    //create the pet
// console.log([txtName.value, txtAge.value, txtBreed.value, 
//     txtGender.value, txtType.value,
//     txtOwnerName.value, txtService.value]);
    //push the pet inot the array
    var thePet = new Pet(txtName.value, txtAge.value,txtType.value, txtBreed.value, 
        txtGender.value, txtService.value,
        txtOwnerName.value, txtPhone.value);

    salon.pets.push(thePet);
    clear();
    display(thePet);
}

function clear() {
    txtName.value = "";
    txtType.value = "";
    txtAge.value = "";
    txtBreed.value = "";
    txtGender.value = "";
    txtOwnerName.value = "";
    txtPhone.value = "";
    txtService.selectedIndex = 0;
}

//object destructuring
// console.table(salon.address.street);

var {saloName, address:{street, number}, hours: {open, close}} = salon;
// var salonStreet = salon.address.street;
// console.log(street);
// console.log(salon.pets);

//create an array with pets (objects literal) (name, breed, gender, type, service)

// function that display the names of the pets on the console
function displayNames() {
    for (const pet of salon.pets) {
        console.log(pet.name);
    }
}

// displayNames();
//function to display on console the number of registered pets.
function howManyPets() {
    console.log(`There are ${salon.pets.length} registered pets`);
}

//oldest and youngest
function oldestYoungest() {
    let max = [salon.pets[0]], min = [salon.pets[0]];   
             
    for (let i = 0; i < salon.pets.length; i++) {
        const pet = salon.pets[i];
        
        if (pet) {
            if (pet.age == max[0].age &&  !max.includes(pet))
                max.push(pet);
    
            if (pet.age == min[0].age && !min.includes(pet))
                min.push(pet);
    
            if (pet.age > max[0].age)
                max = [pet];
    
            if (pet.age < min[0].age)
                min = [pet];
        }
    }

    return {max, min}
}

function deletePet(petId) {

    var tr = $('#'+petId);
    tr.remove();

    //traverl the array (search function)
    for (let i = 0; i < salon.pets.length; i++) {
        if (salon.pets[i].id === petId) {
            salon.pets.splice(i, 1);
            break;
        }
    }

    updateAges();
    updateProfit();
    updatesNumber();
}

function searchPet() {

    var ss=$('#petSearch').val().toLowerCase();

    $('tr.tr-selected').removeClass('tr-selected');

    for (let i=0;i<salon.pets.length;i++) {
        const selected = salon.pets[i];
        if ([
            selected.name.toLowerCase(),
            selected.service.toLowerCase(),
            selected.age.toString().toLowerCase(),
            selected.type.toString().toLowerCase(),
            selected.breed.toString().toLowerCase(),
            selected.gender.toString().toLowerCase(),
            selected.service.toString().toLowerCase(),
            selected.price.toString().toLowerCase(),
            selected.ownerName.toString().toLowerCase(),
            selected.contactPhone.toString().toLowerCase(),
        ].join('').includes(ss)) {
            
            $("#"+selected.id).addClass('tr-selected');
        }
    }

    $('tbody tr').not('tbody tr.tr-selected').fadeOut();
    $('tbody tr.tr-selected').fadeIn();
}

function init() {

    salon.pets = [scooby, Scrappy, Bambino];
    display(scooby);
    display(Scrappy);
    display(Bambino);
    
    // hook events
    $('#register-btn').on('click', register);
 
    $('#search-btn').on('click', searchPet);

    $('#petSearch').keypress(function (e){
        if (e.key==='Enter') {
            searchPet();
        }
    });

    $('#petPhone').keypress(function (e){
        if (e.key==='Enter') {
            register();
        }
    });
}

window.onload = init;

// extra
// hide
// display how many dogs, cats and birds you have
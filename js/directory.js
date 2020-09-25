
// Extra Challenge
//display the number of registered pets in any part of the html
function updatesNumber() {
    let container = document.getElementById('petsNum');
    container.innerText = salon.pets.length;
}

// profit
function updateProfit() {
    let container = document.getElementById('totalProfit');
    
    container.innerText = "$" + salon.pets.reduce((a, n) => {
        return a + n.price;
    }, 0);
}

//oldest and ..
function updateAges() {
    const oldestContainer = document.getElementById("oldestList");
    const youngestContainer = document.getElementById("youngestList");
    let {max, min} = oldestYoungest();

    oldestContainer.innerText = max.map(p=>p.name).join(", ");
    youngestContainer.innerText = min.map(p=>p.name).join(", ");
}


function display(aPet) {
    
    // create the vars
    // var pets = salon.pets;
    var petsSection = document.getElementById("petsTBody");
    const dogIcon = '<i class="fas fa-dog"></i>';
    const catIcon = '<i class="fas fa-cat"></i>';
    const birdIcon = '<i class="fas fa-crow"></i>';
    
    function getIcon(type) {
        type = type.toUpperCase();
        switch (type) {
            case "DOG":
                return dogIcon;
            case "CAT":
                return catIcon;
            case "BIRD":
                return birdIcon;
            default:
                return "";
        }
    }

    // travel the pets array
    // for (let i = 0; i < pets.length; i++) {
        // create the html text
        if (aPet) {

            text = `<tr id="${aPet.id}">
                        <td> ${aPet.name}</td>
                        <td> ${aPet.age} </td> 
                        <td> ${getIcon(aPet.type) || aPet.type} </td> 
                        <td> ${aPet.breed} </td> 
                        <td> ${aPet.gender} </td> 
                        <td> ${aPet.service} </td> 
                        <td> $${aPet.price} </td> 
                        <td> ${aPet.ownerName} </td> 
                        <td> ${aPet.contactPhone} </td> 
                        <td> <button class="btn btn-danger" onclick="deletePet(${aPet.id});">Delete</button> </td> 
                    </tr>`;
            petsSection.innerHTML += text;
        }

    updatesNumber();
    updateProfit();
    updateAges();
}
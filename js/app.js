let dataCars = [
    'Acura',
    'Alfa Romeo',
    'Aston Martin',
    'Audi',
    'Bentley',
    'BMW',
    'Buick',
    'Cadillac',
    'Chevrolet',
    'Chrysler',
    'Dodge',
    'Ferrari',
    'Fiat',
    'Ford',
    'GMC',
    'Honda',
    'Hummer',
    'Hyundai',
    'Infiniti',
    'ISUZU',
    'Jaguar',
    'Jeep',
    'Kia',
    'Lamborghini',
    'Land Rover',
    'Lexus',
    'Lincoln',
    'Lotus,',
    'Maserati',
    'Maybach',
    'Mazda',
    'McLarenAutomotive',
    'Mercedez Benz',
    'Mercury',
    'Mini',
    'Mitsubishi',
    'Nissan',

]

function activeYears (){
    let years = document.getElementById('years');
    let year_i = 1980;
    for (let i = 0; i < 40; i++) {
        years.innerHTML += `<option value="${year_i + i}">${year_i + i}</option>`;
        console.log(year_i)
    }
}

function addListCars (){
    let listCars = document.getElementById('cars');
    for (let i = 0; i < dataCars.length; i++) {
        listCars.innerHTML += `<option value="${dataCars[i]}">${dataCars[i]}</option>`;
    }
}

activeYears();
addListCars();

$(document).ready(function() {
    $('#Carousel').carousel({
        interval: 5000
    })
});


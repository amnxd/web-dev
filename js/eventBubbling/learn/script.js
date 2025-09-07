
let arr = [
    {
    name: "Aman",
    age: 99,
    married: false,
    image: 'https://randomuser.me/api/portraits/men/1.jpg'
    },
    {
    name: "Bhaskar",
    age: 25,
    married: true,
    image: 'https://randomuser.me/api/portraits/men/2.jpg'  
    },
    {
    name: "Chirag",
    age: 26,
    married: false,
    image: 'https://randomuser.me/api/portraits/men/3.jpg'
    }
]

let sum = '';

arr.forEach((element) => {
    sum += `<div class="card">
    <img src="${element.image}" alt="img" class="card-image">
    <h1>${element.name}</h1>
    <h3>Age: ${element.age}</h3>
    <h4>Married: ${element.married}</h4>
    </div>`;
});

console.log(sum);

document.body.innerHTML = sum;

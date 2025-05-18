
let h4 = document.querySelector('h4');
let btn = document.querySelector('button');

var flag = 0;


btn.addEventListener('click', function(){
    if(flag==0){
        h4.innerHTML = 'Friends';
        h4.style.color = 'green';
        btn.innerHTML = 'Remove Friends'
        console.log('Friendship done')

        flag = 1;
    }else{
        h4.innerHTML = 'Stranger';
        h4.style.color = 'red';
        btn.innerHTML = 'Add Friends';
        console.log('friendship tut gyi')

        flag = 0;
    }
}
)


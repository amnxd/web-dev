let arr =[
    {
        username: 'BUD',
        role: 'Chief Executive Officer',
        image: 'https://azk.imgix.net/big_azukis/127.png?rect=2500,500,2000,2000&fm=jpg&w=800',
        socialLinks: {
            linkedin: 'https://linkedin.com/in/amnxd',
            github: 'https://github.com/amnxd'
        }
    },
    {
        username: 'Bennit',
        role: 'Chief Technology Officer',
        image: 'https://azk.imgix.net/big_azukis/128.png?rect=2500,500,2000,2000&fm=jpg&w=800',
        socialLinks: {
            linkedin: 'https://linkedin.com/in/bennit',
            github: 'https://github.com/bennit'
        }
    },
    {
        username: 'PRAKHAR',
        role: 'Chief Operating Officer',
        image: 'https://azk.imgix.net/big_azukis/129.png?rect=2500,500,2000,2000&fm=jpg&w=800',
        socialLinks: {
            linkedin: 'https://linkedin.com/in/prakhar',
            github: 'https://github.com/prakhar'
        }
    },
    {
        username: 'SATYODAY',
        role: 'Chief Marketing Officer',
        image: 'https://azk.imgix.net/big_azukis/130.png?rect=2500,500,2000,2000&fm=jpg&w=800',
        socialLinks: {
            linkedin: 'https://linkedin.com/in/satyoday',
            github: 'https://github.com/satyoday'
        }
    }
]

let sum = '';

arr.forEach(function(elem){
    sum += `<div class="team-card">
    <img src="${elem.image}" alt="img" class="card-image>
    <h2>${elem.username}</h2>
    <h4>${elem.role}</h4>
    <div class="card-icons">
    <a href="${elem.socialLinks.linkedin}" target="_blank">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c-.837 0-1.358-.554-1.358-1.248 0-.709.536-1.248 1.388-1.248.853 0 1.359.54 1.371 1.248 0 .694-.518 1.248-1.4 1.248h>
    </svg></a>
    <a href="${elem.socialLinks.github}" target="_blank">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.073.55-.173.55-.384 0-.19-.007-.693-.011-1.36-2.236.484-2.707-1.075-2.707-1.075-.365-.927-.89-1.175-.89-1.175-.727-.497.055-.487.055-.487.804.056 1.225.826 1.225.826.715 1.225 1.874.872 2.33.666.072-.517.28-.872.507-1.072-1.77-.2-3.63-.885-3.63-3.94 0-.87.31-1.58.82-2.14-.082-.2-.356-1.014.078-2.11 0 0 .67-.215 2.2.82A7.48 7.48 0 0 1 8 2.12c.68.003 1.36.092 2 .27 1.53-1.035 2.2-.82 2.2-.82.434 1.096.16 1.91.08 2.11.51.56.82 1.27.82 2.14 0 3.06-1.86 3.74-3.63 3.94.29.25.55.74.55 1.49 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.384C13.71 14.53 16 11.54 16 8c0-4.42-3.58-8-8-8z" fill="white"/>
    </svg></a>
    </div>
    </div>`;
})

console.log(sum);

document.body.innerHTML = sum;
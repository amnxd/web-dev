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
    <img src="${elem.image}" alt="${elem.username}" class="card-image">
    <h2>${elem.username}</h2>
    <p>${elem.role}</p>
    <div class="card-icons">
        <a href="${elem.socialLinks.linkedin}" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <rect x="2.5" y="2" width="16" height="16" rx="2.27778" fill="#232323"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M16.7222 18H4.27778C3.29594 18 2.5 17.2041 2.5 16.2222V3.77778C2.5 2.79594 3.29594 2 4.27778 2H16.7222C17.7041 2 18.5 2.79594 18.5 3.77778V16.2222C18.5 17.2041 17.7041 18 16.7222 18ZM13.9034 15.7778H16.2777V10.9003C16.2777 8.83655 15.1079 7.83871 13.4738 7.83871C11.8391 7.83871 11.1511 9.11176 11.1511 9.11176V8.07407H8.86291V15.7778H11.1511V11.7338C11.1511 10.6502 11.6499 10.0055 12.6045 10.0055C13.4821 10.0055 13.9034 10.6251 13.9034 11.7338V15.7778ZM4.72217 5.64378C4.72217 6.42881 5.35374 7.06534 6.13313 7.06534C6.91253 7.06534 7.54372 6.42881 7.54372 5.64378C7.54372 4.85875 6.91253 4.22222 6.13313 4.22222C5.35374 4.22222 4.72217 4.85875 4.72217 5.64378ZM7.33759 15.7778H4.95162V8.07407H7.33759V15.7778Z" fill="white"/>
            </svg>
        </a>
        <a href="${elem.socialLinks.github}" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="10" fill="#232323"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.091.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.604-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.529 2.341 1.088 2.91.832.091-.646.35-1.088.636-1.339-2.221-.253-4.555-1.111-4.555-4.945 0-1.092.39-1.987 1.029-2.686-.103-.253-.446-1.272.098-2.65 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.699 1.028 1.594 1.028 2.686 0 3.842-2.337 4.688-4.566 4.938.359.309.678.919.678 1.852 0 1.336-.012 2.417-.012 2.747 0 .268.18.579.688.481C19.138 20.163 22 16.417 22 12c0-5.523-4.477-10-10-10z" fill="white"/>
            </svg>
        </a>
    </div>
    </div>`;
})

console.log(sum);

document.querySelector('.team-container').innerHTML = sum;
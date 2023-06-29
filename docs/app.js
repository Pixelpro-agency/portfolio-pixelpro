// projects
let projectCards = [...document.querySelectorAll('.project-card')];

// project details container
let projectName = document.querySelector('.project-details .name');
let projectImage = document.querySelector('.project-details .image');
let projectDetail = document.querySelector('.project-details .details');

// buttons

let liveBtn = document.querySelector('#live-btn');
let githubBtn = document.querySelector('#github-btn');

let progressTrack = [...document.querySelectorAll('.progress-track')];

projectCards.map((project, i) => {
    project.addEventListener('click', () => {
        
        projectCards.map(card => card.classList.remove('active'));

        project.classList.add('active');

        let data = JSON.parse(project.getAttribute('data-info'));

        setUpProjectInfo(data);

    })
})

const setUpProjectInfo = (data) => {
    projectImage.src = data.image;
    projectName.innerHTML = data.name;
    projectDetail.innerHTML = data.about;
    liveBtn.href = data.live;
    githubBtn.href = data.github;

    progressTrack.map((item) => {
        let progress = item.querySelector('.progress');

        progress.style.width = data.languages[item.getAttribute('data-name')];
    })
}

// filters

const filters = [...document.querySelectorAll('.filter-btn')];

filters.map((btn, i) => {
    btn.addEventListener('click', () => {
        filters.map(item => item.classList.remove('active'));

        btn.classList.add('active');

        let tag = btn.getAttribute('data-filter-value');

        projectCards.map(project => {
            if(tag == 'all'){
                project.style.display = null;
            }
            else if(!project.getAttribute('data-tags').includes(tag)){
                project.style.display = 'none';
            }
            else{
                project.style.display = null;
            }
        })
    })
})

projectCards[0].classList.add('active');
setUpProjectInfo(projects[0])

// navbar

const navbar = document.querySelector('nav')

window.addEventListener('scroll', () => {
    if(scrollY > 195){
        navbar.classList.add('bg');
    } else{
        navbar.classList.remove('bg');
    }
})

// toggle button

const toggleBtn = document.querySelector('.toggle-btn');
const linksContainer = document.querySelector('.links-container');

toggleBtn.addEventListener('click', () => {
    toggleBtn.classList.toggle('active');
    linksContainer.classList.toggle('active');
})

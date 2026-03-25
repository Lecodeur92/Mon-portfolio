const array_skill = [
    {
        id : 1,
        icon_url : 'assets/pictures-icônes/HTML5_oval_logo.png',
        icon_name : 'HTML',
        level : '50',
        color : "#E34F26"
    },
    {
        id : 2,
        icon_url : 'assets/pictures-icônes/css3-logo-png-transparent.png',
        icon_name : 'CSS',
        level : '50',
        color : "#1572B6"
    },
    {
        id : 3,
        icon_url : 'assets/pictures-icônes/JavaScript-logo.png',
        icon_name : 'JAVASCRIPT',
        level : '40',
        color : "#F7DF1E"
    },
    {
        id : 4,
        icon_url : 'assets/pictures-icônes/62a74f5c223343fbc2207d03.png',
        icon_name : 'VUEJS',
        level : '35',
        color : "#42B883"
    }
]

const main = document.querySelector('.skills-grid')

array_skill.forEach(item => {
   let progress_bar = document.createElement("div")
   let progress_level = document.createElement("div")
   let div = document.createElement("div")
   let img = document.createElement("img")
   let p = document.createElement("p")

   img.src = `${item.icon_url}`
   p.textContent = `${item.icon_name}`

   div.className = "card"
   img.className = "img"

   progress_bar.style.width = "100px"
   progress_bar.style.height = "7px"
   progress_bar.style.position = "relative"
   progress_bar.style.background = "#e6e3e3"
   progress_bar.style.borderRadius = "7px"
   progress_bar.style.marginTop = "15px"


   progress_level.style.width = item.level + '%'
   progress_level.style.height = "100%"
   progress_level.style.position = "absolute"
   progress_level.style.background = item.color
   progress_level.style.borderRadius = "7px"
  

   div.appendChild(img)
   div.appendChild(p)
   progress_bar.appendChild(progress_level)
   div.appendChild(progress_bar)
   main.appendChild(div)
})


const array_project = [
    {
        project_name : "To do-list",
        project_desc : "Une petite application de gestion de tâche",
        project_link : "",
        project_img : ""
    },
    {
        project_name : "Contacts",
        project_desc : "Une petite application de gestion des contacts",
        project_link : "",
        project_img : ""
    }
]


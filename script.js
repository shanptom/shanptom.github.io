// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Set current year in footer
    document.getElementById('current-year').textContent = new Date().getFullYear();
    
    // About me text
    document.getElementById('about-text').textContent = 
        "I’m a molecular biologist passionate about the microbial world. I specialize in Next-Generation Sequencing (NGS) technologies to explore microbial diversity in environmental samples. This portfolio is a personal project I created to practice JavaScript and web development.";
    
    // Theme toggle button
    const themeBtn = document.getElementById('change-color-btn');
    themeBtn.addEventListener('change', function () {
        document.body.classList.toggle('dark-theme');
    });
    
    // Projects data
    const projects = [
        {
            title: "Microbial Ecology",
            description: "Hands-on experience in metabarcoding of environmental (eDNA) and ancient DNA (aDNA) samples to study microbial community dynamics across time and ecosystems.",
            technologies: ["16S rRNA", "18S rRNA", "DNA-RNA Extractions", "Library Preparations"]
        },
        {
            title: "NGS",
            description: "Proficient with multiple NGS platforms for targeted, whole-exome, and whole-genome sequencing applications.",
            technologies: ["Illumina", "Oxford Nanopore", "MGI", "WES", "WGS"]
        },
        {
            title: "Bioinformatics",
            description: "Experienced in downstream analysis of NGS data using R and high-performance computing environments",
            technologies: ["R", "QIIME2", "PICRUSt2", "Git","Bash", "HPC/SLURM"]
        }
    ];
    
    // Display projects
    const projectsContainer = document.querySelector('.projects-container');
    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        
        const title = document.createElement('h3');
        title.textContent = project.title;
        
        const description = document.createElement('p');
        description.textContent = project.description;
        
        const techList = document.createElement('ul');
        project.technologies.forEach(tech => {
            const techItem = document.createElement('li');
            techItem.textContent = tech;
            techList.appendChild(techItem);
        });
        
        projectCard.appendChild(title);
        projectCard.appendChild(description);
        projectCard.appendChild(techList);
        
        projectsContainer.appendChild(projectCard);
    });

    // Blogs data
const blogs = [
    {
        title: "Introduction to Metabarcoding",
        url: "https://spanbauerlab.github.io/Metabarcoding/",
        description: "AA beginner-friendly guide to processing metabarcoding datasets on high-performance computing systems"
    },
    {
        title: "Scientific Writing using Markdown and Zotero",
        url: "https://shanptom.github.io/mdZotero/",
        description: "A workflow to write and cite scientific articles using Markdown with Zotero integration for reference management"
    },
    {
        title: "Beginners guide to Git and GitHub",
        url: "https://shanptom.github.io/GitIntro/",
        description: "A quick start guide to Git and GitHub, including step-by-step instructions to integrate version control into RStudio"
    },
];

// Display blogs
const blogSection = document.querySelector('#blogs .projects-container');
blogs.forEach(blog => {
    const blogCard = document.createElement('div');
    blogCard.className = 'project-card';

    const title = document.createElement('h3');
    const link = document.createElement('a');
    link.href = blog.url;
    link.textContent = blog.title;
    link.target = "_blank"; // Open in new tab
    title.appendChild(link);

    const description = document.createElement('p');
    description.textContent = blog.description;

    blogCard.appendChild(title);
    blogCard.appendChild(description);
    blogSection.appendChild(blogCard);
});

    
    
    // Smooth scrolling for navigation
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            window.scrollTo({
                top: targetElement.offsetTop - 20,
                behavior: 'smooth'
            });
        });
    });
});
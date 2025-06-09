// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Set current year in footer
    document.getElementById('current-year').textContent = new Date().getFullYear();
    
    // About me text
    document.getElementById('about-text').textContent = 
        "Hi, I’m Shan — a molecular biologist with a passion for Next-Generation Sequencing (NGS)." +
        "  I work across the end-to-end NGS workflow, from sample preparation and library construction to data analysis and interpretation."+
        " Whether it’s clinical diagnostics or environmental genomics, I’m always exploring how sequencing technologies can solve complex problems."+ 
        " This site is a space to share my work and experiments—both in science and in code.";
    
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
            title: "Molecular Diagnostics",
            description: "Experienced in applying NGS and PCR-based assays in clinical diagnostics, with a focus on workflow implementation, automation, and technical troubleshooting in CAP-accredited labs.",
            technologies: ["Illumina", "Oxford Nanopore", "MGI", "Library Prep & QC-WES,WGS,Amplicon"]
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
        description: "A beginner-friendly guide to processing metabarcoding datasets on high-performance computing systems"
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

// Add contact intro paragraph and resume button
const contactSection = document.querySelector('#contact');
const contactForm = document.getElementById('contact-form');

if (contactSection && contactForm) {
    // Intro paragraph
    const contactIntro = document.createElement('p');
    contactIntro.className = 'contact-intro';
    contactIntro.innerHTML = `
        I am actively seeking Field Application Scientist and Technical Support roles in the Next-Generation Sequencing sector. 
        If you have an opening—or would like to discuss how I can support your team—please don’t hesitate to reach out.
        <br><br>
        I also offer expert NGS data-analysis services and hands-on Basic R workshops tailored to your needs.
    `;

    // Resume button
    const resumeBtnDiv = document.createElement('div');
    resumeBtnDiv.className = 'resume-download';
    resumeBtnDiv.innerHTML = `
        <button onclick="window.location.href='https://shantom.netlify.app/resume.pdf'">
          My Resume
        </button>
    `;

    // Insert both elements in correct order
    contactSection.insertBefore(contactIntro, contactForm);
    contactSection.insertBefore(resumeBtnDiv, contactForm);
}

const socialLinksDiv = document.createElement('div');
socialLinksDiv.className = 'social-links';
socialLinksDiv.innerHTML = `
  <a href="https://linkedin.com/in/shan-thomas-719756aa" target="_blank" aria-label="LinkedIn">
    <img src="assets/linkedin.svg" alt="LinkedIn" />
  </a>
  <a href="https://github.com/shanptom" target="_blank" aria-label="GitHub">
    <img src="assets/github.svg" alt="GitHub" />
  </a>
  <a href="https://scholar.google.com/citations?user=9EsIZrgAAAAJ&hl=en&authuser=1" target="_blank" aria-label="Scholar">
    <img src="assets/google-scholar.svg" alt="Scholar" />
  </a>
  <a href="https://www.researchgate.net/profile/Shan-Thomas/" target="_blank" aria-label="ResearchGate">
    <img src="assets/researchgate.svg" alt="ResearchGate" />
  </a>

`;
contactSection.insertBefore(socialLinksDiv, contactForm);


    
    
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
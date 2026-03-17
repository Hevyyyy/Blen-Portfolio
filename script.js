// Data
const skills = [
    {
        name: "HTML5",
        icon: "fa-brands fa-html5",
        level: 95,
        color: "#f472b6",
        tools: ["Semantic HTML", "Forms", "Accessibility"]
    },
    {
        name: "CSS3",
        icon: "fa-brands fa-css3-alt",
        level: 90,
        color: "#c084fc",
        tools: ["Flexbox", "Grid", "Animations", "Responsive Design"]
    },
    {
        name: "JavaScript",
        icon: "fa-brands fa-js",
        level: 75,
        color: "#fde68a",
        tools: ["ES6", "DOM Manipulation", "Fetch API"]
    },
 
];

const projects = [
    {
        name: "Student Register",
        icon: "fa-solid fa-book-open",
        description: "A simple student registration system  Allows adding, editing, and deleting student records.",
        technologies: [ "HTML", "CSS", "JavaScript"],
        features: [
            "Add new student records",
            "Edit existing student information",
            "Delete students from the database",
            "Responsive table layout"
        ],
 
        color: "#f472b6"
    },
    {
        name: "Table Border",
        icon: "fa-solid fa-table",
        description: "A creative CSS experiment showcasing different table border styles, animations, and interactive hover effects.",
        technologies: ["HTML", "CSS"],
        features: [
            "Multiple border styles (solid, dashed, dotted)",
            "Hover effects that change border colors",
            "Animated table rows",
            "Fully responsive"
        ],
    
        color: "#c084fc"
    },
    {
        name: "Personal Website",
        icon: "fa-solid fa-globe",
        description: "My personal portfolio website built with React and Framer Motion. Showcases my projects and skills.",
        technologies: [ "Framer Motion", "CSS"],
        features: [
            "Smooth animations and transitions",
            "Fully responsive design",
            "Contact section with email and phone",
            "Project showcase"
        ],
    
        color: "#fde68a"
    }
];

const hobbies = [
    { name: "Movies", icon: "fa-solid fa-film", description: "Love watching sci-fi and animated films" },
    { name: "Music", icon: "fa-solid fa-music", description: "Enjoy listening to pop and lo-fi while coding" },
    { name: "Reading Books", icon: "fa-solid fa-book-open", description: "Fiction, fantasy, and tech blogs" }
];

const education = [
    {
        degree: "Grade 11 Student",
        institution: "Akaki Adventist Academy",
        period: "2024 - Present",
        description: "Currently pursuing my secondary education with a focus on web development and programming.",
        icon: "fa-solid fa-graduation-cap"
    }
];

const contactInfo = [
    {
        type: "Email",
        value: "Blenget@gmail.com",
        icon: "fa-solid fa-envelope",
        action: "mailto:Blenget@gmail.com",
        color: "#f472b6"
    },
    {
        type: "Phone",
        value: "+251 97 328 2770",
        icon: "fa-solid fa-phone",
        action: "tel:+251973282770",
        color: "#c084fc"
    },
    {
        type: "Location",
        value: "Addis Ababa, Ethiopia",
        icon: "fa-solid fa-location-dot",
        color: "#fde68a"
    }
];

// Render functions
function renderSkills() {
    const grid = document.getElementById('skillsGrid');
    grid.innerHTML = skills.map((skill, index) => `
        <div class="skill-card" style="animation: fadeInUp 0.8s ease ${index * 0.2}s forwards; opacity: 0; transform: translateY(30px);">
            <div class="skill-icon" style="color: ${skill.color}">
                <i class="${skill.icon}" style="font-size: 24px;"></i>
            </div>
            <h3>${skill.name}</h3>
            <div class="skill-progress">
                <div class="progress-bar" style="width: 0%; background: ${skill.color};" data-level="${skill.level}"></div>
            </div>
            <span class="skill-level">${skill.level}%</span>
            <div class="tools-container">
                ${skill.tools.map(tool => `<span class="tool-tag">${tool}</span>`).join('')}
            </div>
        </div>
    `).join('');

    // Animate progress bars when in view
    setTimeout(() => {
        document.querySelectorAll('.progress-bar').forEach(bar => {
            bar.style.width = bar.getAttribute('data-level') + '%';
        });
    }, 500);
}

function renderProjects() {
    const grid = document.getElementById('projectsGrid');
    grid.innerHTML = projects.map((project, index) => `
        <div class="project-card" style="animation: fadeInUp 0.8s ease ${index * 0.2}s forwards; opacity: 0; transform: translateY(30px);">
            <div class="project-icon" style="color: ${project.color}">
                <i class="${project.icon}" style="font-size: 18px;"></i>
            </div>
            <h3>${project.name}</h3>
            <p class="project-description">${project.description}</p>
            <div class="project-technologies">
                ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
            </div>
            <div class="project-features">
                <h4>Features</h4>
                <ul>
                    ${project.features.map(feature => `<li>${feature}</li>`).join('')}
                </ul>
            </div>
           
        </div>
    `).join('');
}

function renderHobbies() {
    const grid = document.getElementById('hobbiesGrid');
    grid.innerHTML = hobbies.map((hobby, index) => `
        <div class="hobby-card" style="animation: fadeInUp 0.8s ease ${index * 0.2}s forwards; opacity: 0; transform: translateY(30px);">
            <div class="hobby-icon">
                <i class="${hobby.icon}" style="font-size: 20px;"></i>
            </div>
            <h3>${hobby.name}</h3>
            <p>${hobby.description}</p>
        </div>
    `).join('');
}

function renderEducation() {
    const grid = document.getElementById('educationGrid');
    grid.innerHTML = education.map((edu, index) => `
        <div class="education-card" style="animation: fadeInUp 0.8s ease ${index * 0.2}s forwards; opacity: 0; transform: translateY(30px);">
            <div class="education-icon">
                <i class="${edu.icon}" style="font-size: 20px;"></i>
            </div>
            <div class="education-content">
                <h3>${edu.degree}</h3>
                <h4>${edu.institution}</h4>
                <span class="education-period">${edu.period}</span>
                <p>${edu.description}</p>
            </div>
        </div>
    `).join('');
}

function renderContactCards() {
    const container = document.getElementById('contactCards');
    container.innerHTML = contactInfo.map((info, index) => `
        <div class="contact-card" style="border-left-color: ${info.color}; animation: fadeInUp 0.5s ease ${index * 0.1}s forwards; opacity: 0; transform: translateX(-20px);">
            <div class="contact-icon" style="color: ${info.color}">
                <i class="${info.icon}" style="font-size: 24px;"></i>
            </div>
            <div class="contact-details">
                <h3>${info.type}</h3>
                <p>${info.value}</p>
                <div class="contact-actions">
                    ${info.action ? `
                        <a href="${info.action}" class="contact-action-btn">
                            ${info.type === 'Email' ? 'Send Email' : info.type === 'Phone' ? 'Call Now' : 'View on Map'}
                        </a>
                    ` : ''}
                    ${info.type !== 'Location' ? `
                        <button class="contact-action-btn copy-btn" onclick="copyToClipboard('${info.value}', '${info.type}')">
                            <i class="fas fa-copy"></i>
                            <span>Copy</span>
                        </button>
                    ` : ''}
                </div>
            </div>
        </div>
    `).join('');
}

// Copy to clipboard
function copyToClipboard(text, field) {
    navigator.clipboard.writeText(text).then(() => {
        const btn = event.currentTarget;
        const originalHTML = btn.innerHTML;
        btn.innerHTML = '<i class="fas fa-check"></i><span>Copied!</span>';
        setTimeout(() => {
            btn.innerHTML = originalHTML;
        }, 2000);
    });
}

// Modal functions
function openContactModal() {
    document.getElementById('contactModal').classList.add('active');
    document.body.style.overflow = 'hidden';
    renderContactCards();
}

function closeContactModal(event) {
    if (event && event.target.classList.contains('modal-overlay') || !event) {
        document.getElementById('contactModal').classList.remove('active');
        document.body.style.overflow = '';
    }
}

// Mobile menu
function toggleMobileMenu() {
    document.getElementById('mobileMenu').classList.toggle('active');
}

function closeMobileMenu() {
    document.getElementById('mobileMenu').classList.remove('active');
}

// Intersection Observer for scroll animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-in-up').forEach(el => observer.observe(el));

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderSkills();
    renderProjects();
    renderHobbies();
    renderEducation();
});

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeContactModal();
    }
});
// Existing data arrays (skills, projects, hobbies, education, contactInfo remain the same)
// ... (keep all the existing data arrays from previous version)

// Navbar component
function renderNavbar() {
    const navbarHTML = `
        <nav class="navbar" id="navbar">
            <div class="navbar-container">
                <div class="logo" onclick="scrollToSection('hero-section')">
                    <span class="logo-text">BLEN</span>
                    <span class="logo-dot"></span>
                </div>

                <ul class="nav-links">
                    <li>
                        <a href="#home" onclick="scrollToSection('hero-section')" class="nav-link" id="nav-home">
                            <span class="nav-icon"><i class="fas fa-home"></i></span>
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="#skills" onclick="scrollToSection('skills-section')" class="nav-link" id="nav-skills">
                            <span class="nav-icon"><i class="fas fa-code"></i></span>
                            Skills
                        </a>
                    </li>
                    <li>
                        <a href="#projects" onclick="scrollToSection('projects-section')" class="nav-link" id="nav-projects">
                            <span class="nav-icon"><i class="fas fa-briefcase"></i></span>
                            Projects
                        </a>
                    </li>
                    <li>
                        <a href="#hobbies" onclick="scrollToSection('hobbies-section')" class="nav-link" id="nav-hobbies">
                            <span class="nav-icon"><i class="fas fa-heart"></i></span>
                            Hobbies
                        </a>
                    </li>
                    <li>
                        <a href="#education" onclick="scrollToSection('education-section')" class="nav-link" id="nav-education">
                            <span class="nav-icon"><i class="fas fa-graduation-cap"></i></span>
                            Education
                        </a>
                    </li>
                </ul>

                <div class="nav-social">
                    <a href="mailto:Blenget@gmail.com" class="social-icon email" title="Email">
                        <i class="fas fa-envelope"></i>
                    </a>
                </div>

                <button class="mobile-menu-btn" onclick="toggleMobileMenu()">
                    <i class="fas fa-bars"></i>
                </button>
            </div>
        </nav>

        <div class="mobile-menu" id="mobileMenu">
            <div class="mobile-menu-content">
                <ul class="mobile-nav-links">
                    <li>
                        <a href="#home" onclick="scrollToSection('hero-section'); toggleMobileMenu()" class="mobile-nav-link">
                            <span class="mobile-nav-icon"><i class="fas fa-home"></i></span>
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="#skills" onclick="scrollToSection('skills-section'); toggleMobileMenu()" class="mobile-nav-link">
                            <span class="mobile-nav-icon"><i class="fas fa-code"></i></span>
                            Skills
                        </a>
                    </li>
                    <li>
                        <a href="#projects" onclick="scrollToSection('projects-section'); toggleMobileMenu()" class="mobile-nav-link">
                            <span class="mobile-nav-icon"><i class="fas fa-briefcase"></i></span>
                            Projects
                        </a>
                    </li>
                    <li>
                        <a href="#hobbies" onclick="scrollToSection('hobbies-section'); toggleMobileMenu()" class="mobile-nav-link">
                            <span class="mobile-nav-icon"><i class="fas fa-heart"></i></span>
                            Hobbies
                        </a>
                    </li>
                    <li>
                        <a href="#education" onclick="scrollToSection('education-section'); toggleMobileMenu()" class="mobile-nav-link">
                            <span class="mobile-nav-icon"><i class="fas fa-graduation-cap"></i></span>
                            Education
                        </a>
                    </li>
                </ul>

                <div class="mobile-social">
                    <a href="mailto:Blenget@gmail.com" class="mobile-social-icon" title="Email">
                        <i class="fas fa-envelope"></i>
                    </a>
                </div>

                <div class="mobile-contact">
                    <p>Blenget@gmail.com</p>
                    <p>+251 97 328 2770</p>
                    <p>Addis Ababa, Ethiopia</p>
                </div>
            </div>
        </div>
    `;
    
    document.getElementById('navbar-container').innerHTML = navbarHTML;
    
    // Add scroll event listener for navbar background
    window.addEventListener('scroll', handleNavbarScroll);
}

// Footer component
function renderFooter() {
    const currentYear = new Date().getFullYear();
    
    const footerHTML = `
        <footer class="footer">
            <div class="footer-container">
                <div class="footer-content">
                    <div class="footer-brand">
                        <h3 class="footer-logo">
                            BLEN <span class="footer-logo-dot"></span>
                        </h3>
                        <p class="footer-tagline">
                            Web Developer & Grade 11 student at Akaki Adventist Academy. 
                            Building creative websites with HTML, CSS, JavaScript, and PHP.
                        </p>
                        
                        <div class="footer-contact">
                            <div class="footer-contact-item">
                                <i class="fas fa-envelope"></i>
                                <span>Blenget@gmail.com</span>
                            </div>
                            <div class="footer-contact-item">
                                <i class="fas fa-phone"></i>
                                <span>+251 97 328 2770</span>
                            </div>
                            <div class="footer-contact-item">
                                <i class="fas fa-map-marker-alt"></i>
                                <span>Addis Ababa, Ethiopia</span>
                            </div>
                        </div>
                    </div>

                    <div class="footer-links">
                        <h4>Quick Links</h4>
                        <ul>
                            <li><a href="#home" onclick="scrollToSection('hero-section')">Home</a></li>
                            <li><a href="#skills" onclick="scrollToSection('skills-section')">Skills</a></li>
                            <li><a href="#projects" onclick="scrollToSection('projects-section')">Projects</a></li>
                            <li><a href="#hobbies" onclick="scrollToSection('hobbies-section')">Hobbies</a></li>
                            <li><a href="#education" onclick="scrollToSection('education-section')">Education</a></li>
                        </ul>
                    </div>

                    <div class="footer-social">
                        <h4>Connect With Me</h4>
                        <div class="footer-social-icons">
                            <a href="mailto:Blenget@gmail.com" class="footer-social-icon email" title="Email">
                                <i class="fas fa-envelope"></i>
                            </a>
                        </div>

                        <div class="footer-lets-talk">
                            <div class="lets-talk-content">
                                <i class="fas fa-comment lets-talk-icon"></i>
                                <div class="lets-talk-text">
                                    <h5>Let's Chat!</h5>
                                    <p>Have a question or just want to say hi? I'd love to hear from you.</p>
                                </div>
                            </div>
                            <div class="lets-talk-buttons">
                                <a href="mailto:Blenget@gmail.com" class="lets-talk-btn primary">
                                    <i class="fas fa-envelope"></i>
                                    Email Me
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="footer-bottom">
                    <div class="footer-copyright">
                        <p>© ${currentYear} Blen Demeke. All rights reserved.</p>
                        <p class="footer-made-with">
                            Made with <i class="fas fa-heart footer-heart"></i> in Addis Ababa
                        </p>
                    </div>

                    <button class="footer-back-to-top" onclick="scrollToTop()" title="Back to top">
                        <i class="fas fa-arrow-up"></i>
                    </button>
                </div>
            </div>

            <div class="footer-background">
                <div class="footer-gradient"></div>
            </div>
        </footer>
    `;
    
    document.getElementById('footer-container').innerHTML = footerHTML;
}

// Scroll to top function
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Scroll to section function
function scrollToSection(sectionClass) {
    const element = document.querySelector('.' + sectionClass);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
    closeMobileMenu();
}

// Handle navbar scroll effect
function handleNavbarScroll() {
    const navbar = document.getElementById('navbar');
    if (navbar) {
        if (window.scrollY > 50) {
            navbar.classList.add('navbar-scrolled');
        } else {
            navbar.classList.remove('navbar-scrolled');
        }
    }
    
    // Update scroll progress
    const scrollProgress = document.getElementById('scrollProgress');
    if (scrollProgress) {
        const scrolled = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
        scrollProgress.style.transform = `scaleX(${scrolled / 100})`;
    }
    
    // Update active nav link
    updateActiveNavLink();
}

// Update active navigation link based on scroll position
function updateActiveNavLink() {
    const sections = [
        'hero-section',
        'skills-section',
        'projects-section',
        'hobbies-section',
        'education-section'
    ];
    
    const navLinks = ['nav-home', 'nav-skills', 'nav-projects', 'nav-hobbies', 'nav-education'];
    
    for (let i = 0; i < sections.length; i++) {
        const section = document.querySelector('.' + sections[i]);
        if (section) {
            const rect = section.getBoundingClientRect();
            const navLink = document.getElementById(navLinks[i]);
            
            if (navLink) {
                if (rect.top <= 100 && rect.bottom >= 100) {
                    navLink.classList.add('active');
                } else {
                    navLink.classList.remove('active');
                }
            }
        }
    }
}

// Mobile menu toggle
function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    mobileMenu.classList.toggle('open');
}

function closeMobileMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    mobileMenu.classList.remove('open');
}

// Initialize everything
document.addEventListener('DOMContentLoaded', () => {
    renderNavbar();
    renderFooter();
    renderSkills();
    renderProjects();
    renderHobbies();
    renderEducation();
    
    // Initialize scroll progress
    handleNavbarScroll();
});

// Keep existing modal and copy functions
// ... (keep all the existing modal and copy functions from previous version)
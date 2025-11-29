// Module data
const modules = {
    'class510': {
        title: '5-10 Class',
        description: 'Foundation & Board Exams',
        content: 'Comprehensive learning materials for classes 5-10 covering all subjects and board exams.'
    },
    'class1112': {
        title: '11-12 Class',
        description: 'JEE, NEET, Boards & More',
        content: 'Advanced study resources for classes 11-12 including JEE, NEET, and board exam preparation.'
    },
    'btech': {
        title: 'BTech',
        description: 'Engineering & Tech Courses',
        content: 'Complete BTech course materials and engineering subjects for technical education.'
    },
    'stateexams': {
        title: 'State Govt Exams',
        description: 'Telangana & AP Exams',
        content: 'Preparation materials for Telangana and Andhra Pradesh state government exams.'
    },
    'centralexams': {
        title: 'Central Govt Exams',
        description: 'UPSC, SSC, Railways & More',
        content: 'Comprehensive resources for UPSC, SSC, Railways, and other central government exams.'
    },
    'transportfacility': {
        title: 'Transport Facility',
        description: 'Bus Timing & Route Planner',
        content: 'Interactive bus timing information and route planning tools for students.'
    },
    'financialguidance': {
        title: 'Financial Guidance',
        description: 'Budget & Fee Planning',
        content: 'Financial planning guidance, budget management, and fee structure information.'
    },
    'healthdiet': {
        title: 'Health & Diet Planner',
        description: 'Personalized Diet Plans',
        content: 'Personalized health and diet plans tailored to individual student needs.'
    },
    'timemanagement': {
        title: 'Time Management',
        description: 'Game Schedule Planner',
        content: 'Time management techniques and schedule planning tools for balanced academics and recreation.'
    },
    'organizenotes': {
        title: 'Organize Notes',
        description: 'AI Summaries from Videos/Files',
        content: 'AI-powered note organization with automatic summaries from videos and documents.'
    },
    'dashboard': {
        title: 'Personal Dashboard',
        description: 'Track Progress & Analysis',
        content: 'Personal progress tracking dashboard with detailed analysis of academic performance.'
    }
};

// Navigation function
function navigateTo(page) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(p => p.classList.remove('active'));
    
    if (page === 'home') {
        document.getElementById('home-page').classList.add('active');
    } else if (page === 'about') {
        document.getElementById('about-page').classList.add('active');
    }
}

// Open module function
function openModule(moduleId, moduleName) {
    const module = modules[moduleId];
    const content = document.getElementById('module-content');
    
    if (module) {
        content.innerHTML = `
            <h2 class="module-content-title">${module.title}</h2>
            <p class="module-content-text">${module.description}</p>
            <p class="module-content-text" style="margin-top: 1.5rem;">${module.content}</p>
            <p class="module-content-text" style="margin-top: 2rem; color: #a78bfa; font-style: italic;">More features and content coming soon...</p>
        `;
    }
    
    document.getElementById('home-page').classList.remove('active');
    document.getElementById('module-page').classList.add('active');
    window.scrollTo(0, 0);
}

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    console.log('EduBuddy AI Platform loaded successfully!');
});

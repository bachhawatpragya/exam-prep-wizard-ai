
// DOM Elements
document.addEventListener('DOMContentLoaded', function() {
    // Theme toggle
    const toggleBtn = document.getElementById('toggle-btn');
    const themeIcon = toggleBtn.querySelector('.theme-icon');
    let darkMode = false;

    // Form elements
    const examForm = document.getElementById('exam-form');
    const formView = document.getElementById('form-view');
    const planView = document.getElementById('plan-view');
    const planResult = document.getElementById('plan-result');
    const newPlanBtn = document.getElementById('new-plan');

    // Tips elements
    const tipSlider = document.getElementById('tip-slider');
    const tipDots = document.getElementById('tip-dots');
    const prevTipBtn = document.getElementById('prev-tip');
    const nextTipBtn = document.getElementById('next-tip');

    // Study tips data
    const studyTips = [
        {
            id: 1,
            icon: "🧠",
            title: "Mind-Body Connection",
            description: "Regular exercise improves memory retention and cognitive function. Even short 20-minute walks before studying can increase blood flow to your brain by up to 15%. Research shows that students who exercise regularly score 20% higher on memory tests than sedentary peers. Try incorporating brief movement breaks between study sessions for optimal brain performance."
        },
        {
            id: 2,
            icon: "⏰",
            title: "Spaced Repetition",
            description: "Instead of cramming, space out your study sessions. The spacing effect shows that information is better retained when reviewed at gradually increasing intervals. Start with a review after 1 day, then 3 days, then a week. This technique can improve long-term retention by up to 200% compared to mass studying. Use apps like Anki or RemNote to implement spaced repetition effectively."
        },
        {
            id: 3,
            icon: "🍎",
            title: "Nutrition & Brain Health",
            description: "Your brain consumes 20% of your body's calories. Foods rich in omega-3 fatty acids (like salmon and walnuts), antioxidants (berries), and complex carbohydrates (whole grains) have been shown to improve cognitive function. Stay hydrated - even mild dehydration reduces cognitive performance by 10-15%. Consider eating smaller, frequent meals during study sessions to maintain steady glucose levels."
        },
        {
            id: 4,
            icon: "😴",
            title: "Sleep & Memory Consolidation",
            description: "Sleep is critical for converting short-term memories into long-term ones through a process called consolidation. Students who sleep 7-9 hours perform 10% better on exams than those who don't. A 90-minute nap improves memory by up to 20%. Avoid all-nighters - they reduce recall by 40%. The optimal time to review material is right before sleep, as this improves retention during overnight processing."
        },
        {
            id: 5,
            icon: "🔄",
            title: "Active Recall",
            description: "Testing yourself is more effective than rereading. Close your books and actively recall information instead of passively reviewing it. Research shows this improves long-term retention by up to 50%. Create flashcards with questions on one side and answers on the other. Explain concepts aloud as if teaching someone else - known as the 'Feynman Technique' - to identify knowledge gaps and strengthen understanding."
        },
        {
            id: 6,
            icon: "🧩",
            title: "Interleaving Practice",
            description: "Mix up different topics or problem types during a study session rather than focusing on just one. This approach, called interleaving, forces your brain to continually retrieve different strategies, strengthening neural connections. Students who interleave their practice perform 40% better on tests than those who block-practice. While it feels more difficult, this productive struggle enhances long-term learning."
        },
        {
            id: 7,
            icon: "🎧",
            title: "Optimal Study Environment",
            description: "Create a dedicated study space with minimal distractions. Research shows that studying in the same physical environment improves recall by 20-40% due to environmental cues. Background noise should be kept under 70 decibels - classical music at a low volume or ambient noise can help some students focus. Natural lighting improves alertness and concentration by regulating circadian rhythms."
        },
        {
            id: 8,
            icon: "📱",
            title: "Digital Distraction Management",
            description: "The average student is distracted by digital notifications every 3-5 minutes, and it takes 23 minutes to regain full concentration after a distraction. Use apps like Forest, Freedom or Focus@Will to block distracting websites during study sessions. The Pomodoro Technique (25-minute focused sessions with 5-minute breaks) can help maintain concentration and reduce the urge to check devices."
        }
    ];

    // Study resources data
    const studyResources = {
        math: [
            { name: "Khan Academy", url: "https://www.khanacademy.org/math" },
            { name: "Paul's Online Math Notes", url: "https://tutorial.math.lamar.edu/" },
            { name: "MIT OpenCourseWare", url: "https://ocw.mit.edu/courses/mathematics/" }
        ],
        science: [
            { name: "Khan Academy Science", url: "https://www.khanacademy.org/science" },
            { name: "NASA STEM Resources", url: "https://www.nasa.gov/stem/" },
            { name: "Science Daily", url: "https://www.sciencedaily.com/" }
        ],
        history: [
            { name: "Crash Course History", url: "https://thecrashcourse.com/courses/world-history/" },
            { name: "History.com", url: "https://www.history.com/" },
            { name: "Khan Academy History", url: "https://www.khanacademy.org/humanities/world-history" }
        ],
        english: [
            { name: "Purdue OWL", url: "https://owl.purdue.edu/" },
            { name: "Grammarly", url: "https://www.grammarly.com/" },
            { name: "Project Gutenberg", url: "https://www.gutenberg.org/" }
        ],
        languages: [
            { name: "Duolingo", url: "https://www.duolingo.com/" },
            { name: "BBC Languages", url: "https://www.bbc.co.uk/languages/" },
            { name: "FluentU", url: "https://www.fluentu.com/" }
        ],
        programming: [
            { name: "freeCodeCamp", url: "https://www.freecodecamp.org/" },
            { name: "Codecademy", url: "https://www.codecademy.com/" },
            { name: "MDN Web Docs", url: "https://developer.mozilla.org/" }
        ],
        general: [
            { name: "Coursera", url: "https://www.coursera.org/" },
            { name: "edX", url: "https://www.edx.org/" },
            { name: "Quizlet", url: "https://quizlet.com/" }
        ]
    };

    // Initialize theme
    function toggleTheme() {
        darkMode = !darkMode;
        if (darkMode) {
            document.body.classList.add('dark-mode');
            themeIcon.textContent = '☀️';
        } else {
            document.body.classList.remove('dark-mode');
            themeIcon.textContent = '🌙';
        }
    }

    toggleBtn.addEventListener('click', toggleTheme);

    // Initialize tips slider
    let currentTip = 0;
    let slideInterval;

    function initializeTips() {
        // Clear existing content
        tipSlider.innerHTML = '';
        tipDots.innerHTML = '';

        // Add tips slides
        studyTips.forEach((tip, index) => {
            const slide = document.createElement('div');
            slide.className = `tip-slide ${index === currentTip ? 'active' : ''}`;
            slide.innerHTML = `
                <div class="tip-icon-container">
                    <div class="tip-icon">${tip.icon}</div>
                </div>
                <h3 class="tip-title">${tip.title}</h3>
                <p class="tip-description">${tip.description}</p>
            `;
            tipSlider.appendChild(slide);

            // Add navigation dot
            const dot = document.createElement('div');
            dot.className = `nav-dot ${index === currentTip ? 'active' : ''}`;
            dot.addEventListener('click', () => goToTip(index));
            tipDots.appendChild(dot);
        });

        // Start automatic sliding
        startAutoSlide();
    }

    function startAutoSlide() {
        // Clear any existing interval
        if (slideInterval) clearInterval(slideInterval);
        
        // Set new interval
        slideInterval = setInterval(() => {
            nextTip();
        }, 6000);
    }

    function nextTip() {
        goToTip((currentTip + 1) % studyTips.length);
    }

    function prevTip() {
        goToTip((currentTip - 1 + studyTips.length) % studyTips.length);
    }

    function goToTip(index) {
        // Update slides
        const slides = tipSlider.querySelectorAll('.tip-slide');
        slides[currentTip].classList.remove('active');
        slides[index].classList.add('active');

        // Update dots
        const dots = tipDots.querySelectorAll('.nav-dot');
        dots[currentTip].classList.remove('active');
        dots[index].classList.add('active');

        // Update current tip
        currentTip = index;

        // Reset interval when manually changing
        startAutoSlide();
    }

    // Tips navigation
    prevTipBtn.addEventListener('click', prevTip);
    nextTipBtn.addEventListener('click', nextTip);

    // Generate actual study plan based on form input
    function generateStudyPlan(examName, examDate, subjects, confidenceLevels, hoursPerDay) {
        // Calculate days until exam
        const now = new Date();
        const examDateObj = new Date(examDate);
        const daysLeft = Math.ceil((examDateObj - now) / (1000 * 60 * 60 * 24));
        
        // Create plan header
        let planHTML = `
            <div class="plan-header">
                <h2 class="plan-title">Your Custom Study Plan for ${examName}</h2>
                <div class="plan-meta">
                    <div class="meta-item">
                        <span class="meta-icon">📅</span>
                        <p>Exam Date: <span style="font-weight: bold;">${examDate}</span></p>
                    </div>
                    <div class="meta-item">
                        <span class="meta-icon">⏰</span>
                        <p>Days Left: <span style="font-weight: bold;">${daysLeft}</span></p>
                    </div>
                    <div class="meta-item">
                        <span class="meta-icon">📖</span>
                        <p>Daily Study Time: <span style="font-weight: bold;">${hoursPerDay} hours</span></p>
                    </div>
                </div>
            </div>
            <div class="subject-list">
        `;

        // Split subjects and confidence levels
        const subjectList = subjects.split(',').map(s => s.trim());
        const confidenceList = confidenceLevels.split(',').map(c => c.trim().toLowerCase());
        
        // Calculate total hours based on confidence
        let totalHours = parseFloat(hoursPerDay) * daysLeft;
        let totalWeightedHours = 0;
        
        const subjectData = subjectList.map((subject, index) => {
            const confidence = confidenceList[index] || 'medium';
            let weight;
            
            switch (confidence) {
                case 'low':
                    weight = 3;
                    break;
                case 'medium':
                    weight = 2;
                    break;
                case 'high':
                    weight = 1;
                    break;
                default:
                    weight = 2;
            }
            
            totalWeightedHours += weight;
            
            return {
                name: subject,
                confidence: confidence,
                weight: weight
            };
        });
        
        // Calculate hours per subject and generate cards
        subjectData.forEach(subject => {
            const subjectHours = Math.round((subject.weight / totalWeightedHours) * totalHours);
            const dailyHours = (subjectHours / daysLeft).toFixed(1);
            
            // Get practice questions based on subject
            const questions = generatePracticeQuestions(subject.name);
            
            // Get study resources
            const resources = getStudyResources(subject.name);
            
            planHTML += `
                <div class="subject-card ${subject.confidence}">
                    <h3 class="subject-name">${subject.name}</h3>
                    <div class="subject-meta">
                        <div>
                            <span class="subject-meta-label">Confidence:</span>
                            <span class="subject-meta-value confidence-${subject.confidence}">${capitalizeFirstLetter(subject.confidence)}</span>
                        </div>
                        <div>
                            <span class="subject-meta-label">Total Hours:</span>
                            <span class="subject-meta-value">${subjectHours}</span>
                        </div>
                        <div>
                            <span class="subject-meta-label">Daily Study:</span>
                            <span class="subject-meta-value">${dailyHours} hours/day</span>
                        </div>
                    </div>
                    <div>
                        <h4 class="questions-title">Practice Questions:</h4>
                        <ul class="question-list">
                            ${questions.map(q => `<li class="question-item"><span class="question-check">✔</span> ${q}</li>`).join('')}
                        </ul>
                    </div>
                    <div class="study-resources">
                        <h4 class="resources-title">Recommended Resources:</h4>
                        <div>
                            ${resources.map(r => `<a href="${r.url}" target="_blank" class="resource-link">${r.name}</a>`).join('')}
                        </div>
                    </div>
                </div>
            `;
        });
        
        // Add footer
        planHTML += `
            </div>
            <div class="plan-footer">
                <p class="plan-tip">Tips: Break your daily hours into focused sessions (e.g., 25-min blocks). Good luck!</p>
                <button class="new-plan-button" id="new-plan">Create Another Plan</button>
            </div>
        `;
        
        return planHTML;
    }

    // Helper functions for study plan generation
    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    function generatePracticeQuestions(subject) {
        // Default questions (if no specific questions are found)
        const defaultQuestions = [
            `What are the core concepts of ${subject}?`,
            `Explain the relationship between key ${subject} topics.`,
            `Solve a typical ${subject} problem using the methods you've studied.`
        ];
        
        // Subject-specific questions
        const subjectQuestions = {
            'math': [
                'Solve a complex equation step by step, showing your work.',
                'Prove a mathematical theorem and explain its significance.',
                'Apply mathematical concepts to solve a real-world problem.',
                'Explain the relationship between different mathematical operations.',
                'Create a visual representation of a mathematical concept.'
            ],
            'physics': [
                'Apply physical laws to analyze a real-world scenario.',
                'Derive a physical formula from first principles.',
                'Explain how a specific technology works using physics concepts.',
                'Design an experiment to test a physical principle.',
                'Compare and contrast related physics theories.'
            ],
            'chemistry': [
                'Balance a complex chemical equation.',
                'Explain the relationship between molecular structure and chemical properties.',
                'Predict the outcome of a chemical reaction and explain your reasoning.',
                'Design a laboratory procedure to synthesize a specific compound.',
                'Analyze a chemical reaction in terms of energy changes.'
            ],
            'biology': [
                'Explain a biological process at the molecular level.',
                'Compare and contrast related biological systems.',
                'Discuss how environmental factors affect biological processes.',
                'Analyze the evolutionary significance of a biological adaptation.',
                'Describe the relationship between structure and function in a biological system.'
            ],
            'history': [
                'Analyze the causes and effects of a historical event.',
                'Compare different historical perspectives on the same event.',
                'Evaluate the reliability of different historical sources.',
                'Trace the development of a social or political movement over time.',
                'Explain how a historical event influences the present day.'
            ],
            'english': [
                'Analyze the themes and literary devices in a specific text.',
                'Compare and contrast different literary works or authors.',
                'Construct a persuasive argument on a controversial topic.',
                'Evaluate the effectiveness of a piece of writing.',
                'Explain how historical context influences a literary work.'
            ]
        };
        
        // Check if we have specific questions for this subject
        for (let key in subjectQuestions) {
            if (subject.toLowerCase().includes(key)) {
                // Select 3 random questions from the subject-specific list
                return shuffleArray([...subjectQuestions[key]]).slice(0, 3);
            }
        }
        
        // Return default questions if no match
        return defaultQuestions;
    }

    function getStudyResources(subject) {
        // Default to general resources
        let resources = studyResources.general;
        
        // Check for subject match
        for (let key in studyResources) {
            if (subject.toLowerCase().includes(key)) {
                resources = studyResources[key];
                break;
            }
        }
        
        // Return 3 resources
        return resources;
    }

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    // Handle form submission
    examForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const examName = document.getElementById('exam-name').value;
        const examDate = document.getElementById('exam-date').value;
        const subjects = document.getElementById('exam-subjects').value;
        const confidenceLevels = document.getElementById('confidence-levels').value;
        const hoursPerDay = document.getElementById('hours-per-day').value;
        
        // Generate the study plan
        const planHTML = generateStudyPlan(examName, examDate, subjects, confidenceLevels, hoursPerDay);
        
        // Display the plan
        planResult.innerHTML = planHTML;
        
        // Switch views
        formView.style.display = 'none';
        planView.style.display = 'block';
        
        // Re-attach event listener to new-plan button
        document.getElementById('new-plan').addEventListener('click', function() {
            planView.style.display = 'none';
            formView.style.display = 'block';
        });
    });

    // Initialize tips slider
    initializeTips();

    // Fix the navigation links
    document.querySelectorAll('.footer-link').forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Only prevent default for section links
            if (href.startsWith('#')) {
                e.preventDefault();
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
});

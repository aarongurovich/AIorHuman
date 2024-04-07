let currentQuestionIndex = 0;
let score = 0;
let currentQuizQuestions =  []; 

document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navbar = document.querySelector('.navbar');

    hamburger.addEventListener('click', function() {

        if (navbar.style.width === '250px') {
            navbar.style.width = '0';
            hamburger.innerHTML = '&#9776;';
        } else {
            navbar.style.width = '250px';
            hamburger.innerHTML = '&times;';
        }
    });
});



document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    document.getElementById('confirmation-message').style.display = 'block';
    setTimeout(function() {
        document.getElementById('confirmation-message').style.display = 'none';
    }, 3000); 

});

document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            const topOffset = 60; 
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - topOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
    });
});


  
    



document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('quizContainer').style.display = 'none';

    document.querySelectorAll('.QuizButton').forEach(button => {
        button.addEventListener('click', function() {
            startSpecificQuiz(this.id);
            removeQuizButtons();
        });
    });
});







const questions1 = [
    {
        text: "In the quiet breath of dawn, where shadows fade to light, The sun stretches its fingers, banishing the night. Birds sing in chorus, as if to celebrate the morn, A melody of hope, a world reborn. Each day a painting, nature's brush and palette bright, A dance of light and color, till day gives way to night.",
        answer: "AI"
    },
    {
        text: "The line-storm clouds fly tattered and swift, The road is forlorn all day, Where a myriad snowy quartz stones lift, And the hoof-prints vanish away. The roadside flowers, too wet for the bee, Expend their bloom in vain. Come over the hills and far with me, And be my love in the rain.",
        answer: "Human"
    },
    {
        text: "Beneath the emerald canopies, where whispers dwell and roam, Lies a world untouched by time, a secret, sacred home. Leaves rustle with the tales of old, of ages past and gone, Each tree a guardian of history, of battles lost and won. Here, the earth speaks in sighs, in a language deep and vast, A testament to the future, a memory of the past.",
        answer: "AI"
    },
    {
        text: "Oh, the sea sings a song, a lament for the lost, Its waves a symphony, its beauty tempest-tossed. Each crest and fall, a story of the deep, Of sailors' dreams, forever in its keep. The moonlit tide, a dance of grace and might, A whisper of the ocean's endless plight.",
        answer: "AI"
    },
    {
        text: "If I can stop one heart from breaking, I shall not live in vain; If I can ease one life the aching, Or cool one pain, Or help one fainting robin Unto his nest again, I shall not live in vain.",
        answer: "Human"
    },
    
    
];

const questions2 = [
    {
        text: "Is the creator of the image below AI or Human?",
        img: "aiimg.jpeg", 
        answer: "AI"
    },
    {
        text: "Is the creator of the image below AI or Human?",
        img: "humanimg1.jpeg",
        answer: "Human"
    },
    {
        text: "Is the creator of the image below AI or Human?",
        img: "aiimg2.jpeg", 
        answer: "AI"
    },
    {
        text: "Is the creator of the image below AI or Human?",
        img: "aiimg3.jpeg",
        answer: "AI"
    },
    {
        text: "Is the creator of the image below AI or Human?",
        img: "humanimg2.jpeg", 
        answer: "Human"
    },
    
];

const questions3 = [
    {
        text: "Is the creator of the logo below AI or Human?",
        img: "humanlogo1.jpeg", 
        answer: "Human"
    },
    {
        text: "Is the creator of the logo below AI or Human?",
        img: "humanlogo2.jpeg",
        answer: "Human"
    },
    {
        text: "Is the creator of the logo below AI or Human?",
        img: "ailogo1.jpeg", 
        answer: "AI"
    },
    {
        text: "Is the creator of the logo below AI or Human?",
        img: "ailogo2.jpeg",
        answer: "AI"
    },
    {
        text: "Is the creator of the logo below AI or Human?",
        img: "ailogo3.jpeg", 
        answer: "AI"
    },
];

const questions4 = [
    { text: "Newly Discovered Coral Reef Species Glows in the Dark, Scientists Baffled, In a groundbreaking discovery, marine biologists have identified a new species of coral in the depths of the Pacific Ocean that exhibits a unique bioluminescent property, emitting a striking glow in the dark. Unlike anything previously documented, this coral's glow is thought to be a form of communication or a means to attract plankton. The discovery opens new avenues for research into underwater ecosystems and bioluminescent phenomena.", answer: "AI" },
    { text: "Local Chef Invents Dish That Changes Flavor as You Eat It, A culinary wizard from a small coastal town has become an overnight sensation with the creation of a revolutionary dish that changes its flavor profile from savory to sweet as you eat it. Utilizing a unique combination of temperature-sensitive spices and molecular gastronomy techniques, the chef has created a dining experience that keeps diners guessing with every bite. Food enthusiasts and critics alike are flocking to experience this innovative culinary delight.", answer: "AI" },
    { text: "Residents of Maplewood, a small town nestled in the mountains, were treated to a breathtaking spectacle last Thursday evening when the sky turned a vivid shade of purple. Meteorologists explain that this rare phenomenon was the result of a unique combination of atmospheric conditions, including the scattering of light particles through a specific type of cloud formation. The event, which lasted for several hours, has become the talk of the town, with many locals capturing stunning photographs of the purple sky.", answer: "AI" },
    { text: "Hundreds of pounds of cooked pasta mysteriously dumped in New Jersey woods, It seems highly unlikely, unless you were recently walking near the river basin in Old Bridge, New Jersey, where hundreds of pounds of cooked pasta were dumped in the area last month. Their origins remain a mystery.", answer: "Human" },
    { text: "California girl gets license to own a unicorn, California has granted a little girl a first-of-its-kind license to own a unicorn, provided the 7-year-old can find one. She had to agree to provide nourishment like watermelon, exposure to sunlight, moonbeams and rainbows, and polish its horn with a soft cloth.", answer: "Human" },
];

const questions5 = [
    { 
        text: "Listen to the following music piece. Was it created by AI or Human?",
        audio: "aisong.mp3", 
        answer: "AI" 
    },
    { 
        text: "Listen to the following music piece. Was it created by AI or Human?",
        audio: "aisong1.mp3",
        answer: "AI" 
    },
    { 
        text: "Listen to the following music piece. Was it created by AI or Human?",
        audio: "aisong3.mp3", 
        answer: "AI" 
    },
    { 
        text: "Listen to the following music piece. Was it created by AI or Human?",
        audio: "humansong1.mp3", 
        answer: "Human" 
    },
    { 
        text: "Listen to the following music piece. Was it created by AI or Human?",
        audio: "humansong2.mp3", 
        answer: "Human" 
    },
    
];

const questions6 = [
    { 
        text: "Watch the following video clip. Was it created by AI or Human?",
        video: "aivid1.mp4", 
        answer: "AI" 
    },
    { 
        text: "Watch the following video clip. Was it created by AI or Human?",
        video: "aivid2.mp4", 
        answer: "AI" 
    },
    { 
        text: "Watch the following video clip. Was it created by AI or Human?",
        video: "aivid3.mp4", 
        answer: "AI" 
    },
    { 
        text: "Watch the following video clip. Was it created by AI or Human?",
        video: "humanvid.mp4", 
        answer: "Human" 
    },
    { 
        text: "Watch the following video clip. Was it created by AI or Human?",
        video: "humanvid1.mp4", 
        answer: "Human" 
    },
    
];




function startSpecificQuiz(quizButtonId) {
    currentQuestionIndex = 0;
    score = 0;

    switch (quizButtonId) {
        case 'poemsQuizButton':
            currentQuizQuestions = questions1;
            break;
        case 'imagesQuizButton':
            currentQuizQuestions = questions2;
            break;
        case 'logosQuizButton':
            currentQuizQuestions = questions3;
            break;
        case 'newsQuizButton':
            currentQuizQuestions = questions4;
            break;
        case 'songsQuizButton':
            currentQuizQuestions = questions5;
            break;
        case 'videosQuizButton':
            currentQuizQuestions = questions6;
            break;
        
    }

    shuffleQuestions();
    displayQuestion();
}

function shuffleQuestions() {
    for (let i = currentQuizQuestions.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [currentQuizQuestions[i], currentQuizQuestions[j]] = [currentQuizQuestions[j], currentQuizQuestions[i]]; // Swap elements
    }
}

function displayQuestion() {
    const quizContainer = document.getElementById('quizContainer');
    if (!quizContainer) {
        console.error('Quiz container not found');
        return;
    }
    
    if (currentQuestionIndex >= currentQuizQuestions.length) {
        endQuiz();
        return;
    }
    
    const question = currentQuizQuestions[currentQuestionIndex];
    let contentHtml = `<p>${question.text}</p>`;
    
    if (question.img) {
        contentHtml += `<img src="${question.img}" alt="Quiz Image">`;
    }

    if (question.audio) {
        contentHtml += `<audio controls><source src="${question.audio}" type="audio/mp3">Your browser does not support the audio element.</audio>`;
    }
    
    if (question.video) {
        contentHtml += `<video controls width="250"><source src="${question.video}" type="video/mp4">Your browser does not support the video tag.</video>`;
    }

    contentHtml += `
        <button id="aiButton" onclick="submitAnswer('AI')">AI</button>
        <button id="humanButton" onclick="submitAnswer('Human')">Human</button>
        <div id="feedback"></div>
    `;
    
    quizContainer.innerHTML = contentHtml;
    quizContainer.style.display = 'block'; 
}


function submitAnswer(userAnswer) {
    const question = currentQuizQuestions[currentQuestionIndex];
    let feedbackText = '';
    const feedbackElement = document.getElementById('feedback');

    document.getElementById('aiButton').disabled = true;
    document.getElementById('humanButton').disabled = true;

    if (question.answer === userAnswer) {
        score++;
        feedbackText = 'Correct! You got it right.';
        feedbackElement.className = 'feedback-correct';
    } else {
        feedbackText = `Incorrect. The correct answer was ${question.answer}.`;
        feedbackElement.className = 'feedback-incorrect';
    }

    feedbackElement.textContent = feedbackText;

    setTimeout(() => {
        currentQuestionIndex++;
        displayQuestion();
    }, 1000);
}

function endQuiz() {
    if(score == currentQuizQuestions.length){
    document.getElementById('quizContainer').innerHTML = `
        <p>Your score: ${score} out of ${currentQuizQuestions.length}.</p> <p>Great Job! You can tell the difference between AI and Humans!!!</p>
        <button onclick="restartQuiz()">Restart Quiz</button>
        <button onclick="backToHomepage()">Choose a different quiz</button>`;
    }
    else{
        document.getElementById('quizContainer').innerHTML = `
        <p>Your score: ${score} out of ${currentQuizQuestions.length}.</p> <p>Good try, keep practicing!!!</p>
        <button onclick="restartQuiz()">Restart Quiz</button>
        <button onclick="backToHomepage()">Back to Quizzes</button>`;
    }
    }


    function restartQuiz() {
        
        let quizType;
        if (currentQuizQuestions === questions1) {
            quizType = 'poemsQuizButton';
        } else if (currentQuizQuestions === questions2) {
            quizType = 'imagesQuizButton';
        } else if (currentQuizQuestions === questions3) {
            quizType = 'logosQuizButton';
        } else if (currentQuizQuestions === questions4) {
            quizType = 'newsQuizButton';
        } else if (currentQuizQuestions === questions5) {
            quizType = 'songsQuizButton';
        } else if (currentQuizQuestions === questions6) {
            quizType = 'videosQuizButton';
        }
    
    
        if (quizType) {
            startSpecificQuiz(quizType);
        } else {
            console.error('Unable to determine the current quiz type for restarting.');
        }
    }
    
function backToHomepage() {
    document.getElementById('quizContainer').style.display = 'none';
    document.querySelectorAll('.QuizButton').forEach(button => button.style.display = '');
}

function removeQuizButtons() {
    document.querySelectorAll('.QuizButton').forEach(button => button.style.display = 'none');
}


const story = {
    start: {
        text: "You're leading an AI revolution, steering the development of a super smart AI. Your choices will either unlock amazing possibilities or bring new challenges. How will you guide?",
        options: [
            { text: "Use AI to improve healthcare and help people live longer.", next: "healthcareRevolution" },
            { text: "Direct AI towards saving the environment and fighting climate change.", next: "environmentalRestoration" },
            { text: "Harness AI to revolutionize education and personalize learning for students.", next: "educationRevolution" },
            { text: "Deploy AI in finance to optimize investments and minimize risks.", next: "financeOptimization" }
        ]
    },
    healthcareRevolution: {
        text: "Your AI changes healthcare, predicting diseases early and personalizing treatments. What's next?",
        options: [
            { text: "Use AI for safer surgeries and medical procedures.", next: "roboticSurgeries" },
            { text: "Deploy AI to manage global health crises and predict pandemics.", next: "pandemicManagement" }
        ]
    },
    environmentalRestoration: {
        text: "Your AI finds ways to fix climate change and protect nature. How can you make AI do more?",
        options: [
            { text: "Help AI make renewable energy better.", next: "renewableEnergy" },
            { text: "Let AI watch over endangered animals and their habitats.", next: "speciesProtection" }
        ]
    },
    educationRevolution: {
        text: "Your AI transforms education, personalizing learning for each student and revolutionizing teaching methods. What's the next step?",
        options: [
            { text: "Utilize AI for adaptive learning platforms and virtual tutors.", next: "adaptiveLearning" },
            { text: "Integrate AI into school administration for more efficient operations.", next: "administrativeIntegration" }
        ]
    },
    financeOptimization: {
        text: "Your AI optimizes financial decisions, analyzing market trends and minimizing risks. What's your next move?",
        options: [
            { text: "Develop AI-driven investment strategies for better returns.", next: "investmentStrategies" },
            { text: "Utilize AI for fraud detection and cybersecurity in finance.", next: "fraudDetection" }
        ]
    },
    roboticSurgeries: {
        text: "AI-controlled surgeries become common, making them safer and more precise. What's your next move to showcase AI's power?",
        options: [
            { text: "Expand AI into other medical procedures for better healthcare.", next: "aiMedicalProcedures" },
            { text: "Explore other sectors where AI precision can make a difference.", next: "otherSectorExploration" }
        ]
    },
    pandemicManagement: {
        text: "Your AI predicts and handles pandemics, saving lives. How can you further demonstrate AI's capabilities?",
        options: [
            { text: "Extend AI's predictive abilities to other areas for societal benefit.", next: "aiPredictiveAbilities" },
            { text: "Develop AI-driven solutions for other global challenges.", next: "aiGlobalChallenges" }
        ]
    },
    renewableEnergy: {
        text: "AI helps make renewable energy like solar and wind power better. How do you showcase AI's power in this field?",
        options: [
            { text: "Expand AI's role to optimize energy storage for renewable sources.", next: "aiEnergyStorage" },
            { text: "Use AI to streamline energy distribution and consumption.", next: "aiEnergyDistribution" }
        ]
    },
    speciesProtection: {
        text: "AI watches over endangered animals, saving some from disappearing forever. How can you further demonstrate AI's power in conservation?",
        options: [
            { text: "Utilize AI to monitor and protect other ecosystems and natural resources.", next: "aiEcosystemMonitoring" },
            { text: "Explore AI applications in biodiversity research and habitat restoration.", next: "aiBiodiversityResearch" }
        ]
    },
    adaptiveLearning: {
        text: "AI's adaptive learning platforms and virtual tutors revolutionize education, catering to individual student needs and optimizing learning outcomes.",
        options: [] // End of this path
    },
    administrativeIntegration: {
        text: "Integrating AI into school administration streamlines operations, from scheduling to resource allocation, enhancing efficiency and resource utilization.",
        options: [] // End of this path
    },
    investmentStrategies: {
        text: "AI-driven investment strategies maximize returns and minimize risks, leveraging data analytics and predictive modeling for informed financial decisions.",
        options: [] // End of this path
    },
    fraudDetection: {
        text: "AI's fraud detection and cybersecurity measures safeguard financial transactions, detecting and preventing fraudulent activities in real-time.",
        options: [] // End of this path
    },
    aiMedicalProcedures: {
        text: "AI's precision proves invaluable in various medical procedures, further enhancing healthcare quality and patient outcomes.",
        options: [] // End of this path
    },
    otherSectorExploration: {
        text: "You explore AI's potential in diverse sectors like agriculture, transportation, and finance, revolutionizing industries and improving efficiency across the board.",
        options: [] // End of this path
    },
    aiPredictiveAbilities: {
        text: "AI's predictive prowess extends beyond pandemics, foreseeing trends in economics, climate, and social dynamics, enabling proactive interventions and informed decision-making.",
        options: [] // End of this path
    },
    aiGlobalChallenges: {
        text: "You harness AI's problem-solving capabilities to address pressing global issues like poverty, inequality, and education, ushering in positive societal transformation on a global scale.",
        options: [] // End of this path
    },
    aiEnergyStorage: {
        text: "AI revolutionizes energy storage solutions, maximizing the efficiency and reliability of renewable energy sources, accelerating the transition towards a sustainable future.",
        options: [] // End of this path
    },
    aiEnergyDistribution: {
        text: "By optimizing energy distribution and consumption, AI ensures equitable access to clean energy resources, powering communities worldwide while minimizing environmental impact.",
        options: [] // End of this path
    },
    aiEcosystemMonitoring: {
        text: "AI's continuous monitoring and analysis safeguard diverse ecosystems and natural resources, preserving biodiversity and fostering environmental sustainability for future generations.",
        options: [] // End of this path
    },
    aiBiodiversityResearch: {
        text: "AI-driven research accelerates biodiversity conservation efforts, unlocking new insights into ecosystems and enabling targeted interventions to protect endangered species and habitats.",
        options: [] // End of this path
    }
};




function restartStory() {
    renderStoryPoint("start");
    // Additional reset logic if needed
}

// Update the renderStoryPoint function to conditionally show a restart button
function renderStoryPoint(storyPoint) {
    const textElement = document.getElementById("storyText");
    const optionsElement = document.getElementById("storyOptions");
    
    textElement.textContent = story[storyPoint].text;
    optionsElement.innerHTML = ""; 
    
    story[storyPoint].options.forEach(option => {
        const button = document.createElement("button");
        button.textContent = option.text;
        button.onclick = () => renderStoryPoint(option.next);
        optionsElement.appendChild(button);
    });

    // Show a restart button if there are no options (end of a path)
    if (story[storyPoint].options.length === 0) {
        const restartButton = document.createElement("button");
        restartButton.textContent = "Restart Story and Try a Different Path";
        restartButton.onclick = restartStory;
        optionsElement.appendChild(restartButton);
    }
}




renderStoryPoint("start");

document.querySelector('.start-button').addEventListener('click', function() {
    this.classList.add('clicked'); // Add a class to signify the button has been clicked
    setTimeout(() => {
        this.classList.remove('clicked'); // Remove the class after 150 milliseconds
    }, 150);
});




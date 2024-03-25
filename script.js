let currentQuestionIndex = 0;
let score = 0;
let currentQuizQuestions =  []; // Default to questions1, will be updated dynamically

document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navbar = document.querySelector('.navbar');

    hamburger.addEventListener('click', function() {
        // Check if navbar is open
        if (navbar.style.width === '250px') {
            navbar.style.width = '0';
            hamburger.innerHTML = '&#9776;'; // Hamburger icon
        } else {
            navbar.style.width = '250px';
            hamburger.innerHTML = '&times;'; // Close icon
        }
    });
});

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    document.getElementById('confirmation-message').style.display = 'block';
    setTimeout(function() {
        document.getElementById('confirmation-message').style.display = 'none';
    }, 3000); // Hide the confirmation message after 3 seconds
    // You can optionally add code here to clear the form fields
});

document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            const topOffset = 60; // Adjust based on your fixed header height or any offset you prefer
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
    // Hide the quiz container initially
    document.getElementById('quizContainer').style.display = 'none';

    // Setup for all homepage buttons
    document.querySelectorAll('.QuizButton').forEach(button => {
        button.addEventListener('click', function() {
            startSpecificQuiz(this.id); // Start the quiz based on the button id
            removeQuizButtons(); // Remove all quiz buttons
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
    { text: "Placeholder question for Quiz 5, Question 1", answer: "AI" },
    // Add more questions as needed
];

const questions6 = [
    { text: "Placeholder question for Quiz 6, Question 1", answer: "AI" },
    // Add more questions as needed
];


document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('quizContainer').style.display = 'none';

    document.querySelectorAll('.QuizButton').forEach(button => {
        button.addEventListener('click', function() {
            startSpecificQuiz(this.id);
            removeQuizButtons();
        });
    });
});

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
    
    contentHtml += `
        <button id="aiButton" onclick="submitAnswer('AI')">AI</button>
        <button id="humanButton" onclick="submitAnswer('Human')">Human</button>
        <div id="feedback"></div>
    `;
    
    quizContainer.innerHTML = contentHtml;
    quizContainer.style.display = 'block'; // Make sure to display the container
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
    }, 2000);
}

function endQuiz() {
    if(score == currentQuizQuestions.length){
    document.getElementById('quizContainer').innerHTML = `
        <p>Your score: ${score} out of ${currentQuizQuestions.length}.</p> <p>Great Job! You are not prone to AI Deception!!!</p>
        <button onclick="restartQuiz()">Restart Quiz</button>
        <button onclick="backToHomepage()">Back to Homepage</button>`;
    }
    else{
        document.getElementById('quizContainer').innerHTML = `
        <p>Your score: ${score} out of ${currentQuizQuestions.length}.</p> <p>Oh No! You are prone to AI Deception!!!</p>
        <button onclick="restartQuiz()">Restart Quiz</button>
        <button onclick="backToHomepage()">Back to Homepage</button>`;
    }
    }


    function restartQuiz() {
        // Determine the current quiz type based on the currentQuizQuestions array
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
    
        // Restart the quiz of the determined type
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
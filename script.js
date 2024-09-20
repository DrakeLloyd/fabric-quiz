/* -------------------------------------
T-Shirt Fabric Quiz 
Bulkapparel.com
- Drake Lloyd
-------------------------------------- */


/* -------------------------------------
   Quiz Data - Questions and Answers
-------------------------------------- */

const quizData = [
  {
    question: "What type of activity will you use the shirt for?",
    answers: [
      { text: "Casual everyday wear", fabrics: ["100% Cotton", "Cotton Ringspun"] },
      { text: "Sports or performance-related", fabrics: ["Polyester", "Spandex"] },
      { text: "Going out or trendy casual", fabrics: ["Rayon"] },
      { text: "Eco-conscious activites", fabrics: ["Recycled"] }
    ]
  },
  {
    question: "How do you prefer the t-shirt to feel?",
    answers: [
      { text: "Crisp and breathable", fabrics: ["100% Cotton"] },
      { text: "Smooth and durable", fabrics: ["Polyester", "Spandex"] },
      { text: "Soft and eco-friendly", fabrics: ["Recycled", "Rayon"] },
      { text: "Stretchy and form-fitting", fabrics: ["Spandex"] }
    ]
  },
  {
    question: "How important is the feel or softness of the fabric?",
    answers: [
      { text: "Extremely important", fabrics: ["Cotton Ringspun", "Rayon"] },
      { text: "Somewhat important", fabrics: ["100% Cotton", "Recycled"] },
      { text: "I need a stretchy, form-fitting material", fabrics: ["Spandex"] },
      { text: "Durability matters more than softness", fabrics: ["Polyester"] }
    ]
  },
  {
    question: "Which description fits your ideal t-shirt style?",
    answers: [
      { text: "Basic and classic", fabrics: ["100% Cotton", "Cotton Ringspun"] },
      { text: "Athletic and functional", fabrics: ["Polyester", "Spandex"] },
      { text: "Soft and drapey", fabrics: ["Rayon"] },
      { text: "Modern and sustainable", fabrics: ["Recycled"] }
    ]
  },
  {
    question: "What best describes your t-shirt collection?",
    answers: [
      { text: "Versatile and reliable for everyday use", fabrics: ["100% Cotton", "Cotton Ringspun"] },
      { text: "Performance and durability-focused", fabrics: ["Polyester", "Spandex"] },
      { text: "Unique and soft", fabrics: ["Rayon"] },
      { text: "Eco-conscious choices", fabrics: ["Recycled"] }
    ]
  },
  {
    question: "How long do you expect your t-shirts to last?",
    answers: [
      { text: "Long-lasting and durable", fabrics: ["Polyester", "Recycled"] },
      { text: "Comfortable with some stretch", fabrics: ["Cotton Ringspun", "Spandex"] },
      { text: "Soft but replaceable over time", fabrics: ["Rayon"] },
      { text: "Sustainable and long-lasting", fabrics: ["Recycled"] }
    ]
  }
];



/* -------------------------------------
   Fabric Information - Descriptions and Links
-------------------------------------- */


const fabricInfo = {
  "100% Cotton": {
    description: "100% Cotton fabric is a timeless choice, known for its breathability, softness, and natural feel. It is perfect for casual everyday wear, keeping you comfortable in a wide range of environments. Cotton is highly absorbent and easy to care for, making it a favorite for both men and women looking for a classic, durable t-shirt that can be worn year-round.",
    fabricLink: "https://www.bulkapparel.com/styles?fabrics=cotton100",
    mens: {
      tshirt: "G500",
      tshirtDescription: "Men's Gildan Heavy Cotton T-Shirt",
      image: "//www.bulkapparel.com/image/fashion-wear/16_fm.jpg",
      link: "https://www.bulkapparel.com/tshirts/g500-gildan-t-shirt-5000-heavy-cotton-53"
    },
    womens: {
      tshirt: "5000L",
      tshirtDescription: "Women's Gildan Heavy Cotton T-Shirt",
      image: "https://www.bulkapparel.com/image/fashion-wear/2115_fm.jpg",
      link: "https://www.bulkapparel.com/tshirts/gildan-5000l-heavy-cotton-womens-short-sleeve-t-shirt "
    }
  },

  "Cotton Ringspun": {
    description: "Cotton Ringspun fabric offers a softer, more luxurious feel than traditional cotton. It is crafted using a process where the cotton fibers are twisted and thinned into yarn, creating a lightweight yet durable fabric. Ideal for those who prefer a tailored, fitted look without compromising comfort, cotton ringspun is the go-to choice for high-quality, fashionable t-shirts with a smooth finish.",
    fabricLink: "https://www.bulkapparel.com/styles?fabrics=cottonringspun",

    mens: {
      tshirt: "G640",
      tshirtDescription: "Gildan 640 Softstyle Men's T-Shirt",
      image: "https://www.bulkapparel.com/image/fashion-wear/32_fm.jpg",
      link: "https://www.bulkapparel.com/tshirts/g640-gildan-t-shirt-64000-softstyle"
    },
    womens: {
      tshirt: "G640L",
      tshirtDescription: "Gildan 640L Softstyle Women's T-Shirt",
      image: "https://www.bulkapparel.com/image/fashion-wear/809_fm.jpg",
      link: "https://www.bulkapparel.com/tshirts/gildan-64000l-softstyle-womens-t-shirt"
    }
  },
  "Polyester": {
    description: "Polyester fabric is designed for performance, offering superior durability, wrinkle resistance, and moisture-wicking properties. Perfect for sports, workouts, and outdoor activities, polyester t-shirts are quick-drying and lightweight, making them ideal for active individuals. Polyester fabric ensures long-lasting wear without the worry of shrinking or fading, making it a reliable option for frequent use.",
    fabricLink: "https://www.bulkapparel.com/styles?fabrics=cotton100",

    mens: {
      tshirt: "TT11",
      tshirtDescription: "Men's Team 365 TT11 Performance T-Shirt",
      image: "https://www.bulkapparel.com/image/alpha-colors/fashion-wear/tt11_00_p.jpg",
      link: "https://www.bulkapparel.com/t-shirts/team-365-tt11-mens-zone-performance-t-shirt"
    },
    womens: {
      tshirt: "TT11W",
      tshirtDescription: "Ladies' Team 365 TT11W Zone Performance T-Shirt",
      image: "https://www.bulkapparel.com/image/alpha-colors/high-reso/tt11w_sk_p.jpg",
      link: "https://www.bulkapparel.com/t-shirts/team-365-tt11w-ladies-zone-performance-t-shirt"
    }
  },
  "Rayon": {
    description: "Rayon fabric is a semi-synthetic material that combines softness with a luxurious drape. Known for its lightweight feel and breathability, rayon is perfect for trendy casual wear, allowing for easy movement and a polished look. This fabric is ideal for those who seek a sophisticated appearance without sacrificing comfort, making it a stylish choice for both men and women.",
    fabricLink: "https://www.bulkapparel.com/styles?fabrics=cotton100",

    mens: {
      tshirt: "3413",
      tshirtDescription: "Unisex Bella + Canvas 3413 Triblend T-Shirt",
      image: "https://www.bulkapparel.com/image/fashion-wear/1441_fm.jpg",
      link: "https://www.bulkapparel.com/tshirts/bella-canvas-3413-unisex-triblend-short-sleeve-tee"
    },
    womens: {
      tshirt: "6710",
      tshirtDescription: "Next Level 6710 Women's Triblend Crew",
      image: "https://www.bulkapparel.com/image/fashion-wear/3239_fm.jpg",
      link: "https://www.bulkapparel.com/tshirts/next-level-6710-womens-triblend-crew"
    }

  },
  "Recycled": {
    description: "Recycled fabric is an eco-friendly alternative crafted from repurposed materials, providing a sustainable option for environmentally conscious shoppers. It retains the comfort and performance qualities of traditional fabrics while reducing environmental impact. Perfect for casual or performance wear, recycled fabric t-shirts help you stay stylish and sustainable at the same time.",
    fabricLink: "https://www.bulkapparel.com/styles?fabrics=cotton100",

    mens: {
      tshirt: "5170",
      tshirtDescription: "Men's Hanes 5170 EcoSmart T-Shirt",
      image: "https://www.bulkapparel.com/image/fashion-wear/143_fm.jpg",
      link: "https://www.bulkapparel.com/tshirts/hanes-5170-ecosmart-t-shirt"
    },
    womens: {
      tshirt: "A377",
      tshirtDescription: "Women's Adidas A377 Sport T-Shirt",
      image: "https://www.bulkapparel.com/image/high-reso/7701_fm.jpg",
      link: "https://www.bulkapparel.com/tshirts/adidas-a377-womens-sport-t-shirt"
    }

  },
  "Spandex": {
    description: "Spandex fabric is known for its exceptional stretch and form-fitting capabilities, making it the perfect choice for athletic and activewear. It offers freedom of movement, making it ideal for workouts, sports, or any activity that requires flexibility. Spandex t-shirts provide a snug yet comfortable fit, allowing the fabric to stretch with your body while maintaining its shape.",
    fabricLink: "https://www.bulkapparel.com/styles?fabrics=cotton100",

    mens: {
      tshirt: "223",
      tshirtDescription: "Paragon 223 Marathon Extreme Performance T-Shirt",
      image: "https://www.bulkapparel.com/image/fashion-wear/10573_fm.jpg",
      link: "https://www.bulkapparel.com/tshirts/paragon-223-marathon-extreme-performance-t-shirt"
    },
    womens: {
      tshirt: "A377",
      tshirtDescription: "Women's Adidas A377 Sport T-Shirt",
      image: "https://www.bulkapparel.com/image/high-reso/7701_fm.jpg",
      link: "https://www.bulkapparel.com/tshirts/adidas-a377-womens-sport-t-shirt"
    }
  }
};



/* -------------------------------------
   Quiz Logic and Functions
-------------------------------------- */

// Track the current question
let currentQuestionIndex = 0;

// Track user's fabric selections (tally count of selections for each fabric)
let selectedFabrics = {};

// Function to display the current question and its answers
function displayQuestion() {
  const questionContainer = document.getElementById('question-container');
  const answersContainer = document.getElementById('answers-container');
  const questionCountContainer = document.getElementById('question-count');
  const resultContainer = document.getElementById('result-container');
  const progressBarFill = document.getElementById('progress-bar-fill');


  // Ensure quiz elements are shown and result container is hidden
  questionContainer.style.display = 'block';
  answersContainer.style.display = 'block';
  questionCountContainer.style.display = 'block';
  resultContainer.style.display = 'none';


  // Clear out any previous questions/answers
  questionContainer.innerHTML = '';
  answersContainer.innerHTML = '';
  questionCountContainer.innerHTML = '';


  // Get the current question
  const currentQuestion = quizData[currentQuestionIndex];

  // Display the question text
  questionContainer.innerHTML = `<h2>${currentQuestion.question}</h2>`;


  // Display the answer buttons
  currentQuestion.answers.forEach(answer => {
    const answerButton = document.createElement('button');
    answerButton.innerText = answer.text;
    answerButton.classList.add('answer-button');

    // Handle answer selection
    answerButton.addEventListener('click', () => selectAnswer(answer));

    answersContainer.appendChild(answerButton);
  });

  // Display the question count (e.g., "Q 1/6")
  questionCountContainer.innerHTML = `Question ${currentQuestionIndex + 1}/${quizData.length}`;

  // Update the progress bar
  const progress = ((currentQuestionIndex) / quizData.length) * 100;
  progressBarFill.style.width = `${progress}%`;
}

// Handle answer selection 
function selectAnswer(answer) {
  // Increment the fabric count for each selected answer
  answer.fabrics.forEach(fabric => {
    if (selectedFabrics[fabric]) {
      selectedFabrics[fabric]++;
    } else {
      selectedFabrics[fabric] = 1;
    }
  });

  // Move to the next question
  currentQuestionIndex++;
  if (currentQuestionIndex < quizData.length) {
    displayQuestion();
  } else {
    displayResult();
  }
}

// Show the result after the quiz is complete
function displayResult() {
  const quizContainer = document.getElementById('quiz-container');
  const questionContainer = document.getElementById('question-container');
  const answersContainer = document.getElementById('answers-container');
  const questionCountContainer = document.getElementById('question-count');
  const resultContainer = document.getElementById('result-container');
  const fabricRecommendation = document.getElementById('fabric-recommendation');
  const mensResult = document.getElementById('mens-result');
  const womensResult = document.getElementById('womens-result');
  const progressBarOutline = document.getElementById('progress-bar-outline');

  // Hide the quiz elements and show the result container
  quizContainer.style.display = 'none';
  questionContainer.style.display = 'none';
  answersContainer.style.display = 'none';
  questionCountContainer.style.display = 'none';
  progressBarOutline.style.display = 'none';
  resultContainer.style.display = 'block';

  // Find the recommended fabric
  const recommendedFabric = Object.keys(selectedFabrics).reduce((a, b) => selectedFabrics[a] > selectedFabrics[b] ? a : b);

  // Get fabric info
  const fabric = fabricInfo[recommendedFabric];

  // Display the recommendation and fabric description
  fabricRecommendation.innerHTML = `
    <h2>Your Recommendation: 
      <a href="${fabric.fabricLink}" target="_blank">
        <strong>${recommendedFabric}</strong>
      </a>
    </h2>
    <p class="fabric-description">${fabric.description}</p>`;

  // Display Men's recommendation
  mensResult.innerHTML = `
    <h3>Men's Option</h3>
    <a href="${fabric.mens.link}" target="_blank">
      <img src="${fabric.mens.image}" alt="${fabric.mens.tshirtDescription}">
      <p><strong>${fabric.mens.tshirtDescription} (${fabric.mens.tshirt})</strong></p>
    </a>
  `;

  // Display Women's recommendation
  womensResult.innerHTML = `
    <h3>Women's Option</h3>
    <a href="${fabric.womens.link}" target="_blank">
      <img src="${fabric.womens.image}" alt="${fabric.womens.tshirtDescription}">
      <p><strong>${fabric.womens.tshirtDescription} (${fabric.womens.tshirt})</strong></p>
    </a>
  `;
}




/* -------------------------------------
   Initialize the quiz when the page loads
-------------------------------------- */
document.addEventListener('DOMContentLoaded', displayQuestion);

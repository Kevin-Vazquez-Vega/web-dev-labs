// Labs Completed Count
const name = "Kevin";
let labsCompleted = 8;
let isEnrolled = false;

labsCompleted = labsCompleted + 1;
console.log(`${name} has completed ${labsCompleted} labs!`) 

// Likes Button
const likeBtn = document.querySelector("#like-btn");
const likeCount = document.querySelector("#like-count");

const LikeCounter = {
    likes: 0, 
    increment() {
        this.likes = this.likes + 1;
        updateLikeDisplay();
    },
    render() {
        likeCount.textContent = `${this.likes} likes`;
    }
};

// Like Messages
const likeMessage = document.querySelector("#like-message");

function updateLikeDisplay() {
    likeCount.textContent = `${LikeCounter.likes} likes`;

    if (LikeCounter.likes >= 100) {
        likeMessage.textContent = "Okay you can stop now.";
    } else if (LikeCounter.likes >= 50) {
        likeMessage.textContent = "I'm actually surprised you managed to click for this long on a single button. Sorry for wasting your time!";
    } else if (LikeCounter.likes >= 20) {
        likeMessage.textContent = "Unbelievable!! I feel so appreciated!";
    } else if (LikeCounter.likes >= 10) {
        likeMessage.textContent = "Wow, thanks for all the likes!";
    } else if (LikeCounter.likes >= 5) {
        likeMessage.textContent = "Glad you like it!";
    } else {
        likeMessage.textContent = "";
    }
}

// Dark Mode Button
const themeBtn = document.querySelector("#theme-btn");

themeBtn.addEventListener("click", function(){
    document.body.classList.toggle("dark");
});

// Goals Array
const goals = ["A refresher on the fundamentals of HTML and CSS", "JavaScript as a whole", "Any back-end, if applicable"];
const goalsList = document.querySelector("#goals-list");

goals.forEach(function(goal) {
    const item = document.createElement("li");
    item.textContent = goal;
    goalsList.appendChild(item);
});

// Defensive Code
if (likeBtn) {
    likeBtn.addEventListener("click", function() {
        LikeCounter.increment();
    });
} else {
    console.warn("like-btn not found on this page");
}

function getGreetingAfterDelay() {
    return new Promise(function(resolve) {
        setTimeout(function() {
            resolve("Hello from the future!");
        }, 800);
    });
}

async function showGreeting() {
    const message = await getGreetingAfterDelay();
    console.log(message);
}

showGreeting();

const factBtn = document.querySelector("#fact-btn");
const factDisplay = document.querySelector("#fact-display");

async function loadFact() {
    factDisplay.textContent = "Loading...";
    try {
        const response = await fetch("https://catfact.ninja/fact");
        if (!response.ok) {
            throw new Error("Server responded with an error");
        }
        const data = await response.json();
        factDisplay.textContent = data.fact;
    } catch (error) {
        factDisplay.textContent = "Couldn't load a fact right now. Try again.";
        console.error(error);
    }
}

factBtn.addEventListener("click", loadFact);
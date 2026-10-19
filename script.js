const name = "Kevin";
let labsCompleted = 6;
let isEnrolled = false;

// Labs Completed Count
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
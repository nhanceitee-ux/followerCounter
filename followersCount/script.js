let followers = 0;

function increaseFollowers() {
    followers++;

    document.getElementById("followerCount").innerText =
        "Followers: " + followers;

    checkMilestone();
}

function checkMilestone() {
    if (followers === 10) {
        showMessage("🎉 Congrats! You reached 10 followers!");
    }
    else if (followers === 50) {
        showMessage("🔥 Amazing! 50 followers!");
    }
    else if (followers === 100) {
        showMessage("🚀 WOW! 100 followers milestone!");
    }
}

function showMessage(text) {
    document.getElementById("message").innerText = text;
}

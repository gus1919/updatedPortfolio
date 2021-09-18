

function aboutMeDisplay(){
    document.getElementById("aboutMe").style.display = "block"
    document.getElementById("projects").style.display = "none"
    document.getElementById("resume").style.display = "none"
    document.getElementById("contact").style.display = "none"
};

function projectDisplay(){
    document.getElementById("aboutMe").style.display = "none"
    document.getElementById("projects").style.display = "block"
    document.getElementById("resume").style.display = "none"
    document.getElementById("contact").style.display = "non"
};

function resumeDisplay(){
    document.getElementById("aboutMe").style.display = "none"
    document.getElementById("projects").style.display = "none"
    document.getElementById("resume").style.display = "block"
    document.getElementById("contact").style.display = "none"
};

function contactDisplay(){
    document.getElementById("aboutMe").style.display = "none"
    document.getElementById("projects").style.display = "none"
    document.getElementById("resume").style.display = "none"
    document.getElementById("contact").style.display = "block"
};


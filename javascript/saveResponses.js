function searchRadio(className, count){
    for(var i=1;i<=count;i++){
        if(document.getElementById(className.concat('-'+i)).checked){
            return document.getElementById(className.concat('-'+i)).value;
        }
    }
    return "No option chosen";
}

function saveFeedback(validity){
    if (validity == false){
        return validity;
    }
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var plotReview = searchRadio("plot-review", 5);
    var descriptionReview = searchRadio("description-review", 5);
    var storyReview = searchRadio("story-review", 5);
    var designReview = searchRadio("design-review", 5);
    var easeReview = searchRadio("ease-review", 3);
    var overallReview = searchRadio("overall-review", 5);
    var comments = document.getElementById("comments").value;
    if (comments==""){
        comments = "No comment provided";
    }
    console.log(name);
    console.log(email);
    console.log(plotReview);
    console.log(descriptionReview);
    console.log(storyReview);
    console.log(designReview);
    console.log(easeReview);
    console.log(overallReview);
    console.log(comments);
    return true;
}
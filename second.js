
var url = location.search.substring(1).split('=')[1];


$.get("https://www.reddit.com" + url + ".json")
.then(function(sucsess){
    var info = sucsess[0]
    console.log(info)
    var submissions = implementInfo(info)
    var box = document.createElement("div");
    var header = document.createElement("h1");
    var text = document.createElement("h3");
    var picture = document.createElement("img");
    var votes = document.createElement("h4");
    var upVotes = submissions.score;
    
    text.innerText = submissions.selftext;
    votes.innerText = submissions.score + " upvotes!";
    header.innerText = submissions.title;

    picture.setAttribute("src", submissions.url);

    box.appendChild(header);
    box.appendChild(votes);
    box.appendChild(text);
    box.appendChild(picture);
    document.body.appendChild(box);

   
});
function implementInfo(info){
    var children = info.data.children;

    var endGame = children.map(function(child) {
        var submission = {};
        
        submission.selftext = child.data.selftext;
        submission.score = child.data.score
        submission.thumbnail = child.data.thumbnail;
        submission.title = child.data.title;
        submission.url = child.data.url;
        submission.permalink = child.data.permalink;

        return submission;
    });

    if (endGame.length === 1) {
        return endGame[0];
    }

    return endGame;
}
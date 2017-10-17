$.get("https://www.reddit.com/r/ProgrammerHumor.json")
.then(function(sucsess){

    var submissions = implementInfo(sucsess)
    submissions.forEach(function(submissions){

        var box = document.createElement("div");
        var header = document.createElement("h1");
        var votes = document.createElement("h4");
        var link = document.createElement("a");
        var picture = document.createElement("img");
        var upVotes = submissions.score;

        header.innerText = submissions.title;
        votes.innerText = submissions.score + " upvotes!";

        picture.setAttribute("src", submissions.url);
        link.setAttribute("href", "second.html?url=" + submissions.permalink);

        link.appendChild(header);
        box.appendChild(link);
        box.appendChild(votes);
        box.appendChild(picture);
        document.body.appendChild(box);

    });
});

function implementInfo(info){
     var children = info.data.children;

    return children.map(function(child) {
        var submission = {};
        submission.score = child.data.score;
        submission.title = child.data.title;
        submission.url = child.data.url;
        submission.permalink = child.data.permalink;

        return submission;
    });
}
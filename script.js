$("button").click(function() {
    let questionOne = $(".questionOne").val();
    console.log(questionOne);
    let questionTwo = $(".questionTwo").val();
    console.log(questionTwo);
    let questionThree = $(".questionThree").val();
    console.log(questionThree);
    let name = questionOne;
    let answer = (2030 - 2022) + (questionThree * 12);
    $(".fortune-display").append("<h1>" + name + ", by 2030, you have read " + answer + " books" + "</h1>");

});
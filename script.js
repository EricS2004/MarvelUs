let name;
let levelAHeroImgs = ["Captain America", "Iron Man", "Black Panther", "The Hulk", "Spiderman", ];
let heroImages=["https://cdn.vox-cdn.com/thumbor/Z4yyRrPenLpg0ExhHpetrveJiuY=/0x0:2034x1356/1200x800/filters:focal(0x0:2034x1356)/cdn.vox-cdn.com/uploads/chorus_image/image/46293074/Avengers254d1158022f16-2040.0.0.jpg", "https://img1.looper.com/img/gallery/the-real-reason-marvel-decided-not-to-make-iron-man-4/intro-1575053226.jpg", "https://thumbor.forbes.com/thumbor/711x1066/https://blogs-images.forbes.com/markhughes/files/2018/02/BLACK-PANTHER-image-23-1200x1800.jpg?width=960","https://imgix.bustle.com/uploads/image/2020/5/5/834af3f0-7b7d-4147-bf5a-6193dcbe551e-hulk.jpg?w=350&h=298&auto=format%2Ccompress&cs=srgb&q=70&fit=crop&crop=faces","https://th.thgim.com/entertainment/movies/wpb1yf/article29192665.ece/alternates/FREE_435/spidey"];
let points = 0;

$(".main").hide();
$(".beginQuiz").click(function() {
    $(".main").show();
    $(".preScreen").hide();
name = $(".name").val();
    $(".name").html(`<h1>Welcome, ${name}, let's begin your exam. Please, be honest in your answers.</h1>`);

});
// me and mikkail worked together on this project//

$(".aA").click(function() {
points = points + 10;
  //  console.log(points);
});

$(".aB").click(function() {
    points = points + 5;
   // console.log(points);
});
$(".aC").click(function() {
    points = points + 0;
   // console.log(points);

});


$(".one").click(function() {
    $(".one").hide();

});



$(".two").click(function() {
    $(".two").hide();

});

$(".three").click(function() {
    $(".three").hide();

});

$(".btn2").click(function() {
    $(".main").hide();
    $(".hero").show();
     $(".hero").append(`<h2>You have ${points} points.</h2>`);
    if (points > 20) {
    $(".hero").append(`<h1>Based on your answers to the previous questions, we think ${levelAHeroImgs[0]} would be a good pick for you.</h1><img src='${heroImages[0]}'>`);
   
   
} 
else if (points >= 15) {
     $(".hero").append(`<h1>Based on your answers to the previous questions, we think ${levelAHeroImgs[1]} would be a good pick for you.</h1><img src='${heroImages[1]}'>`);
  
} 
else if (points > 10) {
    $(".hero").append(`<h1>Based on your answers to the previous questions, we think ${levelAHeroImgs[2]} would be a good pick for you.</h1><img src='${heroImages[2]}'>`);
  
}
  else if (points ===0) {
    $(".hero").append(`<h1>Based on your answers to the previous questions, we think ${levelAHeroImgs[3]} would be a good pick for you.</h1><img src='${heroImages[3]}'>`);
  }
  else {
       $(".hero").append(`<h1>Based on your answers to the previous questions, we think ${levelAHeroImgs[4]} would be a good pick for you.</h1><img src='${heroImages[4]}'>`);
  }
  

});




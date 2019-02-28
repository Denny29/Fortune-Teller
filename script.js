$(".future").click(function(){
    var one = $(".first-q").val();
    var two = $(".second-q").val();
    var three = $(".third-q").val();
    
    var solution2=two * 1612;
    var solution3=solution2 * three;
    
    var firstNum = parseInt( $("#number1").val());      
    var secondNum =parseInt($("#number2").val());  
    var solution=firstNum * secondNum;
    $("#solution").text(solution);
   
    console.log(one);
    
    $(".fortune").append("By the year 2050, you will have spent"+" "+ "$" +solution3+" on "+one+" and have had ate total of "+solution2+" "+one + "...");
    $(".info").hide();
    $(".doughnut").hide();
    $(".cake").show();
});
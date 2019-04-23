







var bluecrystal = Math.floor(Math.random() * 10) + 1;
var redcrystal = Math.floor(Math.random() * 10) + 1;
var greencrystal = Math.floor(Math.random() * 10) + 1;
var pinkcrystal = Math.floor(Math.random() * 10) + 1;

let targetnum = Math.floor(Math.random() * 40) + 5;
let wins = 0;
let losses = 0;
let runtotal = 0;



$(function () {

    function reset() {
        runtotal = 0;
        bluecrystal = Math.floor(Math.random() * 10) + 1;
        redcrystal = Math.floor(Math.random() * 10) + 1;
        greencrystal = Math.floor(Math.random() * 10) + 1;
        pinkcrystal = Math.floor(Math.random() * 10) + 1;
    }






    $("#bluecrystal").click(function () {
        runtotal += bluecrystal;
        $("#runtotal").text(runtotal);
        $("#targetnum").text(targetnum);
        if (($("#runtotal").html()) == targetnum) {
            wins++;
            $("#wins").text(wins);
            targetnum = Math.floor(Math.random() * 40) + 5;
            reset();
        }

        else if (($("#runtotal").html() > targetnum)) {
            losses++;
            $("#losses").text(losses);
            targetnum = Math.floor(Math.random() * 40) + 5;
            reset();
        }

    });

    $("#redcrystal").click(function () {

        runtotal += redcrystal;
        $("#runtotal").text(runtotal);
        $("#targetnum").text(targetnum);

        if (($("#runtotal").html()) == targetnum) {
            wins++;
            $("#wins").text(wins);
            targetnum = Math.floor(Math.random() * 40) + 5;
            reset();
        }
        else if (($("#runtotal").html() > targetnum)) {
            losses++;
            $("#losses").text(losses);
            targetnum = Math.floor(Math.random() * 40) + 5;
            reset();
        }

    });

    $("#greencrystal").click(function () {

        runtotal += greencrystal;
        $("#runtotal").text(runtotal);
        $("#targetnum").text(targetnum);

        if (($("#runtotal").html()) == targetnum) {
            wins++;
            $("#wins").text(wins);
            targetnum = Math.floor(Math.random() * 40) + 5;
            reset();
        }

        else if (($("#runtotal").html() > targetnum)) {
            losses++;
            $("#losses").text(losses);
            targetnum = Math.floor(Math.random() * 40) + 5;
            reset();
        }
    });

    $("#pinkcrystal").click(function () {

        runtotal += pinkcrystal;
        $("#runtotal").text(runtotal);
        $("#targetnum").text(targetnum);

        if (($("#runtotal").html()) == targetnum) {
            wins++;
            $("#wins").text(wins);
            targetnum = Math.floor(Math.random() * 40) + 5;
            reset();
        }
        else if (($("#runtotal").html() > targetnum)) {
            losses++;
            $("#losses").text(losses);
            targetnum = Math.floor(Math.random() * 40) + 5;
            reset();
        }



    });






});


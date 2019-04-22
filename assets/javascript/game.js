







let bluecrystal = Math.floor(Math.random() * 10) + 1;
let redcrystal = Math.floor(Math.random() * 10) + 1;
let greencrystal = Math.floor(Math.random() * 10) + 1;
let pinkcrystal = Math.floor(Math.random() * 10) + 1;
let runtotal = 0;
const targetnum = Math.floor(Math.random() * 40) + 5;
let wins = 0;




$(function () {




    $("#bluecrystal").click(function () {
        runtotal += bluecrystal;
        $("#runtotal").text(runtotal);
        $("#targetnum").text(targetnum);

        if ((runtotal === targetnum) && (runtotal != 0)) {
            wins++;
        }

        $("#wins").text(wins);

    });

    $("#redcrystal").click(function () {
        runtotal += redcrystal;
        $("#runtotal").text(runtotal);
        $("#targetnum").text(targetnum);

        if ((runtotal === targetnum) && (runtotal != 0)) {
            wins++;
        }
        $("#wins").text(wins);


    });

    $("#greencrystal").click(function () {
        runtotal += greencrystal;
        $("#runtotal").text(runtotal);
        $("#targetnum").text(targetnum);

        if ((runtotal === targetnum) && (runtotal != 0)) {
            wins++;
        }
        $("#wins").text(wins);

    });

    $("#pinkcrystal").click(function () {
        runtotal += pinkcrystal;
        $("#runtotal").text(runtotal);
        $("#targetnum").text(targetnum);

        if ((runtotal === targetnum) && (runtotal != 0)) {
            wins++;
        }
        $("#wins").text(wins);


    });

});


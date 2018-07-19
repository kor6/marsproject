window.sr = ScrollReveal({ reset: true });
sr.reveal(".nav-btn", {
  duration: 2000,
  origin: "bottom"
});
sr.reveal(".header", {
  duration: 2000,
  origin: "top",
  scale: 0.2,
  reset: true
});
sr.reveal(".agencies", {
  duration: 2000,
  origin: "top",
  scale: 0.3
});
sr.reveal(".agencies__list", {
  duration: 2000,
  delay: 2000,
  origin: "top"
});

sr.reveal(".header__logo", {
  duration: 2000,
  delay: 1000,
  origin: "top"
});

sr.reveal(".feature", {
  duration: 1000,
  origin: "bottom",
  scale: 0.3
});

sr.reveal(".feature", {
  duration: 1000,
  origin: "bottom",
  scale: 0.3
});

sr.reveal(".story__pictures", {
  duration: 1000,
  origin: "left",
  scale: 0.3
});
sr.reveal(".story__content", {
  duration: 1000,
  origin: "right",
  scale: 0.3
});

sr.reveal(".mission", {
  duration: 1000,
  origin: "top",
  scale: 0.3
});

sr.reveal(".gallery", {
  duration: 1000,
  origin: "bottom",
  scale: 0.3
});

sr.reveal(".footer", {
  duration: 1000,
  origin: "bottom",
  scale: 0.3
});

sr.reveal(".header2", {
  duration: 1500,
  origin: "bottom",
  scale: 0.3
});
sr.reveal(".features2", {
  duration: 1000,
  origin: "top",
  scale: 0.3
});
sr.reveal(".gallery2", {
  duration: 1000,
  origin: "bottom",
  scale: 0.2
});
sr.reveal(".gallery3", {
  duration: 1000,
  origin: "bottom",
  scale: 0.2
});

$(document).ready(function() {
  console.log("ready!");
  //$(".bg-video__content").fadeIn("slow");
  $(".nav-btn").on("click", function() {
    $("#myNav")
      .addClass("overlay")
      .css("display", "block");
  });
  $(".close-btn").click(function() {
    $(".overlay").fadeOut("slow");
  });

  $("#gal").click(function() {
    $("html, body").animate(
      {
        scrollTop: $(".gallery").offset().top
      },
      1000
    );
  }),
    $("#feat").click(function() {
      $("html, body").animate(
        {
          scrollTop: $(".features").offset().top
        },
        1000
      );
    }),
    $("#s1").click(function() {
      $("html, body").animate(
        {
          scrollTop: $(".story__content").offset().top
        },
        1000
      );
    }),
    $("#m1").click(function() {
      $("html, body").animate(
        {
          scrollTop: $(".missions").offset().top
        },
        1000
      );
    }),
    $("#table").click(function() {
      $("html, body").animate(
        {
          scrollTop: $(".features2").offset().top
        },
        1000
      );
    }),
    $("#videos").click(function() {
      $("html, body").animate(
        {
          scrollTop: $(".story__pictures").offset().top
        },
        1000
      );
    }),
    $("#gal2").click(function() {
      $("html, body").animate(
        {
          scrollTop: $(".gallery2").offset().top
        },
        1000
      );
    }),
    $("#gal3").click(function() {
      $("html, body").animate(
        {
          scrollTop: $(".gallery3").offset().top
        },
        1000
      );
    });
});
$('#ansg').on('click',function() {
  alert("Phobos -- Deimos");
});

var app = angular.module("tablaApp", []);
app.controller("tablaCtrl", function($scope) {
  $scope.adatok = [
    {
      Planet: "Mercury",
      DistancefromSun: "57.91 (millionkm)",
      SpeedinOrbitingSun: "47.87 (km/sec)",
      Diameter: "4864 (km)",
      Lengthofyear: "87.97 (Earth Days)",
      LengthofDay: "1,407 hours 30 minutes 14 seconds",
      Gravity: "0.38",
      Temperature: "Average -62.7 degree celsius",
      Atmosphere:
        "small amount of helium and traces of sodium, potassium, and oxygen",
      NumberofMoons: 0
    },
    {
      Planet: "Venus",
      DistancefromSun: "108.2 (millionkm)",
      SpeedinOrbitingSun: "47.87 (km/sec)",
      Diameter: "12.104 (km)",
      Lengthofyear: "225 (Earth Days) ",
      LengthofDay: "116 days 18 hours 0m",
      Gravity: "0.38",
      Temperature: "Average -62.7 degree celsius",
      Atmosphere: "mostly carbon dioxide, some water vapor",
      NumberofMoons: 0
    },
    {
      Planet: "Earth",
      DistancefromSun: "149.6 (millionkm)",
      SpeedinOrbitingSun: " 30 (km/sec)",
      Diameter: " 12756 (km)",
      Lengthofyear: "365",
      LengthofDay: "23 hours 56 minutes",
      Gravity: "1",
      Temperature: "Average 14 degree celsius",
      Atmosphere: "nitrogen, oxygen, others",
      NumberofMoons: 1
    },
    {
      Planet: "Mars",
      DistancefromSun: "227.9 (millionkm)",
      SpeedinOrbitingSun: "23.33549 (km/sec)",
      Diameter: "6791.432 (km)",
      Lengthofyear: "687 (Earth Days)",
      LengthofDay: "24 hours 37 minutes",
      Gravity: "0.37",
      Temperature: "Average -62.7 degree celsius",
      Atmosphere:
        "very thin and composed mainly of carbon dioxide, with some nitrogen and argon",
      NumberofMoons: 2
    },
    {
      Planet: "Jupiter",
      DistancefromSun: "778.5 (millionkm)",
      SpeedinOrbitingSun: "47.87 (km/sec)",
      Diameter: "139.822 (km)",
      Lengthofyear: "12  (Earth years)",
      LengthofDay: "9 hours 56 minutes",
      Gravity: "0.38",
      Temperature: "Average -62.7 degree celsius",
      Atmosphere: "hidrogen, helium",
      NumberofMoons: 67
    },
    {
      Planet: "Saturn",
      DistancefromSun: "1.429 (billion km)",
      SpeedinOrbitingSun: "47.87 (km/sec)",
      Diameter: "116.464 (km)",
      Lengthofyear: "29 (Earth years)",
      LengthofDay: "10 hours 42 minutes",
      Gravity: "0.38",
      Temperature: "Average -62.7 degree celsius",
      Atmosphere: " 93.2% hydrogen and 6.7% helium",
      NumberofMoons: 62
    },
    {
      Planet: "Uranus",
      DistancefromSun: "2.871 (billion km)",
      SpeedinOrbitingSun: "47.87 (km/sec)",
      Diameter: "50.724 (km)",
      Lengthofyear: "84  (Earth years)",
      LengthofDay: "17 hours 14 minutes",
      Gravity: "0.38",
      Temperature: "Average -62.7 degree celsius",
      Atmosphere: "composed primarily of gas and various ices",
      NumberofMoons: 27
    },
    {
      Planet: "Neptune",
      DistancefromSun: "4.498 (billion km)",
      SpeedinOrbitingSun: "47.87 (km/sec)",
      Diameter: "49.244 (km)",
      Lengthofyear: "165  (Earth years) ",
      LengthofDay: "16 hours 6 minutes",
      Gravity: "0.38",
      Temperature: "Average -62.7 degree celsius",
      Atmosphere: "80% hydrogen, 19% helium, and 1.5% methane",
      NumberofMoons: 14
    }
  ];
});

function ell() {
  ok = true;

  if (f1.input1.value.length === 0 || f1.input2.value.length === 0) {
    alert("Can not be empty!");
    ok = false;
  }else if (f1.input1.value != "Phobos" && f1.input1.value != "Deimos"){
    alert("Wrong Answer!"); ok = false;
  }else if (f1.input2.value != "Deimos" && f1.input2.value != "Phobos"){
    alert("Wrong Answer!"); ok = false;
  }
  return ok;
}

if (window.addEventListener)
  window.addEventListener("DOMMouseScroll", wheel, false);
window.onmousewheel = document.onmousewheel = wheel;

function wheel(event) {
  var delta = 0;
  if (event.wheelDelta) delta = event.wheelDelta / 120;
  else if (event.detail) delta = -event.detail / 3;

  handle(delta);
  if (event.preventDefault) event.preventDefault();
  event.returnValue = false;
}

var goUp = true;
var end = null;
var interval = null;

function handle(delta) {
  var animationInterval = 20;
  var scrollSpeed = 20;

  if (end == null) {
    end = $(window).scrollTop();
  }
  end -= 20 * delta;
  goUp = delta > 0;

  if (interval == null) {
    interval = setInterval(function() {
      var scrollTop = $(window).scrollTop();
      var step = Math.round((end - scrollTop) / scrollSpeed);
      if (
        scrollTop <= 0 ||
        scrollTop >= $(window).prop("scrollHeight") - $(window).height() ||
        (goUp && step > -1) ||
        (!goUp && step < 1)
      ) {
        clearInterval(interval);
        interval = null;
        end = null;
      }
      $(window).scrollTop(scrollTop + step);
    }, animationInterval);
  }
}



/*
function isScrolledIntoView(elem) {
  var docViewTop = $(window).scrollTop();
  var docViewBottom = docViewTop + $(window).height();
  var elemTop = $(elem).offset().top;
  var elemBottom = elemTop + $(elem).height();
  return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}

function init() {
new Vivus('bbbsvg', {start: 'autostart', type: 'oneByOne', duration: 200});

new Vivus('mysvg', {start: 'autostart', type: 'delayed', duration: 200}); 

  $(window).on('scroll', function() {
      if (isScrolledIntoView($('#bbbsvg'))) {
          bbbsvg.play();
      }
  });
}
window.onload = init;
*/
/*
const logo = new Vivus('bbbsvg', {start: 'autostart', type: 'async', duration: 400});

*/
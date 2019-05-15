$(document).ready(function() {
  console.log("document loaded");
  checkWindowSize();
  //Show hide button on scroll
  $(window).scroll(function() {
    if ($(this).scrollTop() > 200) {
      $(".scrollToTop").show();
    } else {
      $(".scrollToTop").hide();
    }
  });
  $(".scrollToTop").click(function() {
    $("html,body").animate({ scrollTop: 0 }, 5000);
  });

  //Interactive project display according to skills
  $(".allSkills").click(function() {
    $("#nyt1").show();
    $("#clicky1").show();
    $("#burger1").show();
    $("#cat").show();
    $("#liri1").show();
    $("#crystal").show();
    $("#train").show();
    $("#friend").show();
    $("#bamazon1").show();
    $("#fun").show();
    $("#gif").show();
    $("#starwar").show();
    $("#hangman").show();
    $("#psychic").show();
  });
  $(".htmlIcon").click(function() {
    $("#nyt1").hide();
    $("#clicky1").hide();
    $("#burger1").hide();
    $("#cat").hide();
    $("#liri1").hide();
    $("#crystal").show();
    $("#train").show();
    $("#friend").show();
    $("#bamazon1").hide();
    $("#fun").show();
    $("#gif").show();
    $("#starwar").show();
    $("#hangman").show();
    $("#psychic").show();
  });
  $(".cssIcon").click(function() {
    $("#nyt1").show();
    $("#clicky1").show();
    $("#burger1").show();
    $("#cat").show();
    $("#liri1").show();
    $("#crystal").show();
    $("#train").show();
    $("#friend").show();
    $("#bamazon1").show();
    $("#fun").show();
    $("#gif").show();
    $("#starwar").show();
    $("#hangman").show();
    $("#psychic").show();
  });
  $(".sassIcon").click(function() {
    $("#nyt1").hide();
    $("#clicky1").hide();
    $("#burger1").hide();
    $("#cat").hide();
    $("#liri1").hide();
    $("#crystal").hide();
    $("#train").hide();
    $("#friend").hide();
    $("#bamazon1").hide();
    $("#fun").hide();
    $("#gif").hide();
    $("#starwar").hide();
    $("#hangman").hide();
    $("#psychic").hide();
  });
  $(".bootstrap").click(function() {
    $("#nyt1").show();
    $("#clicky1").show();
    $("#burger1").show();
    $("#cat").show();
    $("#liri1").hide();
    $("#crystal").show();
    $("#train").show();
    $("#friend").show();
    $("#bamazon1").hide();
    $("#fun").show();
    $("#gif").show();
    $("#starwar").show();
    $("#hangman").show();
    $("#psychic").show();
  });
  $(".reactIcon").click(function() {
    $("#nyt1").show();
    $("#clicky1").show();
    $("#burger1").hide();
    $("#cat").hide();
    $("#liri1").hide();
    $("#crystal").hide();
    $("#train").hide();
    $("#friend").hide();
    $("#bamazon1").hide();
    $("#fun").hide();
    $("#gif").hide();
    $("#starwar").hide();
    $("#hangman").hide();
    $("#psychic").hide();
  });
  $(".jsIcon").click(function() {
    $("#nyt1").hide();
    $("#clicky1").hide();
    $("#burger1").hide();
    $("#cat").show();
    $("#liri1").show();
    $("#crystal").show();
    $("#train").hide();
    $("#friend").show();
    $("#bamazon1").show();
    $("#fun").hide();
    $("#gif").hide();
    $("#starwar").hide();
    $("#hangman").show();
    $("#psychic").show();
  });
  $(".jqIcon").click(function() {
    $("#nyt1").hide();
    $("#clicky1").hide();
    $("#burger1").show();
    $("#cat").hide();
    $("#liri1").hide();
    $("#crystal").show();
    $("#train").show();
    $("#friend").show();
    $("#bamazon1").hide();
    $("#fun").show();
    $("#gif").show();
    $("#starwar").show();
    $("#hangman").show();
    $("#psychic").show();
  });
  $(".nodeIcon").click(function() {
    $("#nyt1").hide();
    $("#clicky1").hide();
    $("#burger1").show();
    $("#cat").show();
    $("#liri1").show();
    $("#crystal").hide();
    $("#train").show();
    $("#friend").show();
    $("#bamazon1").show();
    $("#fun").hide();
    $("#gif").hide();
    $("#starwar").hide();
    $("#hangman").hide();
    $("#psychic").hide();
  });
  $(".expressIcon").click(function() {
    $("#nyt1").hide();
    $("#clicky1").hide();
    $("#burger1").show();
    $("#cat").show();
    $("#liri1").show();
    $("#crystal").hide();
    $("#train").show();
    $("#friend").show();
    $("#bamazon1").show();
    $("#fun").hide();
    $("#gif").hide();
    $("#starwar").hide();
    $("#hangman").hide();
    $("#psychic").hide();
  });
  $(".sqlIcon").click(function() {
    $("#nyt1").hide();
    $("#clicky1").hide();
    $("#burger1").show();
    $("#cat").show();
    $("#liri1").hide();
    $("#crystal").hide();
    $("#train").hide();
    $("#friend").hide();
    $("#bamazon1").show();
    $("#fun").hide();
    $("#gif").hide();
    $("#starwar").hide();
    $("#hangman").hide();
    $("#psychic").hide();
  });
  $(".mongoIcon").click(function() {
    $("#nyt1").show();
    $("#clicky1").hide();
    $("#burger1").hide();
    $("#cat").hide();
    $("#liri1").hide();
    $("#crystal").hide();
    $("#train").hide();
    $("#friend").hide();
    $("#bamazon1").hide();
    $("#fun").hide();
    $("#gif").hide();
    $("#starwar").hide();
    $("#hangman").hide();
    $("#psychic").hide();
  });
  $(".sequeIcon").click(function() {
    $("#nyt1").hide();
    $("#clicky1").hide();
    $("#burger1").hide();
    $("#cat").show();
    $("#liri1").hide();
    $("#crystal").hide();
    $("#train").hide();
    $("#friend").hide();
    $("#bamazon1").hide();
    $("#fun").hide();
    $("#gif").hide();
    $("#starwar").hide();
    $("#hangman").hide();
    $("#psychic").hide();
  });
  $(".gitIcon").click(function() {
    $("#nyt1").hide();
    $("#clicky1").hide();
    $("#burger1").hide();
    $("#cat").hide();
    $("#liri1").show();
    $("#crystal").show();
    $("#train").show();
    $("#friend").show();
    $("#bamazon1").show();
    $("#fun").show();
    $("#gif").show();
    $("#starwar").show();
    $("#hangman").show();
    $("#psychic").show();
  });
  $(".herokuIcon").click(function() {
    $("#nyt1").show();
    $("#clicky1").show();
    $("#burger1").show();
    $("#cat").show();
    $("#liri1").hide();
    $("#crystal").hide();
    $("#train").hide();
    $("#friend").hide();
    $("#bamazon1").hide();
    $("#fun").hide();
    $("#gif").hide();
    $("#starwar").hide();
    $("#hangman").hide();
    $("#psychic").hide();
  });
  $(".mochaIcon").click(function() {
    $("#nyt1").hide();
    $("#clicky1").hide();
    $("#burger1").hide();
    $("#cat").hide();
    $("#liri1").hide();
    $("#crystal").hide();
    $("#train").hide();
    $("#friend").hide();
    $("#bamazon1").hide();
    $("#fun").hide();
    $("#gif").hide();
    $("#starwar").hide();
    $("#hangman").hide();
    $("#psychic").hide();
  });
  $(".travisIcon").click(function() {
    $("#nyt1").hide();
    $("#clicky1").hide();
    $("#burger1").hide();
    $("#cat").hide();
    $("#liri1").hide();
    $("#crystal").hide();
    $("#train").hide();
    $("#friend").hide();
    $("#bamazon1").hide();
    $("#fun").hide();
    $("#gif").hide();
    $("#starwar").hide();
    $("#hangman").hide();
    $("#psychic").hide();
  });
  $(".chaiIcon").click(function() {
    $("#nyt1").hide();
    $("#clicky1").hide();
    $("#burger1").hide();
    $("#cat").hide();
    $("#liri1").hide();
    $("#crystal").hide();
    $("#train").hide();
    $("#friend").hide();
    $("#bamazon1").hide();
    $("#fun").hide();
    $("#gif").hide();
    $("#starwar").hide();
    $("#hangman").hide();
    $("#psychic").hide();
  });
  //Show hide projects on click
  $("#fun").hover(
    function() {
      $("#fun-pop").show();
    },
    function() {
      $("#fun-pop").hide();
    }
  );
  $("#gif").hover(
    function() {
      $("#gif-pop").show();
    },
    function() {
      $("#gif-pop").hide();
    }
  );
  $("#hangman").hover(
    function() {
      $("#hangman-pop").show();
    },
    function() {
      $("#hangman-pop").hide();
    }
  );
  $("#psychic").hover(
    function() {
      $("#psychic-pop").show();
    },
    function() {
      $("#psychic-pop").hide();
    }
  );
  $("#starwar").hover(
    function() {
      $("#starwar-pop").show();
    },
    function() {
      $("#starwar-pop").hide();
    }
  );
  $("#bamazon1").hover(
    function() {
      $("#bamazon1-pop").show();
    },
    function() {
      $("#bamazon1-pop").hide();
    }
  );
  $("#friend").hover(
    function() {
      $("#friend-pop").show();
    },
    function() {
      $("#friend-pop").hide();
    }
  );
  $("#train").hover(
    function() {
      $("#train-pop").show();
    },
    function() {
      $("#train-pop").hide();
    }
  );
  $("#crystal").hover(
    function() {
      $("#crystal-pop").show();
    },
    function() {
      $("#crystal-pop").hide();
    }
  );
  $("#liri1").hover(
    function() {
      $("#liri1-pop").show();
    },
    function() {
      $("#liri1-pop").hide();
    }
  );
  $("#cat").hover(
    function() {
      $("#cat-pop").show();
    },
    function() {
      $("#cat-pop").hide();
    }
  );
  $("#burger1").hover(
    function() {
      $("#burger1-pop").show();
    },
    function() {
      $("#burger1-pop").hide();
    }
  );
  $("#clicky1").hover(
    function() {
      $("#clicky1-pop").show();
    },
    function() {
      $("#clicky1-pop").hide();
    }
  );
  $("#nyt1").hover(
    function() {
      $("#nyt1-pop").show();
    },
    function() {
      $("#nyt1-pop").hide();
    }
  );
  $("#virtual1").hover(
    function() {
      $("#virtual1-pop").show();
    },
    function() {
      $("#virtual1-pop").hide();
    }
  );
  $(".js-gotop").on("click", function() {
    $("#project").show();
  });

  $(".menu-icon").on("click", function() {
    $("nav ul").toggleClass("showing");
    $("#main-heading").hide();
  });
  $(window).on("scroll", function() {
    if ($(window).scrollTop()) {
      $("nav").addClass("yellow");
      $(".menu-1").hide();
      $(".menu-icon").hide();
      $("#main-heading").hide();
      $("#links").hide();
    } else {
      $("nav").removeClass("yellow");
      $("#main-heading").show();
      $(".menu-1").show();
      $("#links").show();
      if ($(window).width() >= 769) {
        $(".menu-icon").hide();
      } else {
        $(".menu-icon").show();
      }
    }
  });
  function checkWindowSize() {
    var $window = $(window);
    var windowWidth = $window.width();
    var windowHeight = $window.height();
    if (windowWidth >= 769) {
      $("#linkBtn1").removeClass(".center1");
      $("#linkBtn2").removeClass(".center2");
      $("#linkBtn3").removeClass(".center3");
    }
  }
});

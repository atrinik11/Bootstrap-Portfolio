$(document).ready(function() {
  console.log("document loaded");
  checkWindowSize();
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

  $("#fun-pop").on("click", function() {
    $("#fun-finder").show();
    $("#gif-tastic").hide();
    $("#hangman-game").hide();
    $("#psychic-game").hide();
    $("#bamazon").hide();
    $("#friend-finder").hide();
    $("#train-sch").hide();
    $("#unit4-game").hide();
    $("#liri").hide();
    $("#catering").hide();
    $("#burger").hide();
    $("#clicky").hide();
  });
  $("#gif-pop").on("click", function() {
    $("#fun-finder").hide();
    $("#gif-tastic").show();
    $("#hangman-game").hide();
    $("#psychic-game").hide();
    $("#bamazon").hide();
    $("#friend-finder").hide();
    $("#train-sch").hide();
    $("#unit4-game").hide();
    $("#liri").hide();
    $("#catering").hide();
    $("#burger").hide();
    $("#clicky").hide();
  });
  $("#hangman-pop").on("click", function() {
    $("#fun-finder").hide();
    $("#gif-tastic").hide();
    $("#hangman-game").show();
    $("#psychic-game").hide();
    $("#bamazon").hide();
    $("#friend-finder").hide();
    $("#train-sch").hide();
    $("#unit4-game").hide();
    $("#liri").hide();
    $("#catering").hide();
    $("#burger").hide();
    $("#clicky").hide();
  });
  $("#psychic-pop").on("click", function() {
    $("#fun-finder").hide();
    $("#gif-tastic").hide();
    $("#hangman-game").hide();
    $("#psychic-game").show();
    $("#bamazon").hide();
    $("#friend-finder").hide();
    $("#train-sch").hide();
    $("#unit4-game").hide();
    $("#liri").hide();
    $("#catering").hide();
    $("#burger").hide();
    $("#clicky").hide();
  });
  $("#bamazon1-pop").on("click", function() {
    $("#fun-finder").hide();
    $("#gif-tastic").hide();
    $("#hangman-game").hide();
    $("#psychic-game").hide();
    $("#bamazon").show();
    $("#friend-finder").hide();
    $("#train-sch").hide();
    $("#unit4-game").hide();
    $("#liri").hide();
    $("#catering").hide();
    $("#burger").hide();
    $("#clicky").hide();
  });
  $("#friend-pop").on("click", function() {
    $("#fun-finder").hide();
    $("#gif-tastic").hide();
    $("#hangman-game").hide();
    $("#psychic-game").hide();
    $("#bamazon").hide();
    $("#friend-finder").show();
    $("#train-sch").hide();
    $("#unit4-game").hide();
    $("#liri").hide();
    $("#catering").hide();
    $("#burger").hide();
    $("#clicky").hide();
  });
  $("#train-pop").on("click", function() {
    $("#fun-finder").hide();
    $("#gif-tastic").hide();
    $("#hangman-game").hide();
    $("#psychic-game").hide();
    $("#bamazon").hide();
    $("#friend-finder").hide();
    $("#train-sch").show();
    $("#unit4-game").hide();
    $("#liri").hide();
    $("#catering").hide();
    $("#burger").hide();
    $("#clicky").hide();
  });
  $("#crystal-pop").on("click", function() {
    $("#fun-finder").hide();
    $("#gif-tastic").hide();
    $("#hangman-game").hide();
    $("#psychic-game").hide();
    $("#bamazon").hide();
    $("#friend-finder").hide();
    $("#train-sch").hide();
    $("#unit4-game").show();
    $("#liri").hide();
    $("#catering").hide();
    $("#burger").hide();
    $("#clicky").hide();
  });
  $("#liri1-pop").on("click", function() {
    $("#fun-finder").hide();
    $("#gif-tastic").hide();
    $("#hangman-game").hide();
    $("#psychic-game").hide();
    $("#bamazon").hide();
    $("#friend-finder").hide();
    $("#train-sch").hide();
    $("#unit4-game").hide();
    $("#liri").show();
    $("#catering").hide();
    $("#burger").hide();
    $("#clicky").hide();
  });
  $("#cat-pop").on("click", function() {
    $("#fun-finder").hide();
    $("#gif-tastic").hide();
    $("#hangman-game").hide();
    $("#psychic-game").hide();
    $("#bamazon").hide();
    $("#friend-finder").hide();
    $("#train-sch").hide();
    $("#unit4-game").hide();
    $("#liri").hide();
    $("#catering").show();
    $("#burger").hide();
    $("#clicky").hide();
  });
  $("#burger1-pop").on("click", function() {
    $("#fun-finder").hide();
    $("#gif-tastic").hide();
    $("#hangman-game").hide();
    $("#psychic-game").hide();
    $("#bamazon").hide();
    $("#friend-finder").hide();
    $("#train-sch").hide();
    $("#unit4-game").hide();
    $("#liri").hide();
    $("#catering").hide();
    $("#burger").show();
    $("#clicky").hide();
  });
  $("#clicky1-pop").on("click", function() {
    $("#fun-finder").hide();
    $("#gif-tastic").hide();
    $("#hangman-game").hide();
    $("#psychic-game").hide();
    $("#bamazon").hide();
    $("#friend-finder").hide();
    $("#train-sch").hide();
    $("#unit4-game").hide();
    $("#liri").hide();
    $("#catering").hide();
    $("#burger").hide();
    $("#clicky").show();
  });
  $("#nyt1-pop").on("click", function() {
    $("#fun-finder").hide();
    $("#gif-tastic").hide();
    $("#hangman-game").hide();
    $("#psychic-game").hide();
    $("#bamazon").hide();
    $("#friend-finder").hide();
    $("#train-sch").hide();
    $("#unit4-game").hide();
    $("#liri").hide();
    $("#catering").hide();
    $("#burger").hide();
    $("#clicky").hide();
    $("#nyt").show();
    $("#virtual").hide();
  });
  $("#virtual1-pop").on("click", function() {
    $("#fun-finder").hide();
    $("#gif-tastic").hide();
    $("#hangman-game").hide();
    $("#psychic-game").hide();
    $("#bamazon").hide();
    $("#friend-finder").hide();
    $("#train-sch").hide();
    $("#unit4-game").hide();
    $("#liri").hide();
    $("#catering").hide();
    $("#burger").hide();
    $("#clicky").hide();
    $("#nyt").hide();
    $("#virtual").show();
  });
  $(".js-gotop").on("click", function() {
    $("#fun-finder").hide();
    $("#gif-tastic").hide();
    $("#hangman-game").hide();
    $("#psychic-game").hide();
    $("#bamazon").hide();
    $("#friend-finder").hide();
    $("#train-sch").hide();
    $("#unit4-game").hide();
    $("#liri").hide();
    $("#catering").hide();
    $("#burger").hide();
    $("#clicky").hide();
    $("#nyt").hide();
    $("#virtual").hide();
  });

  $(".menu-icon").on("click", function() {
    $("nav ul").toggleClass("showing");
    $("#main-heading").hide();
  });
  $(window).on("scroll", function() {
    if ($(window).scrollTop()) {
      $("nav").addClass("yellow");
      $(".menu-1").hide();
      $("#main-heading").hide();
      $("#links").hide();
    } else {
      $("nav").removeClass("yellow");
      $("#main-heading").show();
      $(".menu-1").show();
      $("#links").show();
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

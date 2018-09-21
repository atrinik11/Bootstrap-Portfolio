$(document).ready(function() {
    console.log("document loaded");
    $("#fun").hover(function() {
        $("#fun-pop").show();
    }, function() {
        $("#fun-pop").hide();
    });
    $("#gif").hover(function() {
        $("#gif-pop").show();
    }, function() {
        $("#gif-pop").hide();
    });
    $("#psychic").hover(function() {
        $("#psychic-pop").show();
    }, function() {
        $("#psychic-pop").hide();
    });
    $("#bamazon1").hover(function() {
        $("#bamazon1-pop").show();
    }, function() {
        $("#bamazon1-pop").hide();
    });
    $("#friend").hover(function() {
        $("#friend-pop").show();
    }, function() {
        $("#friend-pop").hide();
    });
    $("#train").hover(function() {
        $("#train-pop").show();
    }, function() {
        $("#train-pop").hide();
    });
    $("#crystal").hover(function() {
        $("#crystal-pop").show();
    }, function() {
        $("#crystal-pop").hide();
    });
    $("#liri1").hover(function() {
        $("#liri1-pop").show();
    }, function() {
        $("#liri1-pop").hide();
    });
    $("#cat").hover(function() {
        $("#cat-pop").show();
    }, function() {
        $("#cat-pop").hide();
    });
    $("#burger1").hover(function() {
        $("#burger1-pop").show();
    }, function() {
        $("#burger1-pop").hide();
    });

    $("#fun-pop").on("click", function() {
        $("#fun-finder").show();
        $("#gif-tastic").hide();
        $("#psychic-game").hide();
        $("#bamazon").hide();
        $("#friend-finder").hide();
        $("#train-sch").hide();
        $("#unit4-game").hide();
        $("#liri").hide();
        $("#catering").hide();
        $("#burger").hide();
    });
    $("#gif-pop").on("click", function() {
        $("#fun-finder").hide();
        $("#gif-tastic").show();
        $("#psychic-game").hide();
        $("#bamazon").hide();
        $("#friend-finder").hide();
        $("#train-sch").hide();
        $("#unit4-game").hide();
        $("#liri").hide();
        $("#catering").hide();
        $("#burger").hide();
    });
    $("#psychic-pop").on("click", function() {
        $("#fun-finder").hide();
        $("#gif-tastic").hide();
        $("#psychic-game").show();
        $("#bamazon").hide();
        $("#friend-finder").hide();
        $("#train-sch").hide();
        $("#unit4-game").hide();
        $("#liri").hide();
        $("#catering").hide();
        $("#burger").hide();
    });
    $("#bamazon1-pop").on("click", function() {
        $("#fun-finder").hide();
        $("#gif-tastic").hide();
        $("#psychic-game").hide();
        $("#bamazon").show();
        $("#friend-finder").hide();
        $("#train-sch").hide();
        $("#unit4-game").hide();
        $("#liri").hide();
        $("#catering").hide();
        $("#burger").hide();
    });
    $("#friend-pop").on("click", function() {
        $("#fun-finder").hide();
        $("#gif-tastic").hide();
        $("#psychic-game").hide();
        $("#bamazon").hide();
        $("#friend-finder").show();
        $("#train-sch").hide();
        $("#unit4-game").hide();
        $("#liri").hide();
        $("#catering").hide();
        $("#burger").hide();
    });
    $("#train-pop").on("click", function() {
        $("#fun-finder").hide();
        $("#gif-tastic").hide();
        $("#psychic-game").hide();
        $("#bamazon").hide();
        $("#friend-finder").hide();
        $("#train-sch").show();
        $("#unit4-game").hide();
        $("#liri").hide();
        $("#catering").hide();
        $("#burger").hide();
    });
    $("#crystal-pop").on("click", function() {
        $("#fun-finder").hide();
        $("#gif-tastic").hide();
        $("#psychic-game").hide();
        $("#bamazon").hide();
        $("#friend-finder").hide();
        $("#train-sch").hide();
        $("#unit4-game").show();
        $("#liri").hide();
        $("#catering").hide();
        $("#burger").hide();
    });
    $("#liri1-pop").on("click", function() {
        $("#fun-finder").hide();
        $("#gif-tastic").hide();
        $("#psychic-game").hide();
        $("#bamazon").hide();
        $("#friend-finder").hide();
        $("#train-sch").hide();
        $("#unit4-game").hide();
        $("#liri").show();
        $("#catering").hide();
        $("#burger").hide();
    });
    $("#cat-pop").on("click", function() {
        $("#fun-finder").hide();
        $("#gif-tastic").hide();
        $("#psychic-game").hide();
        $("#bamazon").hide();
        $("#friend-finder").hide();
        $("#train-sch").hide();
        $("#unit4-game").hide();
        $("#liri").hide();
        $("#catering").show();
        $("#burger").hide();
    });
    $("#burger1-pop").on("click", function() {
        $("#fun-finder").hide();
        $("#gif-tastic").hide();
        $("#psychic-game").hide();
        $("#bamazon").hide();
        $("#friend-finder").hide();
        $("#train-sch").hide();
        $("#unit4-game").hide();
        $("#liri").hide();
        $("#catering").hide();
        $("#burger").show();
    });
    $(".js-gotop").on("click", function() {
        $("#fun-finder").hide();
        $("#gif-tastic").hide();
        $("#psychic-game").hide();
        $("#bamazon").hide();
        $("#friend-finder").hide();
        $("#train-sch").hide();
        $("#unit4-game").hide();
        $("#liri").hide();
        $("#catering").hide();
        $("#burger").hide();
    })
    $(window).scroll(function() {
        var scrollTop = $(window).scrollTop();
        if(scrollTop > 49) {
            $('body').addClass('header-fixed');
        } else {
            $('body').removeClass('header-fixed');
        }
    });
    //For responsive nav bar
    function myFunction() {
        var x = $("")
    }


    // $("#fun").on("click", function() {
    //     console.log("Fun finder was clicked");
    //     $("#work-page").hide();
    //     $("#modalwindow").css("display", "block");
    //     console.log("modal windows shows up");

    //     function DeployLink() {
            
    //     }
    //     $.expr[":"].external = function(a) {
    //         var linkhn = a.hostname.split('.').reverse();
    //         var linkhnHref = linkhn[1] + "." + linkhn[0];

    //         var domainhn = window.location.hostname.split(".").reverse();
    //         var domainHref = domainhn[1] + "." + domainhn[0];

    //         return !a.href.match(/^mailto\:/) && !a.href.match(/^tel\:/) && linkhnHref != domainHref;
    //     };

    //     $("a.external").addClass("ext_link");

    //     $(function() {
    //         $("a.ext_link").click(function() {
    //             //open a modal
    //             $("a:external").attr("data-toggle", "modal");
    //             $("a.external").attr("data-target", "#modalwindow");

    //             //go to link on modal close
    //             var url = $(this).attr("href");
    //             $(".btn-modal.btn-continue").click(function() {
    //                 window.open(url);
    //                 $(".btn-modal.btn-continue").off();
    //             });

    //             $(".btn-modal.btn-close").click(function() {
    //                 $("#modalwindow").modal("hide");
    //                 $(".btn-modal.btn-close").off();
    //             });
    //         });
    //     });
    // });
})
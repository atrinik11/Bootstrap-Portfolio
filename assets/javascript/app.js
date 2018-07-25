$(document).ready(function() {
    console.log("document loaded");
    //Modal window is hidden.....
    $("#modalwindow").css("display", "none");

    $("#fun").on("click", function() {
        console.log("Fun finder was clicked");
        $("#work-page").hide();
        $("#modalwindow").css("display", "block");
        console.log("modal windows shows up");

        function DeployLink() {
            
        }
        $.expr[":"].external = function(a) {
            var linkhn = a.hostname.split('.').reverse();
            var linkhnHref = linkhn[1] + "." + linkhn[0];

            var domainhn = window.location.hostname.split(".").reverse();
            var domainHref = domainhn[1] + "." + domainhn[0];

            return !a.href.match(/^mailto\:/) && !a.href.match(/^tel\:/) && linkhnHref != domainHref;
        };

        $("a.external").addClass("ext_link");

        $(function() {
            $("a.ext_link").click(function() {
                //open a modal
                $("a:external").attr("data-toggle", "modal");
                $("a.external").attr("data-target", "#modalwindow");

                //go to link on modal close
                var url = $(this).attr("href");
                $(".btn-modal.btn-continue").click(function() {
                    window.open(url);
                    $(".btn-modal.btn-continue").off();
                });

                $(".btn-modal.btn-close").click(function() {
                    $("#modalwindow").modal("hide");
                    $(".btn-modal.btn-close").off();
                });
            });
        });
        /*var msg1 = $("<h3 class ='text-center'>").text(userName + ":  Username already exists").css("color", "rgba(219, 50, 87,.9)", "background-color", "rgba(74, 133, 7, .2)");
        var msg = $("<h3 class ='text-center'>").text("GitHub Deploy Link: " + "https://atrinik11.github.io/Fun-Finder/");
        console.log(msg);
        var msg1 = $("<h3 class ='text-center'>").text("Code in GitHub link: " + "https://github.com/atrinik11/Fun-Finder");
        console.log(msg1);
        $("#links").append(msg);
        $("#links").append(msg1);*/
        
    });
})
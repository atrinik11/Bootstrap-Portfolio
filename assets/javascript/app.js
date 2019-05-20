$(document).ready(function() {
  console.log("document loaded");
  var iconList = [
    { title: "HTML5", icon: "devicon-html5-plain colored" },
    { title: "CSS3", icon: "devicon-css3-plain colored" },
    { title: "SASS", icon: "devicon-sass-original colored" },
    { title: "Bootstrap4", icon: "devicon-bootstrap-plain colored" },
    { title: "ReactJS", icon: "devicon-react-original colored" },
    { title: "JavaScript", icon: "devicon-javascript-plain colored" },
    { title: "jQuery", icon: "devicon-jquery-plain colored" },
    { title: "NodeJS", icon: "devicon-nodejs-plain colored" },
    { title: "ExpressJS", icon: "devicon-express-original colored" },
    { title: "MySQL", icon: "devicon-mysql-plain colored" },
    { title: "MongoDB", icon: "devicon-mongodb-plain colored" },
    { title: "Sequelize", icon: "devicon-sequelize-plain colored" },
    { title: "Git/GitHub", icon: "devicon-github-plain colored" },
    { title: "Heroku", icon: "devicon-heroku-original colored" }
  ];

  var projecFeature = [
    {
      title: "NYT",
      img: "assets/images/nyt.png",
      tech: ["Bootstrap", "CSS", "ReactJS", "MongoDB"],
      desc:
        "A MERN stack application that lets users search for articles from new york times.",
      deploy: "https://thawing-harbor-66764.herokuapp.com/",
      code: "https://github.com/atrinik11/nytreact"
    },
    {
      title: "Clicky",
      img: "assets/images/memoryGame.png",
      tech: ["Bootstrap", "CSS", "ReactJS"],
      desc: "A React.js app that lets users test their memory.",
      deploy: "https://powerful-crag-37337.herokuapp.com/.",
      code: "https://github.com/atrinik11/clicky-game"
    },
    {
      title: "Burger",
      img: "assets/images/burger.png",
      tech: ["Bootstrap", "CSS", "JavaScript", "NodeJS", "MySQL"],
      desc:
        "An app that lets users input the names of burgers they'd like to eat... and then devour them! ",
      deploy: " https://salty-lowlands-10174.herokuapp.com/",
      code: "https://github.com/atrinik11/Burgers"
    },
    {
      title: "Catering App",
      img: "assets/images/catering.jpg",
      tech: ["Bootstrap", "CSS", "JavaScript", "NodeJS", "MySQL"],
      desc:
        "Catering App was developed to enhance communication and organization within a small team. Using a centralized work space, all team members are able to view the most up-to-date information.",
      deploy: "https://cater-app.herokuapp.com/",
      code: "https://github.com/atrinik11/project2"
    },
    {
      title: "Liri",
      img: "assets/images/liri.png",
      tech: ["JavaScript", "NodeJS", "API", "File System"],
      desc:
        "LIRI is a command line node app that takes in parameters and gives back data. LIRI will display the latest tweets,        movies details,song/album/artist details. The data collected from the server is stored in a file called log.txt.",
      code: "https://github.com/atrinik11/liri-node-app"
    },
    {
      title: "Crystal",
      img: "assets/images/crystal1.png",
      tech: ["HTML", "Bootstrap", "CSS", "JavaScript"],
      desc:
        "This is a guess game where a random numbers are generated. The aim of the game is that the user has to match the random number shown on the screen by clicking the 4 crystals.",
      deploy: "https://atrinik11.github.io/unit-4-game/",
      code: "https://github.com/atrinik11/unit-4-game"
    },
    {
      title: "Train Scheduler",
      img: "assets/images/train.png",
      tech: ["HTML", "Bootstrap", "CSS", "JavaScript", "Firebase", "NodeJS"],
      desc:
        "Train schedule app incorporates Firebase to host arrival and departure data. The app retrieves and manipulates the information with Moment.js. ",
      deploy: "https://atrinik11.github.io/Train-Scheduler-/",
      code: "https://github.com/atrinik11/Train-Scheduler-"
    },
    {
      title: "FriendFinder",
      img: "assets/images/friendfinder.png",
      tech: ["HTML", "Bootstrap", "CSS", "JavaScript", "NodeJS", "ExpressJS"],
      desc:
        "A compatibility-based 'Friend Finder' app -- basically and only a friend finder app. This full-stack site will take in results from the users' surveys, and will display the name and picture of the user with the best overall match.",
      deploy: "https://serene-caverns-84461.herokuapp.com/",
      code: "https://github.com/atrinik11/Friend-finder"
    },
    {
      title: "Bamazon",
      img: "assets/images/bamazon.png",
      tech: ["JavaScript", "NodeJS", "MySQL"],
      desc:
        "Created an Amazon-like storefront with the MySQL database. The app takes orders from customers and deplete stock from the store's inventory.",
      code: "https://github.com/atrinik11/Bamazon"
    },
    {
      title: "Fun Finder",
      img: "assets/images/funfinder.png",
      tech: [
        "HTML",
        "Bootstrap",
        "CSS",
        "JavaScript",
        "Firebase",
        "Google Maps"
      ],
      desc:
        "This application developed for users to make their their vacation organized and stress free.",
      deploy: "https://atrinik11.github.io/Fun-Finder/",
      code: "https://github.com/atrinik11/Fun-Finder"
    },
    // {
    //   title: "GiFTastic",
    //   img: "assets/images/liri.png",
    //   tech: ["HTML", "Bootstrap", "CSS", "jQuery", "API"],
    //   desc:
    //     "Using the GIPHY API a dynamic web page has been developed to populates with gifs of users choice. To finish this task, the GIPHY API is called and used JavaScript and jQuery to change the HTML of the site.",
    //   deploy: "https://atrinik11.github.io/GifTastic/",
    //   code: "https://github.com/atrinik11/GifTastic"
    // },
    {
      title: "Star War",
      img: "assets/images/starwar.png",
      tech: ["HTML", "Bootstrap", "CSS", "jQuery"],
      desc:
        "This Game is developed using JQuery. The game is played by attacking the opponent using the attack button. Once the player defeat the defender, it can choose another defender. But once the player is defeated, the game is over. ",
      deploy: "https://atrinik11.github.io/starwar/",
      code: "https://github.com/atrinik11/starwar"
    },
    {
      title: "HangMan",
      img: "assets/images/hangman.png",
      tech: ["HTML", "Bootstrap", "CSS", "JavaScript"],
      desc:
        "This Hangman Game is a simple JavaScript game that allows the player to guess the word the computer chooses. When guessed correcly, the player wins and losses when all the guess are over without the correct word been discovered.",
      deploy: "https://atrinik11.github.io/hangman/",
      code: "https://github.com/atrinik11/hangman"
    },
    {
      title: "Psychi",
      img: "assets/images/psychic.png",
      tech: ["HTML", "Bootstrap", "CSS", "JavaScript"],
      desc:
        "This Psychic Game is a simple JavaScript game that allows the user to guess the letter the computer has randomly generated. The user have to choose a letter from A - Z and test their psycic ability to see if they can read a computers mind!.",
      deploy: "https://atrinik11.github.io/Psychi-Game/",
      code: "https://github.com/atrinik11/Psychi-Game"
    }
  ];

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

  //HOME PAGE
  //Dynamically renders the introductory text

  function introPage() {
    var headerText = "<span>Hi, Welcome To My Page!!</span>";
    var introText1 =
      "<p id='firstLine'><span>I'm Reena Mahapatra</span>, determined and resourceful Full Stack Developer.</p>";
    var introText2 =
      "<p id='secondLine'>My focus as a coder is to write simple, clean and dynamic codes with interactive User Interface.</p>";
    var resumeBtn =
      " <a href='https://docs.google.com/document/d/1R_lqs2Zr7KP2DGsBewy6zUPfKQDHz-0UHACJ7DuMqUc/view?usp=sharing'            target='_blank'><button class='resume'>Resume</button></a>";

    document.getElementById("welcomeText").innerHTML = headerText;
    document.getElementById("introText1").innerHTML = introText1;
    document.getElementById("introText2").innerHTML = introText2;
    document.getElementById("resumeBtn").innerHTML = resumeBtn;
  }
  $("#homeImg").css({ width: "100%", "text-align": "center" });
  var home = $("#homeImg").height();
  var h = home / 2;
  var w1 = $(window).height();
  var w = w1 / 2;
  var m = w - h - 275;
  $("#homeImg").css("margin-top", m + "px");
  //giving a typing effect
  $("window").on("load", function() {
    $("#homeImg").addClass("typing");
  });

  //PROJECT PAGE
  //Dynamically rendering the project overlay
  function projectDisplay(lists) {
    console.log("List: ", lists);
    var filterProject = [];
    var newFilter = "",
      newFilteredTechList = "";
    var tile, techList;
    var filterTechList = [];
    for (var i = 0; i < lists.length; i++) {
      lists[i].tech.forEach(function(techs) {
        techList = `<li>${techs}</li>`;
        filterTechList.push(techList);
      });
      newFilteredTechList += filterTechList.join("");
      tile = `
      <div class = 'col-sm-12 col-md-6 col-lg-4 projectArea' id=${
        lists[i].title
      }>
        <div class='card'>
          <div class=cardImg>
            <img class='card-img-top' src='${lists[i].img}' alt='${
        lists[i].title
      }'/>
            <div class='overlay'>
              <div class='description'>
                <h5>Description</h5>
                <p>${lists[i].desc}</p>
              </div>
              <div class='techUsed'><h5>Technology Used: </h5>
              <ul class='projectTech'>${newFilteredTechList}</ul>
              </div>
            </div>
          </div>
          <div class='card-body'>
            <h5 class='card-title'>${lists[i].title}</h5>  
            <div class='card-link'>
            <a href='${lists[i].deploy}' target='_blank'>Deploy</a>
            <a href='${lists[i].code}' target='_blank'>GitHub</a>
            </div>                 
          </div>
        </div>
      </div>`;
      console.log("tech: ", filterTechList.join(""));
      filterTechList = [];
      newFilteredTechList = "";
      filterProject.push(tile);
    }
    newFilter += filterProject.join("");
    document.getElementById("projectDisplay").innerHTML = newFilter;
    return newFilter;
  }

  //ABOUT PAGE
  //DYNAMICALLY RENDERING THE SKILL ICONS

  function iconDisplay(list) {
    var filterIcon = [];
    var newFilter = "";
    var icon;
    for (var i = 0; i < list.length; i++) {
      icon = `<div class='icons'><li class='icon${[i + 1]}'><i class='${
        list[i].icon
      }'><span>${list[i].title}</span></i></li></div>`;
      filterIcon.push(icon);
    }
    newFilter += `<h3>Technical Skills: </h3>` + filterIcon.join(" ");
    document.getElementById("skillList").innerHTML = newFilter;
    return newFilter;
  }
  //DYNAMICALLY RENDERING THE CONTENT OF THE PAGE
  function aboutPage() {
    var aboutHeader = `<div class='row'><div class='col-12'><h3>A Little About Me</h3>
    </div></div>`;
    var selfImage = `<div><img src='assets/images/self.jpg' id='selfImg'></div>`;
    var aboutSelf = `<p>I'm determined and resourceful Full Stack Developer. Life long learner and curious to learn and excel on new things. My focus as a coder is to write simple, clean and dynamic codes. Self motivated with good and positive attitude with proven ability to excel under pressure. Able to work in team and independently. Natural ability to scan, analyze and solve problems.
    </p><br><p>When I'm not coding:</p><br><p>I explore and learn new things with my family, learn new cooking skills, so I can persuade my family to allow me extra time to code :)
    </p><br><p>You'll find me sorting, arranging and cleaning my home. Visualizing and implementing new ways to arrange furnitures and accessories to give new dimension and look.</p><br><p>
    You'll find me in my garden experimenting on new techniques, new layout planning, etc...Wait, for this you have to wait for my garden to be ready :)                
    </p>`;
    document.getElementById("aboutHeader").innerHTML = aboutHeader;
    document.getElementById("imageDisplay").innerHTML = selfImage;
    document.getElementById("aboutDetails").innerHTML = aboutSelf;
  }

  //CONTACT PAGE
  //DYNAMICALLY RENDERING THE CONTACT ICONS
  function contactPage() {
    var contactHeader = `<h3 class="text-center">Connect with me</h3>`;
    var mapAdd = `<div class='col-12'><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d225470.28811873056!2d-82.59436447200959!3d27.99471474266003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c2b782b3b9d1e1%3A0xa75f1389af96b463!2sTampa%2C+FL!5e0!3m2!1sen!2sus!4v1557649130632!5m2!1sen!2sus" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe></div>`;

    var contactDetails = `<div class='col-12'>
    <div id= 'contactIcon'><li><a href="tel:14123393229"><i class="fas fa-phone"></i><span>Mobile</span></a></li>
        <li><a href="mailto:reenam2017@gmail.com"><i class="fas fa-at"></i><span>Email</span></a></li>
        <li><a href="skype:reenam2017@gmail.com?call"><i class="fab fa-skype"></i><span>Skype</span></a></li>
    </div>
    <div id='contactLinks'><li><a href="https://www.linkedin.com/in/rmahapatra" target="_blank"><i class="fab fa-linkedin"></i>
            <span>Linkedin</span></a></li>            
        <li><a href="https://github.com/atrinik11" target="_blank"><i class="fab fa-github-alt"></i><span>GitHub</span></a></li>
        <li><a href="https://docs.google.com/document/d/1R_lqs2Zr7KP2DGsBewy6zUPfKQDHz-0UHACJ7DuMqUc/view?usp=sharing target="_blank"><i class="fas fa-link"></i><span>Resume</span></a></li>
    </div></div>`;
    document.getElementById("contactHeader").innerHTML = contactHeader;
    document.getElementById("areaMap").innerHTML = mapAdd;
    document.getElementById("contactDetails").innerHTML = contactDetails;
  }

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
  checkWindowSize();
  introPage();
  iconDisplay(iconList);
  projectDisplay(projecFeature);
  aboutPage();
  contactPage();
});

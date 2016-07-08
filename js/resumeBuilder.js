var work = {
  "jobs": [
    {
      "employer": "Planet Express",
      "title": "Delivery Boy",
      "dates": "Jan 3000 - Future",
      "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries"
    },
    {
      "employer": "Panucci's pizza",
      "title": "Delivery Boy",
      "dates": "1998 - Dec 31, 1999",
      "description":  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries"
    }
  ],
  display: function() {
    if(this.jobs) {
      this.jobs.forEach(function(job) {
        var $work;
        $("#workExperience").append(HTMLworkStart);
        $work = $(".work-entry:last");
        $work.append(HTMLworkEmployer.replace("%data%", job.employer) + HTMLworkTitle.replace("%data%", job.title));
        $work.append(HTMLworkDates.replace("%data%", job.dates));
        $work.append(HTMLworkDescription.replace("%data%", job.description));
      });  
    }
  }
};

var projects = {
  "projects": [
    {
      "title": "Sample Project 1",
      "dates": "2014",
      "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
      "images": [
        "http://vignette4.wikia.nocookie.net/disney/images/2/29/Huey_Dewey_and_Louie_Duck.jpg",
        "https://upload.wikimedia.org/wikipedia/en/a/af/Louie_Dewey_and_Huey.png"
      ]
    }
  ],
  init: function() {
    this.display();
    this.bindImgClick();
  },
  display: function() {
    if(this.projects) {
      this.projects.forEach(function(project) {
        var $project;

        $("#projects").append(HTMLprojectStart);
        $project = $(".project-entry:last");
        $project.append(HTMLprojectTitle.replace("%data%", project.title));
        $project.append(HTMLprojectDates.replace("%data%", project.dates));
        $project.append(HTMLprojectDescription.replace("%data%", project.description));
        project.images.forEach(function(img) {
          $project.append(HTMLprojectImage.replace("%data%", img));
        });
      });
    }
  },
  bindImgClick: function() {
    $(".project-image").on("click", this.zoomImage);
  },
  zoomImage: function(e) {
    var $img = $(this);
    e.preventDefault();
    $("#mask").toggle();
    $img.toggleClass("zoomed-image");
  }
};

var bio = {
  "name": "John Doe",
  "role": "Web Developer",
  "contacts": {
    "mobile": "0912-345678",
    "email": "john@example.com",
    "github": "johndoe",
    "twitter": "@johndoe",
    "location": "San Francisco"
  },
  "welcomeMessage": "Lorem Ipsum is simply dummy text.",
  "skills": ["awesomeness", "delivering things", "cryogenic sleep", "saving the universe"],
  "biopic": "http://images6.fanpop.com/image/photos/37600000/Huey-Duck-mickey-and-friends-37665348-260-388.gif",
  display: function() {
    $("#header").prepend(HTMLheaderRole.replace("%data%", this.role));
    $("#header").prepend(HTMLheaderName.replace("%data%", this.inName(bio.name)));
    $("#header").append(HTMLbioPic.replace("%data%", this.biopic));
    $("#header").append(HTMLwelcomeMsg.replace("%data%", this.welcomeMessage));
    if(bio.contacts){
      for(var info in this.contacts) {
        $("#topContacts").append(eval("HTML"+info).replace("%data%", this.contacts[info]));
        $("#footerContacts").append(eval("HTML"+info).replace("%data%", this.contacts[info]));
      }
    }
    if(bio.skills) {
      $("#header").append(HTMLskillsStart);
      $("#skills").removeClass("flex-box");
      for(var idx in bio.skills){
        $("#skills").append(HTMLskills.replace("%data%", bio.skills[idx]));
      }
      $("#skills li").removeClass("flex-item");
    }
  },
  inName: function(full_name) {
  var first_name= full_name.split(" ")[0];
  var last_name = full_name.split(" ")[1];
  var international_name;

  first_name = first_name.charAt(0).toUpperCase() + first_name.slice(1).toLowerCase();
  last_name = last_name.toUpperCase();
  international_name = first_name + " " + last_name;
  return international_name;
  }
};

var education = {
  "schools": [
    {
      "name": "Nova Southeastern University",
      "city": "Fort Lauderdale, FL",
      "degree": "Masters",
      "majors": ["EE"],
      "dates": 2013,
      "url": "http://example.com"
    },
    {
      "name": "Eckerd College",
      "city": "Saint Petersburg, FL",
      "degree": "BA",
      "majors": ["CS"],
      "dates": 2003,
      "url": "http://example.com"
    }
  ],
  "onlineCourses": [
    {
      "title": "JavaScript Crash Course",
      "school": "Udacity",
      "dates": 2014,
      "url": "http://www.udacity.com/course/ud804"
    }
  ],
  display: function() {
    this.displaySchools();
    this.displayOnlineCourses();
  },
  displaySchools: function() {
    var $school;

    this.schools.forEach(function(school) {
      $("#education").append(HTMLschoolStart);
      $school = $(".education-entry:last");
      $school.append(HTMLschoolName.replace("%data%", school.name) + 
                     HTMLschoolDegree.replace("%data%", school.degree));
      $school.children("a").first().attr("href", school.url);
      $school.append(HTMLschoolLocation.replace("%data%", school.city));
      $school.append(HTMLschoolDates.replace("%data%", school.dates));
      school.majors.forEach(function(major) {
        $school.append(HTMLschoolMajor.replace("%data%", major));
      });
    });
  },
  displayOnlineCourses: function() {
    var $course;

    this.onlineCourses.forEach(function(course) {
      $("#education").append(HTMLonlineClasses);
      $("#education").append(HTMLschoolStart);
      $course = $(".education-entry:last");
      $course.append(HTMLonlineTitle.replace("%data%", course.title) + HTMLonlineSchool.replace("%data%", course.school));
      $course.children("a").first().attr("href", course.url);
      $course.append(HTMLonlineDates.replace("%data%", course.dates));
    });
  }
};

$("#mapDiv").append(googleMap);
education.display();
projects.init();
bio.display();
work.display();


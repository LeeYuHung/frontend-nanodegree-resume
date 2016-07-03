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
  ]
}

var projects = {
  "projects": [
    {
      "title": "Sample Project 1",
      "dates": "2014",
      "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
      "images": [
        "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png",
        "https://lh3.googleusercontent.com/-IhVc_Wxy6dY/AAAAAAAAAAI/AAAAAAAAAAA/fl45Fty4PEI/photo.jpg"
      ]
    }
  ]
}

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
  "welcomeMessage": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  "skills": ["awesomeness", "delivering things", "cryogenic sleep", "saving the universe"],
  "biopic": "images/huey.jpg"
}

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
  ]
}


$("#header").append(HTMLheaderName.replace("%data%", bio.name));
if(bio["skills"]) {
  $("#header").append(HTMLskillsStart);
  for(idx in bio.skills){
    $("#skills").append(HTMLskills.replace("%data%", bio.skills[idx]));
  }
}

function displayWork() {
  if(work["jobs"]) {
    work.jobs.forEach(function(job, idx) {
      var $work_entry;
      $("#workExperience").append(HTMLworkStart);
      $work_entry = $(".work-entry").eq(idx);
      $work_entry.append(HTMLworkEmployer.replace("%data%", job.employer) + HTMLworkTitle.replace("%data%", job.title));
      $work_entry.append(HTMLworkDates.replace("%data%", job.dates));
      $work_entry.append(HTMLworkDescription.replace("%data%", job.description));
    });  
  }
}
displayWork();

$("#main").append(internationalizeButton);

function inName(full_name) {
  var first_name= full_name.split(" ")[0];
  var last_name = full_name.split(" ")[1];
  var international_name;
  first_name = first_name.charAt(0).toUpperCase() + first_name.slice(1).toLowerCase();
  last_name = last_name.toUpperCase();
  international_name = first_name + " " + last_name;

  return international_name;
}

console.log(inName("Huey Lee"));
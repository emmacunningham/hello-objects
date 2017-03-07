// Array of people objects
var people = [
  {
    name: "Emma Cunningham",
    github: "emmacunningham",
    email: "the.cunning.ham@gmail.com",
    role: "instructor"
  },
  {
    name: "Abraham Orozco",
    github: "abraham",
    email: "abe@heartofla.org",
    role: "instructor"
  },
  {
    name: "Julio Almanza",
    github: "Clovertrebol",
    email: "julioalmanza@outlook.com",
    role: "student"
  },
  {
    name: "Phillip Bandel",
    github: "Philbandel",
    email: "msnavidad@gmail.com",
    role: "student"
  },
  {
    name: "Paul Kong",
    github: "paulkongga",
    email: "kong.pj@gmail.com",
    role: "student"
  },
  {
    name: "Justin Harvey",
    github: "jlharvey036",
    email: "jl.harvey036@gmail.com",
    role: "student"
  },
  {
    name: "Lisa Kim",
    github: "365printinginc",
    email: "lisa.kim@365printinginc.com",
    role: "student"
  },
  {
    name: "Tony Lee",
    github: "tlee0706",
    email: "tlee0706@gmail.com",
    role: "student"
  },
  {
    name: "Khoi Tran",
    github: "Ktran031",
    email: "ktran031@gmail.com",
    role: "student"
  },
  {
    name: "Nisa Andrews",
    github: "nisa1",
    email: "nisa.andrews@gmail.com",
    role: "student"
  },
  {
    name: "Luis Mendoza",
    github: "mightymendoza",
    email: "mightymendoza@gmail.com",
    role: "student"
  },
  {
    name: "Naomi Tsuji",
    github: "ga-naomi",
    email: "naomi@citrusstudios.com",
    role: "student"
  },
  {
    name: "Kristina Bell",
    github: "quebell7",
    email: "kbell.marinescu@gmail.com",
    role: "student"
  }
];

$(document).ready(pageReady);

function pageReady() {

  // Loop over the people array
  people.forEach(function(element, index) {

    // Use the makePersonElement to make a DOM element with individual person's details
    var newPersonElement = makePersonElement(element);

    // Append the new element to the #people-container element
    $("#people-container").append(newPersonElement);

  });


  $(".filter-button").click(filterFunction);

  function filterFunction() {
    // Clear previous active button
    $(".filter-button").removeClass("active");

    // Add active class to current button
    $(this).addClass("active");

    // Get the ID from this element
    var filterType= $(this).attr("id");

    // Clear results first
    $("#people-container").empty();


    // Show ALL people when the filter type is all
    if (filterType == "all") {

      people.forEach(function(element, index) {

        // Use the makePersonElement to make a DOM element with individual person's details
        var newPersonElement = makePersonElement(element);

        // Append the new element to the #people-container element
        $("#people-container").append(newPersonElement);

      });

    }
    // Show only students when the filter type is student
    else if (filterType == "student") {

      people.forEach(function(element, index) {

        if (element.role == "student") {
          var newPersonElement = makePersonElement(element);

          // Append the new element to the #people-container element
          $("#people-container").append(newPersonElement);
        }

      });

    }
    // Show only instructors when the filter type is instructor
    else if (filterType == "instructor") {

      people.forEach(function(element, index) {

        if (element.role == "instructor") {
          var newPersonElement = makePersonElement(element);

          // Append the new element to the #people-container element
          $("#people-container").append(newPersonElement);
        }

      });

    }
  }

}


// Creates and returns a DOM element with a person's details
function makePersonElement(person) {

  var personContainer = $("<div class='person-container'></div>");

  // Creates an h2 element with person's name as the content
  var nameElement = $("<h2>"+ person.name + "</h2>");

  // Creates an h3 element with person's github username as the content
  var githubElement = $("<h3>GitHub: "+ person.github + "</h3>");

  // Creates an h3 element with person's email as the content
  var emailElement = $("<h3>Email: "+ person.email + "</h3>");

  // Add class on person-container based on their role
  personContainer.addClass(person.role);

  // Append each of the elements to the #people-container element
  personContainer.append(nameElement);
  personContainer.append(githubElement);
  personContainer.append(emailElement);

  return personContainer;
}


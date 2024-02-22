
// Q1. Own resume data in JSON format// 

let resume = [{
  "basics": {
    "name": "Srikanth",
    "lastName": "Kodali"
    "age": "36",
    "gender": "male",
    "email": "skkodali@gmail.com",
    "phone": "9666739739",
    "address": {
        "city": "Bangalore",
        "state": "Karnataka",
        "country": "India",
        "pincode": "560066",
      },
  },

    "skills" : [
    {
      "skills 1": "Leadership and Team management",
      "skills 2": "problemsSolving & Decision-making",
      "skills 3": "quality adaptability to changing project requirements"
    }
  ],

  "workExperience" : [
    {
      "company": "codex biosciences",
      "position": "sales and marketing head",
      "from": "sep-2018",
      "to": "till date"
    },
    {
      "company": "prime living projects pvt ltd",
      "position": "production and marketing head",
      "from": "june-2014",
      "to": "sep-2018"
    },
    {
      "company": "coastal homes",
      "position": "project manager",
      "from": "sep-2011",
      "to": "may-2014"
    }
  ],

  "education" : [
    {
      "institute": "wright state university",
      "degree": "master of science",
      "from": "june-2009",
      "to": "march-2011"
    },
    {
      "institute": "PITAM",
      "degree": "btech biotechnology",
      "from": "march-2008",
      "to": "june-2004"
    }
  ]
}
]

//Q2. For the above JSOn iterating all over the loops //


// For Loop - Method//

for (let i = 0; i < resume.length; i++){
console.log(resume[i]);
}

console.log("*****************************************************************")

// for in loop - Method//

for (let data in resume) {
  console.log(resume[data]);
}

console.log("******************************************************************")

// for of loop - Method//

for (let data of resume){
  console.log(data);
}

console.log("******************************************************************")

// for each Loop - Method//
resume.forEach((i) => console.log(i));

console.log("******************************************************************")

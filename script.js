//Q 1. Create your own resume in JSON format.
// Ans :
let myResume=[{
    "basics": {
      "name": "SAMUEL M",
      "email": "samuelss3021@gamil.com",
      "phone": 8667423139,
      "degree": "B.Sc.Information Technology",
      "location": {
        "address": "No :81,lenin nagar ,samipillaithottam",
        "postalCode": 605008,
        "city": "pondicherry",
        "state": "pondicherry",
        "country": "India"
      },
      "profiles": [
        {
          
          "github":"https://github.com/samuel-murugan"
        }
      ]
    },
    "work": [
      {
        "company": "Ajay Pharmacy",
        "position": "Sales Man",       
        "summary": "during college time i'm going to work part time in medical shop",
      },
    ],
    "education": [
      {
        "institution": "Saradha Gangadhran college",
        "department": "Information Technology",
        "studyType": "fulltime",
        "batch start year": 2019,
        "batch end year": 2022,
        "gpa":6.38,
      }
    ],
    "skills": [
      {
        "name": "full stack-mern",
        "level": "learning",
        
      }
    ],
    "languages": [
      {
        "language": "Tamil,Enlish",
      }
    ],
    
  }
  console.log(myResume);
]
//Q 2 for the above JSON resume iterate for in loop
// Ans 
 for (var key in myResume) {
      console.log(myResume[key].education.department);
      console.log(myResume[key].basics.name);
      console.log(myResume[key].profiles.github)
 }
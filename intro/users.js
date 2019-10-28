
var users = [
    {
      fname: "Kermit",
      lname: "the Frog",
      languages: ["Python", "JavaScript", "C#", "HTML", "CSS", "SQL"],
      interests: {
        music: ["guitar", "flute"],
        dance: ["tap", "salsa"],
        television: ["Black Mirror", "Stranger Things"]
      }
    },
    {
      fname: "Winnie",
      lname: "the Pooh",
      languages: ["Python", "Swift", "Java"],
      interests: {
        food: ["honey", "honeycomb"],
        flowers: ["honeysuckle"],
        mysteries: ["Heffalumps"]
      }
    },
    {
      fname: "Arthur",
      lname: "Dent",
      languages: ["JavaScript", "HTML", "Go"],
      interests: {
        space: ["stars", "planets", "improbability"],
        home: ["tea", "yellow bulldozers"]
      }
    }
  ];
  
function userLanguage(o){
    for(let i=0; i<o.length; i++){
        var l = o[i].languages
        var lang="";
        for(j=0; j<l.length-2; j++){
            lang+=l[j]+", " ;
        }
        lang+= "and "+l[l.length-1]+".";
        
        console.log(o[i].fname,o[i].lname,"knows",lang);
    }
}


userLanguage(users);




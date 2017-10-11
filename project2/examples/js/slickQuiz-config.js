// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
    "info": {
        "name":  ""  ,
        "main":    "<h3>Test out what you learned about Virtual Reality!</h3>"
       
    },
    "questions": [
        { // Question 1 - Multiple Choice, Single True Answer
            "q": "What is Virtual Reality?",
            "a": [
                {"option": "Virtual World on top of the current world",      "correct": false},
                {"option": "is a simulated virtual environment that tries to immerse the user in a world just like his or her own with some add ons and changes",     "correct": false},
                {"option": "The use of computer technology to create interactive simulated environment where the user is inside the immersed in the experience",      "correct": true},
         // no comma here
            ],
            "correct": "<p><span>That's correct!</span>Virtual Reality is a simulated virtual environment that tries to immerse the user in a world just like his or her own with some add ons and change</p>",
            "incorrect": "<p><span>Not quite.</span> Virtual Reality is a simulated virtual environment that tries to immerse the user in a world just like his or her own with some add ons and change.</p>" // no comma here
        },
        { // Question 2 - Multiple Choice, Multiple True Answers, Select Any
            "q": "Is VR monoscopic or stereoscopic?",
            "a": [
                {"option": "Monoscopic",               "correct": false},
                {"option": "Stereoscopic",   "correct": false},
                {"option": "Both",               "correct": true},
             // no comma here
            ],
         
            "correct": "<p><span>That's correct!</span>VR is monoscopic and stereoscopic</p>",
            "incorrect": "<p><span>Not quite.</span> VR is both monoscopic and stereoscopic!</p>" // no comma here
        },
        { // Question 3 - Multiple Choice, Multiple True Answers, Select All
            "q": "Which ones of these are VR headsets?",
            "a": [
                {"option": "Microsoft Azure",           "correct": false},
                {"option": "Google Cardboard",                  "correct": true},
                {"option": "Nintendo Saphire",  "correct": false},
                {"option": "Facebook DS",          "correct": false} // no comma here
            ],
            "correct": "<p><span>That's correct. </span>Google Cardboard is known as a quality affordable VR option </p>",
            "incorrect": "<p><span>Nope</span> That's not a headset!</p>" // no comma here
        },
      
        
    ]
};
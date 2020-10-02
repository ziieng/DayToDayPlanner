//get current date/time from Moment, store in a variable

//Populate date at top of page - .format(dddd, MMMM Do YYYY)

//Pull existing schedule object out of local storage, or start with some defaults
//Thinking to use an object, like in the quiz activity.
let scheduleKeeper = [{
        label: "9am",
        time: 09,
        text: "Sign in to online systems"
    },
    {
        label: "10am",
        time: 10,
        text: ""
    },
    {
        label: "11am",
        time: 11,
        text: ""
    },
    {
        label: "12pm",
        time: 12,
        text: "Lunch!"
    },
    {
        label: "1pm",
        time: 13,
        text: ""
    },
    {
        label: "2pm",
        time: 14,
        text: ""
    },
    {
        label: "3pm",
        time: 15,
        text: ""
    },
    {
        label: "4pm",
        time: 16,
        text: ""
    },
    {
        label: "5pm",
        time: 17,
        text: "Shut down computer"
    }
]

//Add rows to page for each hour with a .forEach? or for...in?
//Add label with block.label

//Add text field
//Check if time is past, present, or future. Apply relevant class.

//Add save button

//Append row to page

//On save, update object of relevant time block and localStorage

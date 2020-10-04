//get current date/time from Moment, store in a variable
let now = moment()

//Populate date at top of page - .format(dddd, MMMM Do YYYY)
$("#currentDay").text(now.format("dddd, MMMM Do YYYY"))

//Pull existing schedule object out of local storage, or start with some defaults
if (localStorage.getItem("scheduleStorage")) {
    let scheduleKeeper = JSON.parse(localStorage.getItem("scheduleStorage"))

} else {
    //Do I need the label property, or can I just have Moment parse a time to make it?
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
}

//Add rows to page for each hour with a .forEach? or for...in?
// for (block in scheduleKeeper) {
let newRow = $("<row>").addClass("row form-inline col-md-10 mx-auto no-gutters px-0")
let newLabel = $("<div>").addClass("col-1 h-100 time-block hour")
// newLabel.text(block.label)
newLabel.text("test")
let newArea = $("<textarea>").addClass("col-10 h-100")
// newArea.val(block.text)
newArea.val("testtwo")
let newButton = $("<button>").addClass("btn col-1 h-100 saveBtn")
newButton.html('<i class="far fa-save"></i>')
newRow.append(newLabel)
newRow.append(newArea)
newRow.append(newButton)
$("#planner").append(newRow)
//Add label with block.label

//Add text field
//Check if time is past, present, or future. Apply relevant class.

//Add save button

//Append row to page

//On save, update object of relevant time block and localStorage
// };
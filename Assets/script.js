//get current date/time from Moment, store in a variable
let now = moment()
let nHour = moment().hour()
let scheduleKeeper = []

//Populate date at top of page - .format(dddd, MMMM Do YYYY)
$("#currentDay").text(now.format("dddd, MMMM Do YYYY"))

//Pull existing schedule object out of local storage, or start with some defaults
if (localStorage.getItem("scheduleStorage")) {
    scheduleKeeper = JSON.parse(localStorage.getItem("scheduleStorage"))
} else {
    //Do I need the label property, or can I just have Moment parse a time to make it?
    scheduleKeeper = [{
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
            text: ""
        },
        {
            label: "1pm",
            time: 13,
            text: "Lunch!"
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
//Add rows to page for each hour
for (i = 0; i < scheduleKeeper.length; i++) {
    let block = scheduleKeeper[i]
    console.log(block)
    let newRow = $("<row>").addClass("row form-inline col-md-10 mx-auto no-gutters px-0")
    //Add label with block.label
    let newLabel = $("<div>").addClass("col-1 h-100 time-block hour")
    newLabel.text(block.label)
    //Add text field, populate any saved text
    let newArea = $("<textarea>").addClass("col-10 h-100")
    newArea.val(block.text)
    //Check if time is past, present, or future. Apply relevant class.
    if (block.time > nHour) {
        newArea.addClass("future")
    } else if (block.time == nHour) {
        newArea.addClass("present")
    } else {
        newArea.addClass("past")
    }
    //Add save button
    let newButton = $("<button>").addClass("btn col-1 h-100 saveBtn")
    newButton.html('<i class="far fa-save"></i>')
    newRow.append(newLabel)
    newRow.append(newArea)
    newRow.append(newButton)
    $("#planner").append(newRow)
};

//Append row to page

//On save, update object of relevant time block and localStorage
// };
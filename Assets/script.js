//get current date/time from Moment
let now = moment()
//store current hour for later comparisons
let nHour = moment().hour()
let scheduleKeeper = []

//Populate date at top of page - .format(dddd, MMMM Do YYYY)
$("#currentDay").text(now.format("dddd, MMMM Do YYYY h:mm a"))

//Pull existing schedule object out of local storage, or start with some defaults
if (localStorage.getItem("scheduleStorage")) {
    //Parse stored array
    scheduleKeeper = JSON.parse(localStorage.getItem("scheduleStorage"))
} else {
    //Load default schedule
    scheduleKeeper = [{
            time: 09,
            text: "Sign in to online systems"
        },
        {
            time: 10,
            text: ""
        },
        {
            time: 11,
            text: ""
        },
        {
            time: 12,
            text: ""
        },
        {
            time: 13,
            text: "Lunch!"
        },
        {
            time: 14,
            text: ""
        },
        {
            time: 15,
            text: ""
        },
        {
            time: 16,
            text: ""
        },
        {
            time: 17,
            text: "Shut down computer"
        }
    ]
    //Save default schedule
    localStorage.setItem("scheduleStorage", JSON.stringify(scheduleKeeper))
}
//Add rows to page for each hour, and note row's index in interactive elements
for (i = 0; i < scheduleKeeper.length; i++) {
    let block = scheduleKeeper[i]
    console.log(block)
    let newRow = $("<row>").addClass("row form-inline col-md-10 mx-auto no-gutters px-0")
    //Add label with block.label
    let newLabel = $("<div>").addClass("col-1 h-100 time-block")
    newLabel.text(moment(block.time, 'HH').format('ha'))
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
    //give index data element to textarea
    newArea.attr("data-index", i)
    //Add save button
    let newButton = $("<button>").addClass("btn col-1 h-100 saveBtn")
    newButton.html('<i class="far fa-save"></i>')
    //give index data element to save button
    newButton.attr("data-index", i)
    //Attach elements to row
    newRow.append(newLabel)
    newRow.append(newArea)
    newRow.append(newButton)
    //Append row to page
    $("#planner").append(newRow)
};
//On save, update object of relevant time block and localStorage
//click listener for save buttons
$(document).on("click", ".saveBtn", saveText);

function saveText() {
    //get data-index from button clicked
    let index = $(this).attr("data-index")
    //get text from matching textarea
    let newText = $("textarea[data-index=" + index + "]").val()
    //update schedule array
    scheduleKeeper[index].text = newText
    //save updated array in localStorage
    localStorage.setItem("scheduleStorage", JSON.stringify(scheduleKeeper))
}
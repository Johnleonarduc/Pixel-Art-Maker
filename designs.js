// Declare global variables
let gridHeight, gridWidth;
// When size is submitted by the user, call makeGrid()
submitAction();
// After making the grid, enable pixelArt
drawPixelArt();

//submitAction function declaration
function submitAction(){
    $("form").submit(function(event){
        // Store grid size (height and width)
        gridHeight = $("#input-height").val();
        gridWidth = $("#input-width").val();
        // Clear grid
        $("table tr").remove();
        // Call makeGrid function to create the grid using inputed grid sizes
        makeGrid();
    // Ensures the submit button does not try to submit values to the server
    event.preventDefault();
    });
}

//makeGrid function declaration
function makeGrid(){
    //Nested loop to create grid using table
    let i=0;    //initialize counter for while-loop
    while(i<gridHeight){
         //creates a row each loop turn
        $("table").append("<tr></tr>");

        for(let j=0; j<gridWidth; j++){
            //creates columns for current row
            $("tr:last").append("<td></td>");
        }
    i=i+1;  //increment counter for while-loop
    }
}

//drawPixelArt function declaration
function drawPixelArt(){
    // PAINTS CELL: Select cell based on the click mouse event
    $(document).on("click","tr td", function(event) {
        // Store selected color value
        const colorValue = $("#color-picker").val();
        // Applies color to selected cell as background color
        $(this).css("background-color", colorValue);
    });
    // ERASES CELL: Select cell based on the double click mouse event
    $(document).on("dblclick","tr td", function(event) {
        //change selected td background colours to white
        $(this).css("background-color", "#fff");
    });
    // Extra-Feature (clearGrid button event listener)
    $(document).on("click",".clear-grid", function(event) {
        //change all td background colours to white
        $("td").css("background-color", "#fff");
    });
}
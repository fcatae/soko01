
var level_0 =
    [
        "*************",
        "*P  *    * E*",
        "*     E*   **",
        "*************"
    ];

var Level = {};

Level.complete = function () {

    document.getElementById("levelcomplete").className = "active";
    InputMgr.stop();

};
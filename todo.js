$(document).ready(function () {

    //add notes
    $("#addTodo").click(function (e) {
        e.preventDefault();
        var newMsg = $('input[name="newTodo"').val();
        console.log(newMsg);


        //forgive me append to end of todolist
        var newIns = '<div class="input-group mb-3 bg-light' + ' remove' + '">' +
            '<div class="input-group-prepend">' +
            '<span class="input-group-text"><input type="checkbox"></span>' +
            ' </div>' +
            ' <label class=" flex-fill ml-1 p-1">' + newMsg +
            '   </label>' +
            ' </div>';

        if (newMsg != "")
            $("#todoList").append(newIns);


    });
    //delete only if checked
    $("#deleteTodo").click(function (e) {
        e.preventDefault();

        $('input:checked').closest(".remove").remove();

    });

});

// for dynamic elements added
$(document).on('click', "input:checkbox", function (e) {

    var f = $(this).closest(".input-group-prepend").next();
    if (!(f.hasClass("line-through"))) {
        f.addClass("line-through");
    } else {
        f.removeClass("line-through");
    }


});
// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require_tree .


$(document).ready(function () {
    $('#submit').on("click", function (e) {
        e.preventDefault();
        var toDo = $("#todo").val();
        $('#todo-list').append('<li id="list-item">' + toDo + '<span class="todo-delete">' + '✗' + '</span>' + '<span class="todo-completed">' + '✓' + '</span>' + '</li>');


        if (toDo != "") {
            $('#close').show();
            $('#message').show();
            $('#close').delay(5000).fadeOut();
            $('#message').delay(5000).fadeOut();
        }
    });

    $('#close').on("click", function (e) {
        e.preventDefault();
        $('#close').hide();
        $('#message').hide();
    });

    $('#delete-close').on("click", function (e) {
        e.preventDefault();
        $('#delete').hide();
        $('#delete-close').hide();
    });



    $('body').on('click', '.todo-delete', function (e) {
        e.preventDefault();
        $('#delete').show();
        $('#delete-close').show();
        $(this.parentElement).remove();
        $('#delete').delay(5000).fadeOut();
        $('#delete-close').delay(5000).fadeOut();
    });

    $('body').on('click', '.todo-completed', function (e) {
        e.preventDefault();
        var row = $(this.parentElement);
        $(this.parentElement).remove();
        $('#todo-completed').append(row);
    });

//   I need the checkmark to to disappear as it moves to the completed list.  I could just change it to another symbol.
//   The next step is to figure that out, come up with an undo function, and move on the the json shit.
    

});
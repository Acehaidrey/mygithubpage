$(document).ready(function(){

    // For smooth scrolling effects
    $("ul.nav li a[href^='#']").click(function(){
        $("html, body").stop().animate({
            scrollTop: $($(this).attr("href")).offset().top
        }, 700);
    });

    // For all the modal pop ups in the project section
    $('#2048').click(function() {
        $("#modal-2048").modal('show');
    });

    $('#db61b').click(function() {
        $("#modal-db61b").modal('show');
    });

    $('#kjumpingcubes').click(function() {
        $("#modal-kjumpingcubes").modal('show');
    });

    $('#graphs').click(function() {
        $("#modal-graphs").modal('show');
    });

    $('#git').click(function() {
        $("#modal-git").modal('show');
    });

    $('#call').click(function() {
        $("#modal-call").modal('show');
    });

    $('#cpu').click(function() {
        $("#modal-cpu").modal('show');
    });

    $('#cats').click(function() {
        $("#modal-cats").modal('show');
    });

    $('#cnn').click(function() {
        $("#modal-cnn").modal('show');
    });

    $('#tsp').click(function() {
        $("#modal-tsp").modal('show');
    });

    $('#AI').click(function() {
        $("#modal-AI").modal('show');
    });

    $('#mysite').click(function() {
        $("#modal-mysite").modal('show');
    });


    // Form information

    $(function() {

        // Get the form.
        var form = $('#ajax-contact');

        // Get the messages div.
        var formMessages = $('#form-messages');

        // Set up an event listener for the contact form.
        $(form).submit(function(e) {
            // Stop the browser from submitting the form.
            e.preventDefault();

            // Serialize the form data.
            var formData = $(form).serialize();

            // Submit the form using AJAX.
            $.ajax({
                type: 'POST',
                url: $(form).attr('action'),
                data: formData
            })
            .done(function(response) {
                // Make sure that the formMessages div has the 'success' class.
                $(formMessages).removeClass('error');
                $(formMessages).addClass('success');

                // Set the message text.
                $(formMessages).text(response);

                // Clear the form.
                $('#name').val('');
                $('#email').val('');
                $('#message').val('');
            })
            .fail(function(data) {
                // Make sure that the formMessages div has the 'error' class.
                $(formMessages).removeClass('success');
                $(formMessages).addClass('error');

                // Set the message text.
                if (data.responseText !== '') {
                    $(formMessages).text(data.responseText);
                } else {
                    $(formMessages).text('Oops! An error occured and your message could not be sent.');
                }
            });
        });
    });
   

});  
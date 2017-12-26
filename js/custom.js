/**
 * Cookie Bar
 * Replace your own text
 */

$(window).on("load", function () {
    if (Cookies.get('cookiebar') === undefined) {
        $('body').append('<div class="cookie" id="cookie"><p>Ma paragraph Cookies explanations<a href="#" id="modal_btn"> See More </a><span class="cookie_btn" id="cookie_btn">X Close</span></p></div>')
    }

    $('#cookie_btn').click(function (e) {
        e.preventDefault();
        $('#cookie').fadeOut();
        Cookies.set('cookiebar', 'viewed', { expires: 30 * 12 })
    })

// The Modal
    $('body').append("<div id='myModal' class='modal'><div class='modal-content'><span class='close'>&times;</span><h3>Why Cookies?</h3><h4>Cookies do ....</h4><ul><li>This....</li><li>This too...</li><li>And finally this</li></ul><h3>How to delete or desactivate Cookies ...</h3><p>See your navigator configuration :-p </p></div></div>");

// Get the modal
    var modal = document.getElementById('myModal');

// Get the button that opens the modal
    var btn = document.getElementById("modal_btn");

// Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
    if(btn) {
        btn.onclick = function () {
            modal.style.display = "block";
        }
    }
// When the user clicks on <span> (x), close the modal
    if(span) {
        span.onclick = function () {
            modal.style.display = "none";
        }
    }
// When the user clicks anywhere outside of the modal, close it
    if (event.target == modal) {
        modal.style.display = "none";
    }

});
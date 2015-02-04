//Problem: User when clicking on image goes to a dead end
//Solution: Create an overlay with the large image - Lightbox

$(document).ready(function() {
// capture click event on image
// prevent new page from opening on click
    $('#imageGallery a').on('click', function(event) {
        event.preventDefault();
        console.log('event prevented, yo');
    })




});
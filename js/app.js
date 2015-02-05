//Problem: User when clicking on image goes to a dead end
//Solution: Create an overlay with the large image - Lightbox

$(document).ready(function() {
// capture click event on image
// prevent new page from opening on click
    
    var $image = $('<img>');
    var $overlay = $('<div id="overlay"></div>');
    
    $('body').append($overlay);
    $($overlay).append($image);
    
    //Shows overlay when user clicks on image
    $('#imageGallery a').on('click', function(event) {
        event.preventDefault();
        console.log('event prevented, yo');
        
        var location = $(this).attr('href');
        console.log(location);
        
        $image.attr('src', location);
        
        $($overlay).show();        
    })
    
    
    //Hides overlay when user clicks on it
    $($overlay).on('click', function(){
        $(this).hide();
    });



});
 $('#searchBox').keyup(function() {
    var filterValue = $(this).val();

    //Show all
    $('.gallery > li').each(function(index, item) {
        $(this).show();
    });

    //search items that don't contain the search value
    var itemsToHide = $('.gallery').find('li').not(function(index) {
        var currentLiCode = $(this).html();       
        //return the result of the pattern matching of our word from the search bar. The gi means global, case insensitive search
        return currentLiCode.match(new RegExp(filterValue, "gi"));
    });

    //hide the non-matching items
    itemsToHide.each(function(index) {
        $(this).hide();
        
    });
});
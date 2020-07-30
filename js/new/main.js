$(function(){
	$("#wizard").steps({
        headerTag: "h4",
        bodyTag: "section",
        transitionEffect: "fade",
        enableAllSteps: true,
        titleTemplate :'<span class="number">#index#</span>',
        labels: {
            current: "",
            finish: "Submit",
            next: "Next",
            previous: "Previous"
        },
        onStepChanging: function (event, currentIndex, newIndex) { 
            if ( newIndex >= 1 ) {
                $('.steps ul li:first-child a .step-arrow').remove();
            } else {
                $('.steps ul li:first-child a').append('<img src="images/step-arrow.png" alt="" class="step-arrow">');
            }

            if ( newIndex === 1 ) {
                $('.steps ul li:nth-child(2) a').append('<img src="images/step-arrow.png" alt="" class="step-arrow">');;
            } else {
                $('.steps ul li:nth-child(2) a .step-arrow').remove();
            }

            if ( newIndex === 2 ) {
                $('.steps ul li:nth-child(3) a').append('<img src="images/step-arrow.png" alt="" class="step-arrow">');;
            } else {
                $('.steps ul li:nth-child(3) a .step-arrow').remove();
            }
            return true; 
        }
    });
    // Create Steps Image
    $('.steps ul li:first-child a').append('<img src="images/step-1.png" alt="">').append('<img src="images/step-arrow.png" alt="" class="step-arrow">');
    $('.steps ul li:nth-child(2) a').append('<img src="images/step-2.png" alt="">');
    $('.steps ul li:last-child a').append('<img src="images/step-3.png" alt="">');
})


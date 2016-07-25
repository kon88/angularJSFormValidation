$(".textintro").velocity("slideDown", {duration: 750})

$("fieldset input").velocity("callout.pulse", {stagger: 300, delay: 1000});

$(".page, section, fieldset, input").velocity({
    translateY: [0, 100],
    opacity: [1, 0]
}, {
    delay: 1500,
    duration: 800,
    display: 'block',
    easing: [70, 8]
}, {delay:1000});

$("fieldset input").velocity("callout.bounce", {stagger: 200, delay: 1000});

$("fieldset input").velocity("transition.flipXIn", {stagger: 200, delay: 2000});

$("fieldset input").velocity("transition.perspectiveDownIn", {stagger: 200, delay: 3000});

import { createApp } from 'vue'
import data from './data.js'
import App from './App.vue'

createApp(App).mount('#app')

// Sometimes need to refresh for this to work
document.getElementById("cards").onmousemove = e => {
    for(const card of document.getElementsByClassName("flower")) {
        const rect = card.getBoundingClientRect(),
            x = e.clientX - rect.left,
            y = e.clientY - rect.top;
        card.style.setProperty("--mouse-x", `${x}px`);
        card.style.setProperty("--mouse-y", `${y}px`);
    };
}

// Need to wrap the function for 'document ready'
$(function() {
    $(".hint").each(function() {
        var str = $( this ).html();
        if(!str.includes('$')){
            $( this ).html( "$" + str );
        }
    });
});

// Metro UI has special 'selected' class fml
$('.flower').click(function(){
	$(this).toggleClass('itslit');
})

var clicked = 0
$('.main-header').click(function(){
	clicked++;
    if (clicked>=8) {
        $('#app').toggleClass('wooo');
    } 
})

var colors = data.map(translateColors);
function translateColors(flower) {
    switch (flower.color) {
        case 'weiss':
            return 'navajowhite';
        case 'pastell bunt':
            return 'plum';
        case 'china red':
            return 'indianred';
        case 'zartes violett':
            return 'mediumpurple';
        case 'rosa':
            return 'pink';
        case 'blau':
            return 'blue';
        case 'violett':
            return 'slateblue';
        case 'zartes rosa':
            return 'palevioletred';
        case 'gelb':
            return 'gold';
        case 'gebleicht':
            return 'wheat';
        case 'natur':
            return 'tan';
        case 'grun':
            return 'yellowgreen';
        case 'rot':
            return 'firebrick';
        case 'grau':
            return 'dimgray';
        case 'natur weiss':
            return 'moccasin';
        default:
            return flower.color;
    }
}

colors.forEach(setAccent);
function setAccent(color, index) {
    const accent = document.getElementsByClassName("flower-accent")[index];
    accent.style.setProperty("--accent-color", color);
}

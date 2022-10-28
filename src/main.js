import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')

$(function() {
    $(".hint").each(function() {
        var str = $( this ).html();
        if(!str.includes('$')){
            $( this ).html( "$" + str );
        }
    });
});

$("cards").onmousemove = e => {
    for(const card of document.getElementsByClassName("flower")) {
        const rect = card.getBoundingClientRect(),
            x = e.clientX - rect.left,
            y = e.clientY - rect.top;

        card.style.setProperty("--mouse-x", `${x}px`);
        card.style.setProperty("--mouse-y", `${y}px`);
    };
}
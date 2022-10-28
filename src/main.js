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
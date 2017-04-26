odoo.define("latest_blog_post.snippet_small", function(require){
"use strict";
var animation = require("web_editor.snippets.animation");

latest_blog_post.registry.animation = animation.Class.extend({
    selector: ".oe_latest_blog_post_list",
    start: function(){
        $.get('/blogpost/get_latest_blog_post').then(function(data){
            alert('snippet_small_layout');
            if(data){
                $(".oe_latest_blog_post_list").replaceWith(data)
            }
        })
    }
})
});

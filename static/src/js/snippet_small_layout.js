odoo.define("latest_blog_post.snippet_small", function(require){
"use strict";
var animation = require("web_editor.snippets.animation");

latest_blog_post.registry.animation = animation.Class.extend({
    selector: ".oe_latest_blog_post",
    start: function(){
        $.get('/blogpost/get_latest_blog_post').then(function(data){
            alert('xxxx');
            if(data){
                $(".oe_latest_blog_post_list").replaceWith(data)
            }
        })
    }
})
});

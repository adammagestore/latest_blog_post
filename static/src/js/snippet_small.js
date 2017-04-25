odoo.define("latest_blog_post.snippet_small", function(require){
"use strict";
var animation = require("web_editor.snippets.animation");

latest_blog_post.registry.animation = animation.Class.extend({
    $.get('snippet/get_latest_blog_post').then(function(data){
        if(data){
            $(".oe_latest_blog_post_list").replaceWith(data)
        }
    })
})
});
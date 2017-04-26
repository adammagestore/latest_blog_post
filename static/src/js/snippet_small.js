odoo.define("latest_blog_post.snippet_small", function(require){
"use strict";

var animation = require('web_editor.snippets.animation');

animation.registry.latest_blog_post = animation.Class.extend({
    selector: ".oe_latest_blog_post_list",
    start: function(){
        $.get('/blogpost/get_latest_blog_post').then(function(data){
            alert('xxxx');
            if(data){
                $(".oe_latest_blog_post_lists").replaceWith(data)
            }
        })
    }
})
});

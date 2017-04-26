# -*- coding: utf-8 -*-

import babel.dates
import re
import werkzeug
from datetime import datetime, timedelta
from dateutil.relativedelta import relativedelta

from odoo import fields, http, _
from odoo.addons.website.models.website import slug
from odoo.http import request

class LatestBlogPost(http.Controller):
    @http.route('/blogpost/get_latest_blog_post', type='http', auth='public', website=True)
    def get_latest_blog_post(self, **post):
        BlogPost = request.env['blog.post']
        result = {"blog_posts": []}
        blog_posts = BlogPost.search([])

        for blog_post in blog_posts:
            create_date_arr = blog_post.create_date.split(" ")[0].split("-")
            create_date = create_date_arr[2] + "/" + create_date_arr[1] + "/" + create_date_arr[0]
            result['blog_posts'].append({
                "blog_post": blog_post,
                "create_date": create_date
            })
        return request.render("latest_blog_post.oe_latest_blog_post_list", result)
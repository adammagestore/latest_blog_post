# -*- coding: utf-8 -*-
# Part of Odoo. See LICENSE file for full copyright and licensing details.
{
    'name' : 'Latest Blog Post',
    'version' : '1.0',
    'summary': 'Latest Blog Post',
    'sequence': 130,
    'description': """Latest Blog Post module
    """,
    'category': 'Website',
    'website': 'https://www.magestore.com',
    'images' : [''],
    'depends' : ['website_blog'],
    'data': [
        'security/security.xml',
        'security/ir.model.access.csv',
        'views/template.xml',
        'views/snippet_small.xml',
    ],
    'demo': [

    ],
    'qweb': [

    ],
    'installable': True,
    'application': True,
    'auto_install': False,
}

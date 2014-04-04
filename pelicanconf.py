#!/usr/bin/env python
# -*- coding: utf-8 -*- #
from __future__ import unicode_literals

AUTHOR = u'bendtherules'
SITENAME = u'Second Code'
SITESUBTITLE = 'Adventures of a Code-aholic'
#SITEURL = ''

TIMEZONE = 'Asia/Kolkata'

DEFAULT_LANG = u'en'

# Feed generation is usually not desired when developing
FEED_ALL_ATOM = None
CATEGORY_FEED_ATOM = None
TRANSLATION_FEED_ATOM = None

# Blogroll
LINKS = (('Pelican', 'http://getpelican.com/'),
        ('Python.org', 'http://python.org/'),
        ('Jinja2', 'http://jinja.pocoo.org/'),
        ('You can modify those links in your config file', '#'),)

# Social widget
SOCIAL = (('You can add links in your config file', '#'),
          ('Another social link', '#'),)

DEFAULT_PAGINATION = 10

# Uncomment following line if you want document-relative URLs when developing
# RELATIVE_URLS = True

# THEME = r"notmyidea"
THEME = "../blog_theme/"
GITHUB_URL = r"http://www.github.com/bendtherules"
# PAGINATION_PATTERNS = (
##    (1, '{base_name}/', '{base_name}/index.html'),
# CSS_FILE = "main.css"
FILENAME_METADATA = ""
PATH = "./"
ARTICLE_DIR = "content/Articles/"
PAGE_DIR = "content/Pages/"
STATIC_PATHS = [r"./images"]
PLUGINS = []
SUMMARY_MAX_LENGTH = None
OUTPUT_PATH = r"../bendtherules.github.com/"
DELETE_OUTPUT_DIRECTORY = True
OUTPUT_RETENTION = [".git", "demo"]

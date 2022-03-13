# my-blog

### Features:

- favicon - DONE!
- google analytics - DONE!
- SEO - DONE!
- turn into a PWA - DONE! - TO BE IMPROVED IN FUTURE WITH WORKBOX


## Acknowledgements:

#### [Jekyll site - Documentation](https://jekyllrb.com/)

#### [Minima - Jekyll theme](https://github.com/jekyll/minima)

#### [Jekyll Tags on Github Pages](http://longqian.me/2017/02/09/github-jekyll-tag/)

[Tag Generator - Python](https://github.com/qian256/qian256.github.io/blob/master/tag_generator.py)

[Jekyll Site/Repo for reference](https://github.com/qian256/qian256.github.io)

#### [Hosting on Github Pages | Jekyll - Static Site Generator | Tutorial 19](https://www.youtube.com/watch?v=fqFjuX4VZmU)

#### [How to add Google Analytics to a blog hosted on Github pages](https://www.howtotechwriting.com/documentation%20tools/analytics/google%20analytics/documentation/2021/10/07/how-to-add-analytics-to-jekyll.html)

Note: UA (Universal Analytics) was configured instead of G-    see [Configure o Analytics para um Website (Universal Analytics)](https://support.google.com/analytics/answer/10269537?ref_topic=1009620)


#### [Adding a favicon to a Jekyll-based static website](https://ptc-it.de/add-favicon-to-mm-jekyll-site/)

- create the favicons and __check__, [Favicon Generator](https://realfavicongenerator.net/)

I used https://looka.com/ for LOGO design.


#### SEO 

- see https://github.com/jekyll/jekyll-seo-tag


### Turn website into PWA
Working without [Workbox](https://developers.google.com/web/tools/workbox) ... In this approach I have specifically to say what are the routes that I want to cache for offline support.

[Como transformar um site no github pages feito com jekyll em uma pwa](https://regino.dev/como-transformar-um-site-no-github-pages-feito-com-jekyll-em-uma-pwa/)

[Adding a service worker to Jekyll](https://tosbourn.com/adding-service-worker-to-jekyll/)

- to analyze: F12 to open Dev Tools, the service-worker.js does not change after I have changed it in githuh??

Manually managing the cache storage via your Service Worker script can be a tedious task. The number of files and their names may change, so hard-coding them does not seem like a good idea. That’s where Workbox comes in.

TODO: Another tutorial, but using [Workbox](https://developers.google.com/web/tools/workbox)

[Jekyll website to progressive web app](https://svrooij.io/2022/01/29/jekyll-pwa/)

Note: For now if you Lighthouse audit the site, PWA is checked.

Important site to know more about PWA and ServiceWorker cache: PWAdvent.dev https://pwadvent.dev/day/5/


### Change to a regular theme instead of a Gem-based theme

With this change I now have all the freedom to make changes to my blog.   

[Up and Running with GitHub Pages, Part 4, Jekyll Themes](https://www.youtube.com/watch?v=8IgNO1HgCrk)

Important command for copying files from minima gem: ```xdg-open $(bundle info --path minima)```
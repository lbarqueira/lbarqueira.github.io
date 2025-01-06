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

"service-worker_reference.txt" - for reference:
[Como transformar um site no github pages feito com jekyll em uma pwa](https://regino.dev/como-transformar-um-site-no-github-pages-feito-com-jekyll-em-uma-pwa/)

"service-worker.js" - active for now, with offline page:
[Adding a service worker to Jekyll](https://tosbourn.com/adding-service-worker-to-jekyll/)

Manually managing the cache storage via your Service Worker script can be a tedious task. The number of files and their names may change, so hard-coding them does not seem like a good idea. That’s where Workbox comes in.

TODO: Another tutorial, but using [Workbox](https://developers.google.com/web/tools/workbox)

[Jekyll website to progressive web app](https://svrooij.io/2022/01/29/jekyll-pwa/)

Note: For now if you Lighthouse audit the site, PWA is checked.

Important site to know more about PWA and ServiceWorker cache: PWAdvent.dev https://pwadvent.dev/day/5/


### Change to a regular theme instead of a Gem-based theme

With this change I now have all the freedom to make changes to my blog.   

[Up and Running with GitHub Pages, Part 4, Jekyll Themes](https://www.youtube.com/watch?v=8IgNO1HgCrk)

Important command for copying files from minima gem: ```xdg-open $(bundle info --path minima)``` 

### _After 1 year without updating my blog, what did I do?_

It is important to note that in the meantime I changed computers with new operating system fedora.  

I followed the site [Web Application](https://developer.fedoraproject.org/start/sw/web-app/jekyll.html).

##### Installation (because it is a new laptop)

```
$ sudo dnf install ruby-devel
$ gem install jekyll
```

##### Usage (with my blog previously created)

```
$ jekyll new my-site // not needed since previously created
$ cd myblog // Alternativelly you can open vscode project myblog
$ jekyll serve // Alternativelly you can run this code on vscode terminal
```

After writing a post (copy past from a previous one) never forget to run the following script of code for the __tags__:

```
python tag_generator.py
```

Then, since the blog is a PWA, I have to edit the file __service-worker.js__, namelly:
    
```
const offlineCache = 'offline-2025-01-06-5-50'; // The cache key, you can override this to manually clear the cache
```

Now, I have to [Manual Deploy](https://jekyllrb.com/docs/deployment/manual/). The blog is hosted in __GitHub Pages__ then I have to run the following command in terminal:

```
jekyll build
```

Now, I am able to commit and push to github (using vscode), then I wait a little to see it on-line at:

[LB Blog](https://lbarqueira.github.io/)
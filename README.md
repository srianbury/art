## Visit the website here: https://srianbury.github.io/art/
### Cloning and deploying
1. fork the repo 
2. git clone your-fork
2. Use create_paths.py in web/src to generate the filenames.js which is an array of all the image names.  One is already provided so only run that if the images are different.
3. I'll summarize deploying the project, but I followed this page using yarn because I built the react app with npx: https://medium.com/the-andela-way/how-to-deploy-your-react-application-to-github-pages-in-less-than-5-minutes-8c5f665a2d2a
4. yarn add gh-pages
5. Change "homepage" in package.json to point to your website
6. from inside the web folder, run: yarn run deploy.  This will bundle and minify the assets as well as push it to a branch called gh-pages.
7. You might have to go into the settings of your repo and make sure the webpage is pointed at the gh-pages branch.

## The Original README.md
# my "art"

all images in the `images` dir were drawn in Adobe Illustrator.

if you wish to print any of these in bulk, i recommend [Sticker Mule](https://www.stickermule.com/). otherwise, you can find them on [Redbubble](https://www.redbubble.com/people/shortstack/collections/579066-zombies-ftw?asc=u/).

## license

this work is licensed under a [Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License](https://creativecommons.org/licenses/by-nc-sa/4.0/).

please do not use these anywhere commercially before first contacting me.

![](https://raw.githubusercontent.com/shortstack/art/master/images/all.png)


# Modular Old Reddit Theme

This is a [SASS](https://sass-lang.com/) theme for [Old Reddit ](old.reddit.com).

Originally heavily inspired by the excellent [Naut theme](https://github.com/Axel--/Naut-for-reddit/) (but almost completely re-written), this theme supports the [prefers-color-scheme](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme) and introduces responsive elements.

## Installation

Clone/download this repository into a working folder.

If you don't already have it, [install Node.js](https://nodejs.org/en/download/). 

Navigate to the cloned / extracted repository and run `npm install` to locally install sass and any other dev dependencies.

## Usage

**Note**: You may want to save a Reddit page to develop locally. To do this:
1. Go to `old.reddit.com/r/{your subreddit}`
1. Ctrl + S to save a complete webpage.
1. In the downloaded `.html` file, find the \<link> element with the prop `title="applied_subreddit_stylesheet"` and edit the `href` to point to the `stylesheet.css` file in the project folder. I normally put my downloaded pages in a folder called `sample_pages` at the project root, so my href looks like `href="../stylesheet.css"`
1. Optional: I use the "live server" extension for vscode to open this html file with hot reloading. You can too if you wish.

**Important**: The file `src/abstracts/_variables.scss` has a variable `$_dev`. Set this to true when developing to use the images in the images folder. Set to false for production to use the reddit %% links.

From the terminal run `npm run watch` to get SASS to watch for and compile changes. 

Run `npm run minify` to build the optimized version to `min.stylesheet.css`. It is this content that should be copied and pasted into `old.reddit.com/r/{your subreddit}/about/stylesheet/`.

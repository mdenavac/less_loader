VisualForce Less loader
=======================

Loads with a delay all specified less files, then compiles them to css.
Do not use in production, compile with nodejs or rhino instead.

Requirements
------------
- dist/less.min.js downloaded from [lesscss](http://lesscss.org/#client-side-usage)
- less_loader.vfp
- less_loader.js

Installation
------------
1. Create two Static Resources with "text/javascript" attribute and Public cache for less.min.js and less_loader.js
2. Create "text/css" Static Resources for each less files you want to use
3. Set up the module's options with an href link to the compiler and your less resources, using $Resource as needed.

    window.less_options =  {
        compiler: 	"{!$Resource.less_compiler}", // Resource link towards the compiler
        files:		["{!$Resource.less_hyx}", "{!$Resource.less_os}"] // An array of links 
    }



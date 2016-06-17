# Jony

# CDN build

The version number must be set and bumped in package.json.

`npm run build-color-cdn maincolor=_color0_ darkercolor=_color1_  lightercolor=_color2_  sidebarcolor=_color3_`

where _colorx_ are jony's colors sass variable. See assets/stylesheets/variables.scss
Use css hex format for color (ex : #000000)

The build result can be found in the cdn folder.

# CDN build, versionning and deploy to Wifirst CDN

create the folder /var/www/jony/_version_number_ on the assets server, then :

`scp -r cdn/* root@assets-si-01-ild2.management.si.wifirst.net:/var/www/jony/_version_number_/`

The CSS file copied can then be imported in the host application index.html :

`<link rel="stylesheet" href="https://assets.wifirst.net/jony/_version_number_/css/jony-_main-color_.min.css"> `

Finally, the images and fonts folder must also be copied to /var/www/jony/_version_number_/

ex :

`/var/www/jony/_version_number_/images/`
`/var/www/jony/_version_number_/fonts/`

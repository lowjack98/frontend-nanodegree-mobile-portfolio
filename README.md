## Website Performance Optimization portfolio project

This is the optimized online portfolio from Udacity's Front-End Nanodegree program.

##### Installation
1. Run `npm install`
2. Run `grunt`
3. Production code will be found in the dist folder.

### Optimization changes on `index.html` for improved PageSpeed

copy and pasted hosted url into `https://developers.google.com/speed/pagespeed/insights/` to retrieve PageSpeed scores.

##### Modifications made to increase scores
1. Added Cache-control=public. (unable to add htaccess file for additional caching features using github.io)
2. Removed link to Open Sans font, using browser defaults instead.
3. Added media="print" for `css/print.css`
4. Inlined `style.css`
5. Added async to all external javascript files.
6. Minified css and js files.

### Optimization made on `views/js/main.js` for `pizza.html`

1. Modified function determineDx. Changed querySelector to getElementById.
2. Saved array of randomPizzaContainers in window.pizzasContainers right after they are all created.
  * Also changed method from querySelector to getElementsByClassName
3. Modified function changePizzaSizes.
  1. Changed all pizza array references to window.pizzasContainers
  2. Moved dx and newwidth calcs outside of loop.
4. Modified function updatePositions
  1. Moved position calcs outside of loop. there are only 5 possible values, so i put them in an array and just loop through the array as needed for the calculation inside the for loop.
  2. Changed all pizza array references to movingPizzas
5. Modified DOMContentLoaded event listener:
  1. Dropped number of movers from 200 to 60
  2. Changed querySelector to getElementById
  3. Saved array of movingPizzas in window.movingPizzas right after they are all created.
6. Added requestAnimationFrame to throttle scroll event listener per a recommendation from the discussion forum.

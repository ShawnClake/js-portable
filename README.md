# js-portable
A modular Javascript system

## Modules

### Fixed Sidebar Navigation Mover
##### Requires JQuery
##### Containing element which this is used on must be position:fixed;

It creates a sidebar content area which will move to the top of the page, but never off the page as you scroll down, and as you scroll up it will stay at the top of the page until you get to the very top of the page where it will resume its starting position.

Use cases: You have a main website navigation bar accross the top of the page. You have an in-page navigation menu on the sidebar. On page load, the sidebar nav should be positioned below the main navigation bar, however as you scroll down, you want the sidebar to move to the top of the page as you scroll down, and then proceed to move down to its starting position as the top navigation bar reappears as you scroll up.

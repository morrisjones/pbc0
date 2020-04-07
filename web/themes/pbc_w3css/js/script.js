/**
 * @file
 * This file is to add any custom js for the drupal8 w3css subtheme.
 */

(function ($) {

  'use strict';

  Drupal.behaviors.pbcLeftSidebarExpand = {
      // Perform jQuery as normal in here.
    attach: function(context,settings) {
      // Show the mobile menu on click horizontal.
      $(context)
        .find('#show-hide-left-sidebar')
        .once('left-sidebar-more-less')
        .on(
          'click', function () {
            let showHideLeftSidebar = document.getElementById('show-hide-left-sidebar');
            if ($('#left-sidebar').is(':hidden')) {
              document.getElementById('left-sidebar')
                .setAttribute('style','display: block !important');
              showHideLeftSidebar.className = showHideLeftSidebar.className
                .replace('left-sidebar-nav','left-sidebar-nav-displayed');
            }
            else {
              document.getElementById('left-sidebar')
                .setAttribute('style', 'display: none !important');
              showHideLeftSidebar.className = showHideLeftSidebar.className
                .replace('left-sidebar-nav-displayed','left-sidebar-nav');
            }
          }
        );
    }
  };

  Drupal.behaviors.pbcExperimental = {
    attach: function(context,settings) {
      ;
    }
  };

})(jQuery);

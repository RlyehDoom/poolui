'use strict';

app.controller('SupportCtrl', function() {

})
.directive('dynFbCommentBox', function () {
    function createHTML(href, numposts, colorscheme, type, width) {
        return '<div class="fb-comments" ' +
                       'data-href="' + href + '" ' +
                       'data-numposts="' + numposts + '" ' +
                       'data-order-by="' + type + '" ' +
                       'data-width="' + width + '" ' +
                       'data-colorsheme="' + colorscheme + '">' +
               '</div>';
    }

    return {
        restrict: 'A',
        scope: {},
        link: function postLink(scope, elem, attrs) {
            attrs.$observe('pageHref', function (newValue) {
                var href        = newValue;
                var numposts    = attrs.numposts    || 10;
                var colorscheme = attrs.colorscheme || 'light';
                var type = attrs.oderby || 'social';
                var width = attrs.width || '100%';

                elem.html(createHTML(href, numposts, colorscheme, type, width));
                FB.XFBML.parse(elem[0]);
            });
        }
    };
});
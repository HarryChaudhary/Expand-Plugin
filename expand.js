(function ($) {
    $.fn.expand = function (options) {
        var settings = $.extend(
            {
                loadLessButton: "[data-expand-less]",
                loadMoreButton: "[data-expand-more]",
                targetItem: "[data-expand-item]",
                initialVisibleNumber: 1,
                itemLoadNumber: 1,
                moveDown: true
            },
            options
        );
        return this.each(function () {
            var _this = $(this),
                getInitialVisible = _this.data("initial-visible"),
                getExpandBy = _this.data("expand-by"),
                getCards = _this.find(settings.targetItem),
                getShowLessButton = _this.find(settings.loadLessButton),
                getShowMoreButton = _this.find(settings.loadMoreButton),
                cardShowNumber = getExpandBy ? getExpandBy : settings.itemVisbleBy,
                initialCardVisible = getInitialVisible
                    ? getInitialVisible
                    : settings.initialItemVisible,
                minimumCardShow = getInitialVisible
                    ? getInitialVisible
                    : settings.initialItemVisible,
                maxCardShow = getCards.length;
            getCards.attr("area-hidden", "true");
            function loadCards(showCards) {
                getCards
                    .slice(0, showCards)
                    .addClass("is-active")
                    .attr("area-hidden", "false");
            }
            function hideCards(minimumShowCards, maximumShowCard) {
                getCards
                    .slice(minimumShowCards, maximumShowCard)
                    .removeClass("is-active")
                    .attr("area-hidden", "true");
            }
            loadCards(minimumCardShow);
            getShowLessButton.on("click", function (e) {
                e.preventDefault();
                hideCards(minimumCardShow, maxCardShow);
                initialCardVisible = minimumCardShow;
            });

            getShowMoreButton.on("click", function (e) {
                e.preventDefault();
                initialCardVisible >= minimumCardShow &&
                initialCardVisible <= maxCardShow
                    ? (initialCardVisible += cardShowNumber)
                    : null;
                loadCards(initialCardVisible);

                settings.moveDown === true && initialCardVisible <= maxCardShow
                    ? $("body, html").animate({
                        scrollTop: $(this).offset().top - $(window).height() + 100
                    })
                    : false;
            });
        });
    };
})(jQuery);
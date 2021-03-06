/**
 * Copyright © 2003/2013 Backbase B.V.
 */


if (!window.training) var training = {};

training.players = (function ($) {
    'use strict';

    return {
        init: function (widget) {
            var $widget = $(widget.body);
            var $list = $widget.find(".players");

            $.ajax({
                url: "/portalserver/services/rest/player/list?sort=username",
                dataType: "json",
                type: "GET",
                contentType: "application/json; charset=utf-8",
                success: function (data) {
                    $.each(data.players, function(index, player) {
                        $list.append('<li data-player="' + player.username + '"><span class="player-name">' + player.fullname + '</span><span class="player-score">' + player.highScore + '</span>');
                    });
                }
            });


        }


    };
}(window.jQuery));

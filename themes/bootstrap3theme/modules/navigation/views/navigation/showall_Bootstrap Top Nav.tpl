{*
 * Copyright (c) 2004-2014 OIC Group, Inc.
 *
 * This file is part of Exponent
 *
 * Exponent is free software; you can redistribute
 * it and/or modify it under the terms of the GNU
 * General Public License as published by the Free
 * Software Foundation; either version 2 of the
 * License, or (at your option) any later version.
 *
 * GPL: http://www.gnu.org/licenses/gpl.txt
 *
 *}

{css unique="bootstrap-top-nav"  lesscss="`$smarty.const.PATH_RELATIVE`framework/modules/navigation/assets/less/dropdown-bootstrap.less"}
{*{if $smarty.const.MENU_LOCATION == 'static-top'}*}
    {*.navbar-spacer {*}
        {*height: 0;*}
    {*}*}
{*{/if}*}
{/css}

<nav id="topnavbar" class="navigation navbar navbar-default {if $smarty.const.MENU_LOCATION}navbar-{$smarty.const.MENU_LOCATION}{/if}" role="navigation">
    <!-- Brand and toggle get grouped for better mobile display -->
    <div class="navbar-header">
        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-navbar-collapse-1">
            <span class="sr-only">{'Toggle navigation'|gettext}</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
        </button>
        <!-- menu header -->
        <a class="navbar-brand" href="{$smarty.const.URL_FULL}">{$smarty.const.ORGANIZATION_NAME}</a>
    </div>
    <!-- menu -->
    <div class="collapse navbar-collapse" id="bs-navbar-collapse-1">
        <ul class="nav navbar-nav{if $smarty.const.MENU_ALIGN == 'right'} navbar-right pull-right{/if}">
            {getnav type='hierarchy' assign=hierarchy}
            {bootstrap_navbar menu=$hierarchy}
        </ul>
    </div>
</nav>
<div class="navbar-spacer"></div>
<div class="navbar-spacer-bottom"></div>

{script unique="navbar-fix" jquery=1}
{literal}
    $('.dropdown-toggle').click(function(e) {
        e.preventDefault();
        setTimeout($.proxy(function() {
            if ('ontouchstart' in document.documentElement) {
                $(this).siblings('.dropdown-backdrop').off().remove();
            }
        }, this), 0);
    });

    $(document).ready(function(){
        function setTopPadding(admin) {
            if ({/literal}{($user->getsToolbar == 1 && $smarty.const.SLINGBAR_TOP == 1)?1:0}{literal}) {
                $adminbar = $('#admintoolbar').height();
                if ($adminbar == 0) $adminbar = 30;
            } else {
                $adminbar = 0;
            }
            if ($(document.body).width() >= {/literal}{$smarty.const.MENU_WIDTH}{literal} - 15) {  // non-collapsed navbar
                if ($('.navbar-fixed-top').length != 0) {  // fixed top menu
                    $(document.body).css('padding-top', $('#topnavbar').height() + 10 + $adminbar);
                } else if ($('.navbar-fixed-bottom').length != 0) {  // fixed bottom menu
                    $(document.body).css('padding-top', $adminbar);
                    $('.navbar-fixed-bottom').css('margin-top', 0);
                    $(document.body).css('padding-bottom', $('#topnavbar').height() - 45);
                } else {  // static top menu
                    $(document.body).css('padding-top', 0);
                }
                if (admin) $('.navbar-fixed-top').css('margin-top', $adminbar);
                $('.navbar-static-top').css('margin-top', $adminbar);
            } else {  // collapsed navbar
                if ($('.navbar-fixed-top').length != 0) {  // fixed top menu
                    $(document.body).css('padding-top', $adminbar + $('#topnavbar').height());
                    if (admin) $('.navbar-fixed-top').css('margin-top', $adminbar);
                } else if ($('.navbar-static-top').length != 0) {  // static top menu
//                    $(document.body).css('padding-top', $adminbar);
                    $('.navbar-static-top').css('margin-top', $adminbar);
                } else if ($('.navbar-fixed-bottom').length != 0) {  // fixed bottom menu
                    $(document.body).css('padding-top', $adminbar);
                    $(document.body).css('padding-bottom', 0);
                }
            }
        };
        setTopPadding();
        $(window).resize(function(){
            setTopPadding(true);
        });
    });
{/literal}
{/script}
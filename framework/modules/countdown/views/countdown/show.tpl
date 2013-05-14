{*
 * Copyright (c) 2004-2013 OIC Group, Inc.
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

{uniqueid prepend="countdown" assign="name"}

{css unique="countdown" link="`$asset_path`css/countdown.css"}

{/css}

<div class="module countdown show">

    {if $moduletitle && !($config.hidemoduletitle xor $smarty.const.INVERT_HIDE_TITLE)}<h1>{$moduletitle}</h1>{/if}
    {if !$config}
        <strong style="color:red">{"To Display the 'Countdown' Module, you MUST First 'Configure Settings'"|gettext|cat:"!"}</strong>
    {else}    
        {if $config.title}<h2 class="clocktitle">{$config.title}</h2>{/if}

        {*<script type="text/javascript">*}
            {*TargetDate = "{$config.count}";*}
            {*BackColor = "";*}
            {*ForeColor = "";*}
            {*CountActive = true;*}
            {*CountStepper = -1;*}
            {*LeadingZero = true;*}
            {*DisplayFormat = "D:%%D%% H:%%H%% M:%%M%% S:%%S%%";*}
            {*FinishMessage = "{$config.message}";*}
        {*</script>*}
        {*<script type="text/javascript" src="{$asset_path}/js/countdown.js"></script>*}
        <div id="countdown"></div>
        <p id="note"></p>
        {*<div class="bodycopy">*}
            {*{$config.body}*}
        {*</div>*}
    {/if}
</div>

{script unique="`$name`" jquery="jquery.countdown"}
{literal}
    $(function(){

    	var note = $('#note'),
    		ts = new Date("{/literal}{$config['date-count']} {$config['time-h-count']}:{$config['time-m-count']} {$config['ampm-count']}{literal}");

//    	if((new Date()) > ts){
    		// The new year is here! Count towards something else.
    		// Notice the *1000 at the end - time must be in milliseconds
    //		ts = (new Date()).getTime() + 10*24*60*60*1000;
//    		ts = (new Date()).getTime() + 20*1000;
//    		newYear = false;
//    	}

    	$('#countdown').countdown({
    		timestamp	: ts,
    		callback	: function(days, hours, minutes, seconds){
    			var message = "";
    			message += days + " day" + ( days==1 ? '':'s' ) + ", ";
    			message += hours + " hour" + ( hours==1 ? '':'s' ) + ", ";
    			message += minutes + " minute" + ( minutes==1 ? '':'s' ) + " and ";
    			message += seconds + " second" + ( seconds==1 ? '':'s' ) + " <br />";
                message += "{/literal}{$config.body|trim}{literal}";
    			note.html(message);
    		},
    		finishedCallback	: function(){
    			note.html("{/literal}{$config.message|trim}{literal}");
    		},
    	});
    });
{/literal}
{/script}

{* see http://tutorialzine.com/2011/12/countdown-jquery/ for more info on this script/ *}

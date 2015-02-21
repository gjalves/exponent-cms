{*
 * Copyright (c) 2004-2015 OIC Group, Inc.
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

<div class="module twitter showall">
	{if $moduletitle && !($config.hidemoduletitle xor $smarty.const.INVERT_HIDE_TITLE)}<{$config.heading_level|default:'h1'}>{$moduletitle}</{$config.heading_level|default:'h1'}>{/if}
	{permissions}
	    <div class="module-actions">
	        {if $permissions.create}
	            {icon class=add action=edit text="Add a Tweet"|gettext}
	        {/if}
	    </div>
	{/permissions}
    {if $config.moduledescription != ""}
        {$config.moduledescription}
    {/if}
    {if empty($config.consumer_key) && $permissions.configure}
        {permissions}
            <div class="module-actions">
                <div class="msg-queue notice" style="text-align:center">
                    <p>{'You MUST configure this module to use it!'|gettext} {icon action="configure"}</p>
                </div>
            </div>
        {/permissions}
    {/if}
    {if $config.enable_follow && $config.twitter_user}
        <a href="https://twitter.com/{$config.twitter_user}" class="twitter-follow-button" data-show-count="false" data-show-screen-name="{if $config.hideuser}false{else}true{/if}" data-lang="en">{'Follow'|gettext} @{$config.twitter_user}</a>
        {script unique='tweet_src'}
        {literal}
            !function(d,s,id){
                var js,fjs=d.getElementsByTagName(s)[0];
                if(!d.getElementById(id)){
                    js=d.createElement(s);
                    js.id=id;
                    js.src="https://platform.twitter.com/widgets.js";
                    fjs.parentNode.insertBefore(js,fjs);
                }
            }(document,"script","twitter-wjs");
        {/literal}
        {/script}
    {/if}
	<dl>
		{foreach from=$items item=item}
			<div class="item">
                {if $config.showimage}
                    <div style="float:left;">
                        {img src="`$item.image`" style="margin:2px 5px 100% 0px;"}
                        {if $item.retweetedbyme}{img src="`$smarty.const.PATH_RELATIVE`framework/modules/twitter/assets/images/tweeted.png" style="position:relative;top:-37px;left:-60px;margin-right:-18px"}{/if}
                    </div>
                {elseif $item.retweetedbyme}
                    {img src="`$smarty.const.PATH_RELATIVE`framework/modules/twitter/assets/images/tweeted.png" style="float:left; margin:2px 5px 100% 0px;"}
                {/if}
                <dt><em class="date">{$item.created_at|relative_date}{if $config.showattrib} {'via'|gettext} {$item.via}, {$item.screen_name} {'wrote'|gettext}:{/if}</em></dt>
                <dd>
                    {$item.text}
                    {permissions}
                        <div class="item-actions">
                            {if $permissions.create && !$item.ours && !$item.retweetedbyme}
                                &#160;{icon img='retweet.png' id=$item.id action=create_retweet title="Retweet"|gettext onclick="return confirm('"|cat:("Are you sure you want to retweet this item?"|gettext)|cat:"');"}
                            {/if}
                            {if $permissions.delete && $item.ours && !$item.retweeted_status}
                                &#160;{icon class=delete id=$item.id action=delete_tweet}
                            {/if}
                        </div>
                    {/permissions}
                </dd>
			</div>
			{clear}
		{/foreach}
	</dl>
</div>

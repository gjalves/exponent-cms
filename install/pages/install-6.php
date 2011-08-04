<?php

##################################################
#
# Copyright (c) 2004-2011 OIC Group, Inc.
# Copyright (c) 2006 Maxim Mueller
# Written and Designed by James Hunt
#
# This file is part of Exponent
#
# Exponent is free software; you can redistribute
# it and/or modify it under the terms of the GNU
# General Public License as published by the Free
# Software Foundation; either version 2 of the
# License, or (at your option) any later version.
#
# GPL: http://www.gnu.org/licenses/gpl.txt
#
##################################################

if (!defined('EXPONENT'))
    exit('');

?>
<h1><?php
echo gt('Create an Administrator');
?></h1>

<span style="color: red; font-weight: bold; padding-top: 8px;" id="errorMessage">
<?php echo isset($_GET['errusername']) == 'true' ? 'You must supply a username.' : ''; ?>
<?php echo isset($_GET['erremail']) == 'true' ? 'You must supply a valid email address.' : ''; ?>
</span>
<script>
function checkPassword(f){	
	if (f.username.value == "") {
		//alert('<?php echo gt('You must specify a username.'); ?>');
		document.getElementById("errorMessage").innerHTML = "<?php echo gt('You must specify a username.'); ?>";
		return false;
	} else if (f.password.value != f.password2.value) {
		//alert('<?php echo gt('Your passwords do not match. Please check your entries.'); ?>');
		document.getElementById("errorMessage").innerHTML = "<?php echo gt('Your passwords do not match. Please check your entries.'); ?>";
		return false;
	} else {
		f.submit();
		return true;
	}
}
</script>
<form method="post" onsubmit="return checkPassword(this);">
<input type="hidden" name="page" value="install-7" />
<div class="form_section">
	<div class="control">
		<span class="label"><?php echo gt('Username'); ?>: </span>
		<input class="text" type="text" name="username" value="<?php echo gt('admin'); ?>" />
		<div class="control_help">
			<?php echo gt('The username of your administrator account.  You should change this to something other than the default of "admin".'); ?>
		</div>
	</div>
	<div class="control">
		<span class="label"><?php echo gt('Password'); ?>: </span>
		<input class="text" type="password" name="password" value="" />
		<div class="control_help">
			<?php echo gt('The password of your administrator account.'); ?>
		</div>
	</div>
		<div class="control">
		<span class="label"><?php echo gt('Password Again'); ?>: </span>
		<input class="text" type="password" name="password2" value="" />
		<div class="control_help">
			<?php echo gt('Type your password again.'); ?>
		</div>
	</div>
	<div class="control">
		<span class="label"><?php echo gt('First Name'); ?>: </span>
		<input class="text" type="text" name="firstname" value="<?php echo gt('System'); ?>" />
	</div>
	<div class="control">
		<span class="label"><?php echo gt('Last Name'); ?>: </span>
		<input class="text" type="text" name="lastname" value="<?php echo gt('Administrator'); ?>" />
	</div>
	<div class="control">
		<span class="label"><?php echo gt('Email Address'); ?>: </span>
		<input class="text" type="text" name="email" value="" />
	</div>
</div>
<button class="awesome large green"><?php echo gt('Create Administrator'); ?></button>
</form>

<?php

##################################################
#
# Copyright (c) 2004-2018 OIC Group, Inc.
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

/**
 * Smarty plugin
 * @package Smarty-Plugins
 * @subpackage Function
 */

/**
 * Smarty {ecomconfig} function plugin
 *
 * Type:     function<br>
 * Name:     ecomconfig<br>
 * Purpose:  return the ecom configuration
 *
 * @param         $params
 * @param \Smarty $smarty
 * @return null|string
 */
function smarty_function_ecomconfig($params,&$smarty) {
    $retval = ecomconfig::getConfig($params['var']);
    if (empty($retval))
        return $params['default'];
    else {
        if ($params['unescape'])
            $retval = stripcslashes($retval);
        if ($params['json']) {
            $retval = str_replace('\r\n','', $retval = json_encode($retval));
        }
        if ($params['assign']) {
            $smarty->assign($params['assign'], $retval);
        } else {
            return $retval;
        }
    }
}
?>
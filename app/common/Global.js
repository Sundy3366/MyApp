/**
 * Created by xylxpm on 2017/8/1.
 */
import React, { Component } from 'react';
import { Dimensions, PixelRatio, Platform } from 'react-native';


let {height, width} = Dimensions.get('window');

// 获取屏幕宽度
global.SCREEN_WIDTH = width;
// 获取屏幕高度
global.SCREEN_HEIGHT = height;
// 获取屏幕分辨率
global.PixelRatio = PixelRatio.get();
// 系统是iOS
global.iOS = (Platform.OS === 'ios');
// 系统是安卓
global.Android = (Platform.OS === 'android');
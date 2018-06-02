
const $ = require('jquery');

import logo from '../images/TMPlogo.png'
import githubLogo from '../images/GitHub-Mark-64px.png'

import Vue from 'vue'

import AlertRenderer from './alert-renderer'

import RelayRenderer from './relay-renderer'

import EthHelper from './ethhelper'


import RelayDashboard from './relay-dashboard'


//var web3 = this.connectWeb3();


var alertRenderer = new AlertRenderer();
var relayRenderer = new RelayRenderer();
//var ethHelper = new EthHelper();
var relayDashboard = new RelayDashboard();

var navbar = new Vue({
  el: '#navbar',
  data: {
    brandImageUrl: logo,
    githubLogo: githubLogo
  }
})


$(document).ready(function(){
    console.log('hello worrld ')

      if($("#relay").length > 0){
      //  var web3 = ethHelper.init( alertRenderer);
        console.log('render relay')
        relayDashboard.init(relayRenderer);
      }




});


//dashboardRenderer.hide();

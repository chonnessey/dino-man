import $ from 'jquery'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './css/styles.css'
import DinoService from './dino-service.js'
import {arrayParser} from './dino-service.js'


$(document).ready(function() {
  $('#dinoButton').click(function() {
    let promise = DinoService.getDino()
    promise.then(function(response) {
      const body = JSON.parse(response)
      console.log(body[0])
      let phrase = arrayParser();
      $('#genText').html(phrase)
      $('#thisDino').text(body[0])
    },
    function(error) {
      $('#genText').html(`There was a big Error: ${error}`)
    });
  });
});
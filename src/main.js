import $ from 'jquery'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './css/styles.css'
import DinoService from './dino-service.js'


$(document).ready(function() {
  $('#dinoButton').click(function() {
    let promise = DinoService.getDino()
    promise.then(function(response) {
      const body = JSON.parse(response)
      console.log(body[0])
      $('#genText').text(body[0])
    })
  })
})
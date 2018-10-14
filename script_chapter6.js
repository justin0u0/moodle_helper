const g = 9.8;

function my_sin(d) {
  return Math.sin(d * Math.PI / 180);
}

function my_cos(d) {
  return Math.cos(d * Math.PI / 180);
}

function my_asin(d) {
  return Math.asin(d) * 180.0 / Math.PI;
}

function solve_Q1() {
  var q1x = document.getElementById('q1_1').value;
  var q1w = document.getElementById('q1_2').value;
  var ans = q1w / q1x * 100.0;
  document.getElementById('answer1').value = ans.toFixed(2);
}

function solve_Q2() {
  var q2v = document.getElementById('q2_1').value;
  var ans = 0.1 * 0.5 * 1.67 * q2v * q2v;
  document.getElementById('answer2').value = ans.toFixed(2);
}

function solve_Q3() {
  var q3m = document.getElementById('q3_1').value;
  var q3t = document.getElementById('q3_2').value;
  var q3s = document.getElementById('q3_3').value;
  var ans = 0.5 * q3m * q3s * q3s / q3t / 1000.0;
  document.getElementById('answer3').value = ans.toFixed(2);
}

function solve_Q4() {
  var q4r = document.getElementById('q4_1').value;
  var q4a = document.getElementById('q4_2').value;
  var q4p = document.getElementById('q4_3').value;
  var ans = q4p / q4a / q4r;
  document.getElementById('answer4').value = ans.toFixed(2);
}

function solve_Q5() {
  var q5t = document.getElementById('q5_1').value;
  var q5r = document.getElementById('q5_2').value;
  var ans = q5r * q5t * g / 60;
  document.getElementById('answer5').value = ans.toFixed(2);
}

function solve_Q6() {
  var q6m = document.getElementById('q6_1').value;
  var q6t = document.getElementById('q6_2').value;
  var q6j = document.getElementById('q6_3').value;
  var ans = Math.acos(q6j / q6t / q6m);
  document.getElementById('answer6').value = ans.toFixed(2);
}

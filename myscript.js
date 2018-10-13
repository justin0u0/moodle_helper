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
  var q1w = document.getElementById('q1_1').value;
  var q1d = document.getElementById('q1_2').value;
  var q1a = document.getElementById('q1_3').value;
  var ans = q1w * q1a / my_cos(q1d);
  document.getElementById('answer1').value = ans.toFixed(2);
}

function solve_Q2() {
  var q2dl = document.getElementById('q2_1').value;
  var q2dr = document.getElementById('q2_2').value;
  var q2m = document.getElementById('q2_3').value;
  var q2a = document.getElementById('q2_4').value;
  var ans = (q2m * q2a + q2m * g * my_sin(q2dl)) / (g * my_sin(q2dr) - q2a);
  document.getElementById('answer2').value = ans.toFixed(2);
}

function solve_Q3() {
  var q3r = document.getElementById('q3_1').value;
  var q3v = document.getElementById('q3_2').value;
  var q3m = document.getElementById('q3_3').value;
  var ans = q3m * (q3v * q3v / q3r - g);
  document.getElementById('answer3').value = ans.toFixed(2);
}

function solve_Q4() {
  var q4d = document.getElementById('q4_1').value;
  var q4v = document.getElementById('q4_2').value;
  var q4f = document.getElementById('q4_3').value;
  var ans = q4v * q4v / (2.0 * g * (q4f * my_cos(q4d) + my_sin(q4d)));
  document.getElementById('answer4').value = ans.toFixed(2);
}

function solve_Q5() {
  var q5d = document.getElementById('q5_1').value;
  var ans = Math.sqrt(g / (4 * Math.PI * Math.PI * q5d * 0.5)) * 60;
  document.getElementById('answer5').value = ans.toFixed(2);
}

function solve_Q6() {
  var q6m = document.getElementById('q6_1').value;
  var q6t = document.getElementById('q6_2').value;
  var q6f = document.getElementById('q6_3').value;
  var ans = my_asin(q6m * g / q6f);
  document.getElementById('answer6').value = ans.toFixed(2);
}

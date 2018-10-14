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
  var q1m = document.getElementById('q1_1').value;
  var q1h = document.getElementById('q1_2').value;
  var q1e = document.getElementById('q1_3').value;
  var ans = (1 * q1h + (q1e * 1000.0) / (q1m * g)) / 1000.0;
  document.getElementById('answer1').value = ans.toFixed(2);
}

function solve_Q2() {
  var q2x = document.getElementById('q2_1').value;
  var q2m = document.getElementById('q2_2').value;
  var q2h = document.getElementById('q2_3').value;
  var ans = 2 * 0.001 * q2m * g * q2h / (q2x / 100.0) / (q2x / 100.0) / 1000.0;
  document.getElementById('answer2').value = ans.toFixed(2);
}

function solve_Q3() {
  var q3m = document.getElementById('q3_1').value;
  var q3h = document.getElementById('q3_2').value;
  var q3k = document.getElementById('q3_3').value;
  var a = 0.5 * q3k;
  var b = -1.0 * q3m * g;
  var c = -1.0 * q3m * g * q3h;
  var ans = (-b + Math.sqrt(b * b - 4 * a * c)) / (2 * a);
  document.getElementById('answer3').value = ans.toFixed(2);
}

function solve_Q4() {
  var q4h = document.getElementById('q4_1').value;
  var q4w = document.getElementById('q4_2').value;
  var q4f = document.getElementById('q4_3').value;
  var ans = Math.floor(q4h / (q4f * q4w));
  document.getElementById('answer4').value = ans;
}

function solve_Q5() {
  var q5w = document.getElementById('q5_1').value;
  var q5d = document.getElementById('q5_2').value;
  var q5l = document.getElementById('q5_3').value;
  var q5k = document.getElementById('q5_4').value;
  var q5c = document.getElementById('q5_5').value;
  var q5f = document.getElementById('q5_6').value;
  var ans = 0.5 * (q5k * 1000.0) * (q5c / 100.0) * (q5c / 100.0) - q5w * q5l * my_sin(q5d) - q5l * q5w * my_cos(q5d) * q5f;
  document.getElementById('answer5').value = ans.toFixed(2);
}

function solve_Q6() {
  var q6r = document.getElementById('q6_1').value;
  var ans = q6r / 3.0;
  document.getElementById('answer6').value = ans.toFixed(2);
}

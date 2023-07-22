//https://www.codewars.com/kata/52ed326b8df6540e06000029/train/javascript

function goto(level, button) {
  const possbileLevels = [0, 1, 2, 3];
  const possbileButtons = ["0", "1", "2", "3"];

  if (possbileLevels.indexOf(level) < 0) return 0;
  if (possbileButtons.indexOf(button) < 0) return 0;

  return parseInt(button) - level;
}

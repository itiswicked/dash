function trainWipe(elements) {
  for (let element of elements) {
      if (element.classList.contains('wipe-out')) {
        element.classList = 'time-away';
      } else if (element.classList.contains('wipe-in')) {
        element.classList.add('wipe-out');
        element.classList.remove('wipe-in');
      } else {
        element.classList.add('wipe-in');
        element.classList.remove('wipe-out');
      }

    }
}

let timeNodes = document.getElementsByClassName('time-away')
let arrivalNodes = document.getElementsByClassName('arriving')

setInterval(
  trainWipe,
  1000,
  [ ...timeNodes ]
)

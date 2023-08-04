//привет Костя я просто комент 
// start
  // console.log('Стар выполнения JavaScript файла')
// alert('Как дела?')


// --
// нашли кнопку/teg (button) при помощи метода querySelector()
const myButton = document.querySelector('button')

const addText = document.querySelector('.add-text')

// log
console.log(myButton)

// directory
console.dir(myButton)

// Method innerHTML меняет текст внутри тега
myButton.innerHTML = 'Добавить текст'

//используем метод который ловит событие клика по кнопки addEventListener()
myButton.addEventListener('click', function() {
	addText.innerHTML += 'Я добавил текст по клику! '
})







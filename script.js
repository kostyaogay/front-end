//привет Костя я просто комент
// start
  // console.log('Стар выполнения JavaScript файла')
// alert('Как дела?')


// --
// нашли кнопку/teg (button) при помощи метода querySelector()
// const myButton = document.querySelector('button')

// const addText = document.querySelector('.add-text')

// // log
// console.log(myButton)

// // directory
// console.dir(myButton)

// // Method innerHTML меняет текст внутри тега
// myButton.innerHTML = 'Добавить текст'

// //используем метод который ловит событие клика по кнопки addEventListener()
// myButton.addEventListener('click', function() {
// 	addText.innerHTML += 'Я добавил текст по клику! '
// })

//событие мыши
// const firstScreenImage = document.querySelector('.first-screen__image')
// console.log(firstScreenImage)
// // firstScreenImage.addEventListener('mousemove', function() {
// // 	console.log('движение мыши')
// // })
// firstScreenImage.addEventListener('mouseenter', function() {
// 	console.log('Навел курсор на картинку')
//   firstScreenImage.classList.add('active') 
//   console.log(firstScreenImage)
// })
// firstScreenImage.addEventListener('mouseleave', function() {
// 	console.log('Убрал курсор с картинки')
//   firstScreenImage.classList.remove('active') 
//   console.log(firstScreenImage)
// })
//  //Шаг №1 находим нужный элемент по селектору в HTML используя JS и метод querySelector()
//  const footer = document.querySelector('.footer')
//  //Шаг №2 подключаем слушатель события с методом click на элемент(селектора footer)
//  // при помощи addEventListener()
//  footer.addEventListener('mouseenter' , function() {
//   console.log('Навели курсор на footer')
  
//  })
//  footer.addEventListener('mouseleave' , function() {
//   console.log('Убрали курсор с footer')})
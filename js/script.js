let curSlideNumber = 1
let numOfSlides = document.querySelector('.slider').childElementCount - 2
let scroll = false

const btnUp = document.querySelector('.btn-up')
const btnDown = document.querySelector('.btn-down')
const allSlides = document.querySelectorAll('.slide')

let prevSlide
let nextSlide
let nextSlideNumber
let prevSlideNumber

function slide(direction) {
  scroll = true
  let curSlide = document.querySelector(`.slide-${curSlideNumber}`)

  curSlide.classList.add('active')
  if (direction === 'up') {
    prevSlide.classList.remove('active')
    if (curSlideNumber === 6) {
      prevSlide.classList.add('active')
      allSlides.forEach(slide => slide.classList.add('active'))
      curSlide.classList.remove('inactive')
    }
  } else {
    if (curSlideNumber === 1) {
      allSlides.forEach(slide => slide.classList.remove('active'))
      curSlide.classList.add('active')
    }
  }
  setTimeout(function () {
    scroll = false
  }, 500)
}

function navigateUp() {
  if (curSlideNumber - 1 === 0) {
    curSlideNumber = numOfSlides
  } else {
    curSlideNumber--
  }
  if (curSlideNumber === numOfSlides) {
    prevSlide = document.querySelector(`.slide-1`)
    prevSlideNumber = 1
  } else {
    prevSlide = document.querySelector(`.slide-${curSlideNumber + 1}`)
    prevSlideNumber = curSlideNumber + 1
  }

  if (curSlideNumber === 1) {
    nextSlide = document.querySelector(`.slide-6`)
    nextSlideNumber = 6
  } else {
    nextSlideNumber = curSlideNumber - 1
    nextSlide = document.querySelector(`.slide-${curSlideNumber - 1}`)
  }
  slide('up')
}

function navigateDown() {
  if (curSlideNumber + 1 > numOfSlides) {
    curSlideNumber = 1
  } else {
    curSlideNumber++
  }
  if (curSlideNumber === 1) {
    prevSlide = document.querySelector(`.slide-${numOfSlides}`)
  } else {
    prevSlide = document.querySelector(`.slide-${curSlideNumber - 1}`)
  }

  if (curSlideNumber === numOfSlides) {
    nextSlide = document.querySelector(`.slide-1`)
  } else {
    nextSlide = document.querySelector(`.slide-${curSlideNumber + 1}`)
  }
  slide('down')
}

btnUp.addEventListener('click', navigateUp)

btnDown.addEventListener('click', navigateDown)

document.addEventListener('mousewheel', e => {
  if (scroll) return
  const delta = Math.sign(e.deltaY)
  if (delta > 0) {
    navigateDown()
  } else {
    navigateUp()
  }
})

document.addEventListener('keydown', e => {
  if (scroll) return
  if (e.key === 'ArrowUp') {
    navigateUp()
  } else if (e.key === 'ArrowDown') {
    navigateDown()
  }
})

console.log(`Score: 30/30
✅ Разобраться в коде чужого проекта, понять его, воспроизвести функционал исходного приложения
✅ Дополнить исходный проект обязательным дополнительным функционалом, указанным в описании задания
  ✨  Слайдер бесконечный (зацикленный)
✅ Дополнить исходный проект дополнительным функционалом на выбор из тех, которые перечислены в описании задания, или придуманным вами самостоятельно
  ✨  Слайдер пролистывается колёсиком мышки
  ✨  Слайдер пролистывается нажатием на кнопки "Вверх" - "Вниз" `)

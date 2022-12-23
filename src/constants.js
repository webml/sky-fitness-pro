const BASE_URL = 'https://sky-fitness-pro-backend-default-rtdb.europe-west1.firebasedatabase.app'
export const COURSES_API=`${BASE_URL}/courses`
export const TRAININGS_API = `${BASE_URL}/workouts`
export const EXERCISE_API = `${BASE_URL}/exercises`

export const coursesImages = {
  "Танцевальный фитнес":"/courses/orange.png",
  "Стретчинг":"/courses/blue.png",
  "Йога":"/courses/purple.png",
  "Степ-аэробика":"/courses/green.png",
  "Бодифлекс":"/courses/leightBlue.png"
}

export const colors = {
  1: {
    color1 : '#565EEF',
    color2: '#EDECFF'
  },
  2: {
    color1: '#FF6D00',
    color2: '#FFF2E0'
  },
  3: {
    color1: '#9A48F1',
    color2: '#F9EBFF'
  },
  4: {
    color1:'#565EEF',
    color2: '#EDECFF' 
  },
  5: {
    color1: '#FF6D00',
    color2: '#FFF2E0'
  }
}

export const createGradient = (color1, color2, percent) => {
  return `linear-gradient(to right,${color1} 0%,${color1} ${percent}%,${color2} ${percent}%,${color2} 100%)`
}
export const API = 'https://d2api.netlify.app'
export const rawListAPI = [
    '/api/runes.json',
]
/*export const listItemAPI = rawListAPI.forEach((el) => {
    const ApiList = [];
    ApiList.push(el.toString().slice(5))
    return ApiList
})*/
let runesApi = `${API + rawListAPI[0]}`

//TODO Вычленить из API необходимые поля и сделать вывод на компонент {Runes}
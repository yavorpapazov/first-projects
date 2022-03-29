import { createContext, useState } from 'react'

let AppContext = createContext()
function AppContextProvider({children}) {
    let [energyBarDB, setEnergyBarDB] = useState([])
    let initialToken = localStorage.getItem('token')
    let [token, setToken] = useState(initialToken)
    let initialEmail = localStorage.getItem('email')
    let [userEmail, setUserEmail] = useState(initialEmail)
    let userIsLoggedIn = !!token
    let url = 'https://react-project-70cfc-default-rtdb.firebaseio.com/energybar.json'
    async function getEnergyBar() {
        let response = await fetch(url)
        let responseData = await response.json()
        let ingredientsObj = {}
		let ingredientsArr = []
		for(let key in responseData) {
			ingredientsObj = {
				id: key,
				email: responseData[key].email,
                carbs: responseData[key].ingredient.carbs,
                fat: responseData[key].ingredient.fat,
                fiber: responseData[key].ingredient.fiber,
                item: responseData[key].ingredient.item,
                kcal: responseData[key].ingredient.kcal,
                protein: responseData[key].ingredient.protein,
                sugars: responseData[key].ingredient.sugars
			}
			ingredientsArr.push(ingredientsObj)
		}
        setEnergyBarDB(ingredientsArr)
    }
    async function submitIngredientsItem(element) {   
		await fetch(url, {
			method: 'POST',
			body: JSON.stringify({
                ingredient: element,
                email: userEmail
            }),
            headers: {
                'Content-Type': 'application/json'
            }
		})
        getEnergyBar()
	}
    async function addHandler(element) {
        let response = await fetch(url)
        let responseData = await response.json()
        let idObj = []
		let idArr = []
		for(let key in responseData) {
            idObj = {
                email: responseData[key].email,
                id: responseData[key].ingredient.id
            }
            idArr.push(idObj)
        }
        let elementExist = idArr.some(item => item.email === userEmail && item.id === element.id)
        if(elementExist) {
            alert('Item already added!')
        } else {
            submitIngredientsItem(element)
        }  
	}
    async function removeHandler(element) {
        let newUrl = `https://react-project-70cfc-default-rtdb.firebaseio.com/energybar/${element.id}.json`
		await fetch(newUrl, {
			method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
		})
        getEnergyBar()
	}
    function loginHandler(token, userEmailAddress) {
        setToken(token)
        setUserEmail(userEmailAddress)
        localStorage.setItem('token', token)
        localStorage.setItem('email', userEmailAddress)
    }
    function logoutHandler() {
        setToken(null)
        localStorage.removeItem('token')
        localStorage.removeItem('email')
    }
    let contextValue = {
        token: token,
        isLoggedIn: userIsLoggedIn,
        login: loginHandler,
        logout: logoutHandler,
        addHandler: addHandler,
        removeHandler: removeHandler,
        getEnergyBar: getEnergyBar,
        energyBarDB: energyBarDB,
        userEmail: userEmail
    }
    return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
}
export {AppContext, AppContextProvider}
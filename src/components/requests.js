const hostsURL = "http://localhost:4000/hosts"
const areasURL = "http://localhost:4000/areas"

const parseData = resp => resp.json()
const catchError = error => console.log(`%c ${error}`, "color: red; font-size: 24px")

export const fetchHosts = () => fetch(hostsURL)
    .then(parseData)
    .catch(catchError)

export const fetchAreas = () => fetch(areasURL)
    .then(parseData)
    .catch(catchError)


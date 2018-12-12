import axios from 'axios'

const baseURL = `https://beetle-backend.herokuapp.com/api/`

axios.create({
  baseURL: baseURL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  allBranches: () => {
    return new Promise(async (resolve, reject) => {
      try {
        let branches = await axios.get(`${baseURL}branch`)
        resolve(branches.data)
      } catch (error) {
        reject(error)
      }
    })
  },
  branch: (id) => {
    return new Promise(async (resolve, reject) => {
      try {
        let branch = await axios.get(`${baseURL}branch/${id}`)
        resolve(branch.data)
      } catch (error) {
        reject(error)
      }
    })
  },
  transactions: () => {
    return new Promise(async (resolve, reject) => {
      try {
        let transactions = await axios.get(`${baseURL}transactions`)
        resolve(transactions.data)
      } catch (error) {
        reject(error)
      }
    })
  },
  boxDetails: (boxid) => {
    return new Promise(async (resolve, reject) => {
      try {
        let details = await axios.get(`${baseURL}boxes/${boxid}`)
        resolve(details.data)
      } catch (error) {
        reject(error)
      }
    })
  }
}

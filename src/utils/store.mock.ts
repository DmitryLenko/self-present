import configureStore from 'redux-mock-store'
import { Store } from 'redux'

export const makeMockStore = (store: object): Store => {
  const mockStore = configureStore()
  return mockStore(store)
}

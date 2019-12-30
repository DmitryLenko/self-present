import { mount } from 'enzyme'
import toJson from 'enzyme-to-json'
import React from 'react'
import { useSelector } from 'react-redux'

import { App } from './app'


jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: jest.fn()
}))


const useSelectorMock = useSelector as jest.Mock<ReturnType<typeof useSelector>>

describe('app', () => {
  it('base', () => {
    useSelectorMock.mockReturnValue(1)
    expect(
      toJson(
        mount(
          <App />
        )
      )
    ).toMatchSnapshot()
  })
})

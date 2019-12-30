/* eslint-disable global-require */
import Enzyme from "enzyme"
import Adapter from "enzyme-adapter-react-16"

process.env.TEST = true

Enzyme.configure({ adapter: new Adapter() })

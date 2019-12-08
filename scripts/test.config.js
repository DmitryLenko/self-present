/* eslint-disable global-require */
import Enzyme from "enzyme"
import Adapter from "enzyme-adapter-react-16"

// const globalAny: any = global;

process.env.TEST = true
// apply React 16 adapter
Enzyme.configure({ adapter: new Adapter() })

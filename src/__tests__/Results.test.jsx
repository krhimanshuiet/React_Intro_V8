import {expect,test} from "vitest"
import {render} from "@testing-library/react"
import Result from "./../Results"

test("renders correct with no pets",async () => {
    const  {asFragment} = render(<Result pets={[]}/>)
    expect(asFragment()).toMatchSnapshot();
})
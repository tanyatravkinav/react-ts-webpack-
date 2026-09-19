import {render, screen} from '@testing-library/react'
import { Button } from './Button'


describe("testButton", ()=> {
    test("Button in the screen", ()=> {
        render(<Button>TEST</Button>)
        expect(screen.getByText("TEST")).toBeInTheDocument()
    })
})
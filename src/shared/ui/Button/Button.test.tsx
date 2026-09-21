import {render, screen} from '@testing-library/react'
import { Button, ThemeButton } from './Button'


describe("testButton", ()=> {
    test("Button in the screen", ()=> {
        render(<Button>TEST</Button>)
        expect(screen.getByText("TEST")).toBeInTheDocument()
    })

    test("Button have class", ()=> {
        render(<Button theme={ThemeButton.CLEAR}>TEST</Button>)
        expect(screen.getByText("TEST")).toHaveClass("clear")
        screen.debug()
    })
})
import { render, screen } from "@testing-library/react";
import Catalog from "./Catalog";

beforeEach(() => {
    jest.spyOn(global, "fetch").mockImplementation(() => {
        Promise.resolve({
            json: () => Promise.resolve({text: 'HUHUHUHU'})
        })
    })
});

test('All records rendered', async () => {
    const value = `Car`

    render(<Catalog />)

    const element = await screen.findByText('Car Listings')

    expect(element).toBeInTheDocument()
});
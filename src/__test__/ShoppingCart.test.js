import ShoppingCart from "../components/ShoppingCart";
import Checkout from "../components/Checkout";
import { render, screen } from "@testing-library/react";

describe(ShoppingCart, () => {
  it("Renders the Checkout and checks if the labels and button render properly", () => {
    render(<Checkout />);
    const firstName = screen.getByText(/First Name/i);
    const lastName = screen.getByText(/Last Name/i);
    const address1 = screen.getByText(/Address 1/i);
    const address2 = screen.getByText(/Address 2/i);
    const city = screen.getByText(/City/i);
    const province = screen.getByText(/Province/i);
    const postalCode = screen.getByText(/Postal Code/i);
    const creditCart = screen.getByText(/Credit Card Number/i);
    const expiryDate = screen.getByText(/Expiry Date/i);
    const cvv = screen.getByText(/CVV/i);
    const btn = screen.getByRole("button");

    expect(firstName).toBeInTheDocument();
    expect(lastName).toBeInTheDocument();
    expect(address1).toBeInTheDocument();
    expect(address2).toBeInTheDocument();
    expect(city).toBeInTheDocument();
    expect(province).toBeInTheDocument();
    expect(postalCode).toBeInTheDocument();
    expect(creditCart).toBeInTheDocument();
    expect(expiryDate).toBeInTheDocument();
    expect(cvv).toBeInTheDocument();
    expect(btn).toBeInTheDocument();
  });
});

import React from "react";
import { render, screen } from '@testing-library/react';
import "@testing-library/jest-dom";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";

describe("text content", () => {
    test('Header should render motto', () => {
        render(<Header clubName="Chadstone Cobras FC" />);
        expect(screen.getByText("Go your hardest.")).toBeInTheDocument();
    });
    test('Footer should contain heading "Club sponsors"', () => {
        render(<Footer />);
        expect(screen.getByText("Club sponsors")).toBeInTheDocument();
    })
});
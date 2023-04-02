import React from "react";
import { render, screen } from '@testing-library/react';
import "@testing-library/jest-dom";
import MembershipForm from "../Components/Main/Membership/MembershipForm";

describe('Confirm UI change with form', () => {
    test('Check for addition form button', () => {
        render(<MembershipForm />);
        const additionalForm = screen.getByRole('button',{name: "Submit another form"});
        expect(additionalForm).toBeInTheDocument();
    });
    test('Check for form confirmation message',() => {
        render (<MembershipForm />);
        const text = `Thank you, your form has been submitted.`;
        const confirmationMessage = screen.getByText(text);
        expect(confirmationMessage).toBeInTheDocument();
    });
})
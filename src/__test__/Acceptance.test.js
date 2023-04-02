import React from 'react';
import { render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import MembershipForm from "../Components/Main/Membership/MembershipForm";

describe('Check buttons call onClick handler',() => {
    test('Submit button for form should call onClick handler',() => {
        const mockButtonSubmit = jest.fn();
        render (<MembershipForm buttonSubmit={mockButtonSubmit}/>);
        const buttonSubmit = screen.getByRole('button',{name: "Submit membership form"});
        userEvent.click(buttonSubmit);
        expect(mockButtonSubmit).toHaveBeenCalled();
    });
    test('Submit another form button should call onClick handler', () => {
        const mockButtonSubmit = jest.fn();
        render (<MembershipForm newForm={mockButtonSubmit} />);
        const newForm = screen.getByRole('button',{name: "Submit another form"});
        userEvent.click(newForm);
        expect(mockButtonSubmit).toHaveBeenCalled();
    });
});
import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import MembershipForm from "../Components/Main/Membership/MembershipForm";
import SearchBarEnhancement from '../Components/Main/Aside/SearchbarEnhancement';


describe('Check buttons call onClick handler',() => {
    //submit form
    test('Submit button for form should call onClick handler',() => {
        //uses callback function
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

// describe('SearchBar component', () => {
//     test('user enters valid input', () => {
//         render(<SearchBarEnhancement />);
//         const searchBar = screen.getByRole('textbox');

//     })
// })
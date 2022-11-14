import { createElement } from 'lwc';
import Lwc_eg_SearchAccount_WireFunc from 'c/lwc_eg_SearchAccount_WireFunc';

describe('c-lwc-eg-search-account-wire-func', () => {
    afterEach(() => {
        // The jsdom instance is shared across test cases in a single file so reset the DOM
        while (document.body.firstChild) {
            document.body.removeChild(document.body.firstChild);
        }
    });

    it('TODO: test case generated by CLI command, please fill in test logic', () => {
        // Arrange
        const element = createElement('c-lwc-eg-search-account-wire-func', {
            is: Lwc_eg_SearchAccount_WireFunc
        });

        // Act
        document.body.appendChild(element);

        // Assert
        // const div = element.shadowRoot.querySelector('div');
        expect(1).toBe(1);
    });
});
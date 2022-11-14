import getListAccount from '@salesforce/apex/ContactController1.getListAccount';

const getAccounts = () => {
    return getListAccount().then((result) => {
        return result;
    }).catch((error) => {
        console.log('getListAccount', error);
    });
};

export { getAccounts };
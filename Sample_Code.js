// Function that is used to handle the event when a user submits the request to make a new address
const handleSubmitAddress = async (event) => {
    // Prevents the page from refreshing
    event.preventDefault();
    if (loggedIn()) {
    setDisabledOnSubmitAddAddressModal(true);
    setOverlayClickCloseAddAddressModal(false);
    // Grabbing the DOM element with the ID of address-default (which is the checkbox that is used by users to indicate whether or not they want said address to be default or not)
    const checkbox = document.getElementById('address-default');
    // We check if the checkbox is checked or not, and this will return a boolean
    const check = checkbox.checked
    // Fetching to the backend server to make a request to create a new address and using string interopolation to dynamically set the address to request whether or not the address will be a default address or not
    const newAddressResponse = await fetch(`${backend}/shipping/address?lastUse=false&default=${check}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': loggedIn()
        },
        // Using the addressInput object, we are able to grab the values and use these values to generate what user wants for the name and address of the address they are trying to create
        body: JSON.stringify({
            name: `${addressInput.firstName}, ${addressInput.lastName}`,
            address: `${addressInput.addressLineOne}, ${addressInput.addressLineTwo}, ${addressInput.city}, ${addressInput.state}, ${addressInput.zipcode}`
        })
    });
    // Data regarding the addresses that is received back from the request to the backend server when creating is finished to receive updated version of the data
    const newAddressData = await newAddressResponse.json();
    // Make sure that data we recieve back is ordered so that the default will be first followed by newest address added
    defaultFirst(newAddressData);
    // Assigning the data we recieve back to the variable addressData so we can use that variable which stores an array and map through it to display different AddressContainer components
    grabAddressData(newAddressData);
    // Clearing out the object used to store the information that users put in the input fields so it's blank when users want to create a new one
    setAddressInput({});
    // Close the modal
    closeModal();
    } else {
        grabRedirect();
    }
}
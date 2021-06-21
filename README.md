## Background
---

My name is KwokBen Ren, and I am a graduate of the General Assembly Software Engineering Immersive Program. I have been coding close to a year now, and I have been working on projects ever since. This project that I have worked with alongside a fellow peer of mine is an E-commerce website. For the full backend code, please click [here](https://github.com/krislee/ecommerce-backend) and for the full client side code, please click [here](https://github.com/krislee/ecommerce-frontend).

## Sample Code
---

In this code, the function is trying to handle a submit request when a button is clicked. The job the function has is to create a new address with the information the inputs have recieved. What we need to do is make sure that this function first is asynchronous because we want it to run alongside other functions so the client would have a better user experience and wouldn't have to wait too long. We make sure that the user is logged in as well (or else they will be redirected to the home page), and if they are, we fetch to a certain backend address specifically for creating a new address.

While we fetch the backend address to create a new address, we put inside the body the fields required with the input values which we recieve from the user when they enter it. After recieving those inputs, we rearrange the data to make sure that the default address (it is an option for users to create default addresses) is first on the list, and then we use that same data we recieve back and render the page once again, and emptying out the input fields. Finally we close the modal, and then the page should be rendered with the new information.


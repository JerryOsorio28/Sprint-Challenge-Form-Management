# Answers

- [ ] What are the required parts of class components?
    A class component needs at least to work:
    - To be extended from it's parent component
    - Needs to a have constructor, to properly initiate a class.
    - Needs to have a super, that way we'll be able to pass around props as needed.
    - Needs a render method before the return statement, to be able to render your class component in the UI.

- [ ] Name at least three lifecycle methods?
    - render(), renders your class component in the UI.
    - componentDidMount(), a good place to initiate API calls from a remote endpoint, also allows you to useState() inside of it.
    - componentWillUnmount(), it is called just before the component is unmounted and destroyed. Mainly used to clean up user's sensitive info, such as passwords and cc info.

- [ ] Why are forms used so often in web applications and software?
    - Unsure if it is a great way, or the only way to gather the users needed information, and be able to validate it.

- [ ] What advantages are there by using a forms library like Formik?
    - From what I've learned, in order to keep a track of, for example, what has been touched in your form and if there's any difference from the initial state.

- [ ] Why do we write tests for our apps?

    - Being a test driven developer ensures you in the long run less headache when fixing bugs in your app, since you later on don't have to manually test everything, which I assume is time consuming, and can get expensive.

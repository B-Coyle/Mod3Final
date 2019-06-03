# Mod3Final
Presidents
 
In a new directory, create a brand new frontend for this project using create-react-app and clone down (and use) this api to build the following:

Iteration 0:
First thing we want to do is fetch some info for us to display. Thunks are not required You are going to want to grab all the president data and populate a redux store. You should also have isLoading and hasErrored properties in your store. The data can be found at this API endpoint: get /api/v1/presidents.

Iteration 1:
Once you've populated your redux store with your data you are going to want to display the data as a card. While we wait for our data to arrive please provide a loading message for the front-end. If there is an error fetching the data, please let the user know.

Things to display: number, president, birth_year, death_year, took_office, left_office, party

Iteration 2:
You basically have a full website now. The only thing left to do is test your actions, reducers, mapStateToProps and mapDispatchToProps. You may reference the docs and the Testing Redux lesson, but may not look at past projects.

You are not required to test your async code (including thunks)

Iteration 3:
Add a party filter dropdown that determines which presidents to display based on political party. The current party should be stored in the redux store (ex. No Party, Federalist, Democratic-Republican, Whig, Democratic, Republican).

Test that filter functionality.
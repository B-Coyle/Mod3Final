import {isLoading, hasErrored, setPresidents, getPresidents} from '../actions/index';


export const fetchPresidents = () => {
    const url = 'https://localhost:3000//api/v1/presidents';
    return async(dispatch) => {
        try {
            dispatch(isLoading(true)) 
            const response = await fetch(url)
            if(!response.ok) {
                throw Error(response.statusText)
            }
            dispatch(isLoading(false))
            const data = await response.json();
            dispatch(getPresidents(data));
        } catch (error) {
            dispatch(hasErrored(error.message))
        }
    }
}


export const isLoading = (bool) => ({
    type:'IS_LOADING',
    bool
});

export const hasErrored = (message) => ({
    type: 'HAS_ERRORED',
    message
});

export const getPresidents = (presidents) => ({
    type:'GET_PRESIDENTS',
    presidents
})
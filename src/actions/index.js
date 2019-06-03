export const isLoading = (bool) => ({
    type:'IS_LOADING',
    bool
});

export const hasErrored = (error) => ({
    type: 'HAS_ERRORED',
    error
});

export const getPresidents = (presidents) => ({
    type:'GET_PRESIDENTS',
    presidents
})
export const handleFetchContactsFulfilled = (state, { payload }) => {
  state.items = payload;
};

export const handleAddContactFulfilled = (state, { payload }) => {
  state.items.push(payload);
};

export const handleDeleteContactFulfilled = (state, { payload }) => {
  const index = state.items.findIndex(contact => {
    return contact.id === payload;
  });
  state.items.splice(index, 1);
};

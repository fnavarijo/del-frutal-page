export const state = () => ({
  isOnTopSection: true,
});

export const mutations = {
  setIntersectionFlag(state: any, payload: boolean) {
    state.isOnTopSection = payload;
  },
};

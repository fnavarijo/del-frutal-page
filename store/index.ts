export const state = () => ({
  isOnTopSection: true,
});

export type RootState = ReturnType<typeof state>;

export const mutations = {
  setIntersectionFlag(state: any, payload: boolean) {
    state.isOnTopSection = payload;
  },
};

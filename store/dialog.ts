import { MutationTree } from 'vuex';

export const state = () => ({
  showDialog: false,
  showSellDialog: false,
});

export type DialogModuleState = ReturnType<typeof state>;

export const mutations: MutationTree<DialogModuleState> = {
  openDialog(state) {
    state.showDialog = true;
  },
  closeDialog(state) {
    state.showDialog = false;
  },
  openSellDialog(state) {
    state.showSellDialog = true;
  },
  closeSellDialog(state) {
    state.showSellDialog = false;
  },
};

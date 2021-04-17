import { MutationTree } from 'vuex';

export const state = () => ({
  showDialog: false,
});

export type DialogModuleState = ReturnType<typeof state>;

export const mutations: MutationTree<DialogModuleState> = {
  openDialog(state) {
    state.showDialog = true;
  },
  closeDialog(state) {
    state.showDialog = false;
  },
};

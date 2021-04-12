import { GetterTree, ActionTree, MutationTree } from 'vuex';
import { RootState } from '@/store';
import { fetchProducts } from '@/api/fetchProducts';
import { fetchSingleProduct } from '@/api/fetchSingleProduct';

export const state = () => ({
  products: [],
  singleProduct: {},
});

export type ProductsModuleState = ReturnType<typeof state>;

// export const getters: GetterTree<ProductsModuleState, RootState> = {
//   evenMore: state => state.more + 5,
//   nameAndMore: (state, getters, rootState) => `${rootState.name}: ${state.more}`,
// }

export const mutations: MutationTree<ProductsModuleState> = {
  setProducts(state: any, products: Array<any>) {
    state.products = products;
  },
  setSingleProduct(state, product: any) {
    console.log('SettingSingleProduct: ', product);
    state.singleProduct = product;
  },
};

export const actions: ActionTree<ProductsModuleState, RootState> = {
  async fetchProducts({ commit }, type) {
    const products = await fetchProducts(type);
    commit('setProducts', products);
  },
  async fetchProductByUID({ commit }, uidBrand) {
    const product = await fetchSingleProduct(uidBrand);
    commit('setSingleProduct', product);
  },
};

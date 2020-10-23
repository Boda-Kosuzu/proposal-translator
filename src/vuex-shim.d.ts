import { ComponentCustomProperties } from 'vue'
import { Store } from 'vuex'

declare module '@vue/runtime-core' {
  // Declare your own store states.
  interface State {
    title: string;
    overview: string;
    purpose: Array<string>;
    details: string;
    merit: Array<string>;
    limit: string;
    contact: string;
  }

  interface ComponentCustomProperties {
    $store: Store<State>;
  }
}
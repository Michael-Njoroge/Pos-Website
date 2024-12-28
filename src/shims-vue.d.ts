// src/shims-vue.d.ts
declare module '*.vue' {
    import { DefineComponent } from 'vue';
    const component: DefineComponent<{}, {}, any>;
    export default component;
  }
  
  declare module 'vue3-simple-typeahead' {
    const SimpleTypeahead: any;
    export default SimpleTypeahead;
  }
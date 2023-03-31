import legoTable from './legoTable.vue';
import legoPageTable from './legoPageTable.vue';
export default {
    install(Vue) {
        Vue.component(legoTable.name, legoTable);
        Vue.component(legoPageTable.name, legoPageTable);
    },
};
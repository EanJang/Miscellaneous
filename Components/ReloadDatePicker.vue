<template>

</template>

<script>
import moment from 'moment';
import i18nMixin from '@/mixins/i18n.mixin.js';
import uiRangeDatePickerPopup from './uiRangeDatePickerPopup';

export default {
    components: {
        uiRangeDatePickerPopup,
    },
    mixins: [i18nMixin],
    props: {
        refreshPlay: {type: Boolean, default: false},
        isPerformance: {type: Boolean, default: false},
        isMonitoringPerformance: {type: Boolean, default: false},
    },
    created() {},
    mounted() {
        this.showNow();
        if(this.$props.refreshPlay) {
            this.startPlay();
        }
    },
    beforeDestroy() {
        if(this.isRefreshPlay) {
            this.stopPlay();
        }
    },
    data() {
        return {
            now: '',
            popup: {
                uiRangeDatePicker: false,
            },
            isRefreshPlay: this.$props.refreshPlay,
            loading: false,
            refreshInterval: 1,
            playTimer: {},
            date: {}
        };
    },
    methods: {
        refresh()
    }
}
</script>

<style lang="scss" scoped>
    // @style/ui/component/element/
    /*20220805 icon pause add*/
</style>
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
        refresh() {
            if (!this.loading) {
                this.showNow();
                this.$emit('refresh');
            }
            this.loading = true;
            window.setTimeout(() => {
                this.loading = false;
            }, 3000);
        },
        togglePlay() {
            this.isRefreshPlay = !this.isRefreshPlay;
            if(this.isRefreshPlay){
                this.startPlay();
            } else {
                this.stopPlay();
            }
        },
        showNow() {
            this.now = moment().format('YYYY-MM-DD HH:mm');
        },
        startPlay() {
            this.playTimer = window.setInterval(() => {
              this.refresh,
              this.refreshInterval * 60 * 1000
            });
        },
        stopPlay() {
            window.clearInterval(this.playTimer);
        },
        togglePopup(id) {
            this.popup[id] = !this.popup[id];
            if(this.popup[id]) {
                this.$refs.popup.setDefault();
            }
        },
        onSave(param) {
            this.refreshInterval = param.refresh;
            this.$emit('save');
            this.resetReloadTime();
        },
        resetReloadTime() {
            if(this.isRefreshPlay) {
                this.showNow();
                this.stopPlay();
                this.startPlay();
            }
        },
        getCurrentDate() {
            return this.$refs.popup.getCurrentDate();
        },
        setDate(d) {
            this.$refs.popup.setDate(d)
        }
    }
}
</script>

<style lang="scss" scoped>
    // @style/ui/component/element/
    /*20220805 icon pause add*/
</style>
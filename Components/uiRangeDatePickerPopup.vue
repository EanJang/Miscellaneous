<template>
    <div class="range-wrap">
        <lego-icon-button @click="pageOnClosed" icontype="df" icon="delete" class="ui-icon i-closed" />
        <div class="time-container">
            <div class="datepicker rangedate">
                <multi-date-picker-extend-tab
                    ref="datepicker"
                    @input="onSearch"
                    :index1Value="'30m'"
                    :autoOpen="true"
                    @tabChange="onTabChange"
                    @dataChange="onDataChanged"
                    :isPerformance="$props.isPerformance"
                    :isMonitoringPerformance="$props.isMonitoringPerformance"
                />
            </div>
        </div>

        <div class="refresh-container">
            <div>
                <scpm-sub-title class="ui-stitle">{{$t('label.refreshCycle')}}</scpm-sub-title>
                <lego-segment-wrapper v-model="refreshInterval">
                    <lego-segment-button value="1">1 {{$t('lable.minute')}}</lego-segment-button>
                    <lego-segment-button value="3">3 {{$t('lable.minute')}}</lego-segment-button>
                    <lego-segment-button value="5">5 {{$t('lable.minute')}}</lego-segment-button>
                    <lego-segment-button value="10">10 {{$t('lable.minute')}}</lego-segment-button>
                    <lego-segment-button value="15">15 {{$t('lable.minute')}}</lego-segment-button>
                </lego-segment-wrapper>
            </div>
        </div>

        <div class="button-wrap right">
            <lego-button medium @click="pageOnClosed">{{$t('button.cancel')}}</lego-button>
            <lego-button medium main @click="onConfirm" :disabled="!valueChanged">{{$t('button.confirm')}}</lego-button>
        </div>
    </div>
</template>

<script>
    import i18nMixin from '@/mixins/i18n.mixin.js';
    import multiDatePickerExtendTab from '@/components/scpm/components/ui/multiDatePickerExtendTab';

    export default {
        mixins: [i18nMixin],
        props: {
            isPerformance: {type: Boolean, default: false},
            isMonitoringPerformance: {type: Boolean, default: false},
        },
        components: {
            multiDatePickerExtendTab
        },
        data() {
            return {
                refreshInterval: '1',
                items: [],
                lastInterval: '1',
                valueChanged: false,
                lastChanged: false,
                activeTab: 1
            };
        },
        computed: {},
        watch: {
            refreshInterval(){
                if (this.lastInterval != this.refreshInterval) {
                    this.valueChanged = true;
                } else {
                    this.valueChanged = this.lastChanged;
                }
            }
        },
        methods: {
            pageOnClosed() {
                this.$refs.datepicker.loadDefault();
                this.cancelRefreshInterval();
                this.$emit('close');
            },
            onConfirm() {
                this.save();
            },
            onDataChanged(changed){
                this.lastChanged = changed;
                if (this.lastInterval != this.refreshInterval) {
                    this.valueChanged = true;
                } else {
                    this.valueChanged = changed;
                }
            },
            save() {
                if (this.$refs.datepicker.checkValidDate()) {
                    this.$refs.datepicker.setDefault();
                    this.$emit('save', {
                        refresh: this.refreshInterval
                    });
                    this.$emit('close');
                }
            },
            onTabChange(tabIdx) {
                this.activeTab = tabIdx || 1;
            },
            onSearch(date) {
                console.log(date);
            },
            getCurrentDate() {
                return this.$refs.datepicker.getCurrentDate()
            },
            setDate(d) {
                this.$refs.datepicker.setDate(d)
            },
            cancelRefreshInterval() {
                this.refreshInterval = this.lastInterval;
            },
            setDefault() {
                this.$refs.datepicker.setDefault();
                this.lastInterval = this.refreshInterval;
                this.valueChanged = false;
                this.lastChanged = false;
            }
        }
    }
</script>

<style lang="scss" scoped>
    .refresh-container{
        height: 72px;
    }
</style>
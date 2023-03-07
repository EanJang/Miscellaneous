computed: {
    threshold() {
        if (this.$util.isEmpty(this.tempValue)) {
            return false;
        }
        const options = this.configItem.chartAttr.widget.options;
        if (options.thresholdValue && options.comparisonOperator) {
            if (options.comparisonOperator == 'GE') {
                return parseFloat(this.tempValue).toFixed(2) >= parseFloat(options.thresholdValue);
            } else if (options.comparisonOperator == 'LE') {
                return parseFloat(this.tempValue).toFixed(2) <= parseFloat(options.thresholdValue);
            }
        }
        return false;
    }

    threshold2() {
        if (!this.$util.isEmpty(this.tempValue)) {
            const options = this.configItem.chartAttr.widget.options;
            if (options.thresholdValue && options.comparisonOperator) {
                if (options.comparisonOperator == 'GE') {
                    return parseFloat(this.tempValue).toFixed(2) >= parseFloat(options.thresholdValue);
                } else if (options.comparisonOperator == 'LE') {
                    return parseFloat(this.tempValue).toFixed(2) <= parseFloat(options.thresholdValue);
                }
            }
            return false;
        }
    }
}
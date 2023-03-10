getListWidgetsRefresh(loadingbar = false) {
    this.getWidgetLoading = true;
    this.startLoading();
    if (this.popup.monTargetDetail) {
        this.$refs.monTargetDetailPopup.searchGetProduct();
    }
    if (window.app.isEventDetailPopup) {
        window.app.refreshPopup();
    }
    this.layout=[];
    this.$http.dashboard.get(`...api`).then((res) => {
        this.layout = res.contents.map((widget, i) => {
            widget.chartAttr = JSON.parse(widget.chartAttr);
            ...
            return widget;
        });
        this.getWidgetLoading = false;
        this.endLoading();
    });
}
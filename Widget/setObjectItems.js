setObjectItems(item, reset) {

    this.objectItems = [];
    if (reset || reset === undefined) {
        this.objectModel = [];
    }

    if (this.isChildResourceType) {
        this.onConfigChange();
    } else {
        if (this.productModel.length == 0) {
            this.onConfigChange();
            return;
        }

        let body = {metricKeyList: [], productIdList:[]};
        this.productModel.forEach((product) => {
            body.productIdList.push(product.productSq);
        });
        body.metricKeyList.push(item.id);

        this.load('post', '/monitoring/product/v1/console/objects', body).then((data) => {
            this.objectItems = this.$util.replaceArr(data, {objectName: 'value', objectDisplayName: 'text'});

            let objectModel = this.objectModel.filter(item => {
                return this.objectItems.some(other => other.value == item.value);
            })
            this.objectModel = objectModel;

            this.configChange();
        })
    }
}
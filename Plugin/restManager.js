import axios from 'axios'
import i18n from '@/i18n'
axios.default.baseURL = `${window.location.protocol}//${window.location.host}/monitoring/admin/v1`;
axios.default.timeout = 30000;
axios.default.maxRedirects = 1;

export const restManager = {
    loadingCnt: 0,
    loadStart(){
        if(this.loadingCnt == 0) {
            if(window.app.$loader) window.app.$loader.open('loading');
        }
        this.loadingCnt++;
    }
}
getNowTimezone() {
    var timezoneOffset = new Date().getTimezoneOffset * 60000;
    var timezoneDate = new Date(Date.now() - timezoneOffset);
    return timezoneDate;
}
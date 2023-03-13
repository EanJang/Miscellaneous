getMidnight(day) {
    let today = new Date();
    let d_day = new Date(today.setDate(today.getDate() + day));
    var timezoneOffset = new Date().getTimezoneOffset() * 60000;
    d_day.setHours(0);
    d_day.setMinutes(0);
    d_day.setSeconds(0);
    d_day.setMilliseconds(0);
    var timezoneDay = new Date(d_day - timezoneOffset);
    console.log('timezoneDay = ', timezoneDay.toISOString());
    return timezoneDay;
}
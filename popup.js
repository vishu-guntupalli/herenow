function createMindfulnessAlarm() {
    var hourlyAlarm = {when: Date.now()+5};
	chrome.alarms.create('HourlyAlarm', hourlyAlarm);
}

document.addEventListener('DOMContentLoaded', function() {
	createMindfulnessAlarm();

});
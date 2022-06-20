document.addEventListener('DOMContentLoaded', function() {
	var calendarEl = document.getElementById('calendar');

	var calendar = new FullCalendar.Calendar(calendarEl, {
		timeZone: 'GMT',
		initialView: 'timeGridWorkDay',
		headerToolbar: {
			left: 'prev,next',
			center: 'title',
			right: 'timeGridDay,timeGridWorkDay'
		},
		views: {
			timeGridWorkDay: {
				type: 'timeGrid',
				duration: { days: 5 },
				buttonText: '5 day'
			}
		},
		slotMinTime: '09:00:00',
		slotMaxTime: '18:00:00',
		// resources: [
		// 	{ id: 'a', title: 'Room A' },
		// 	{ id: 'b', title: 'Room B' }
		// ],
		events: 'https://fullcalendar.io/api/demo-feeds/events.json?with-resources=2'
	});

	calendar.render();
});
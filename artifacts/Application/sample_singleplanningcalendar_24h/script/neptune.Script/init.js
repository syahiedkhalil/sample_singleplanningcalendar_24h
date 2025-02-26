sap.ui.getCore().attachInit(function () {
    console.log("Initializing with 24-hour format...");

    // UI5 uses the correct locale (24-hour format)
    sap.ui.getCore().getConfiguration().setFormatLocale("en_GB");

    // Confirm the format locale
    console.log("Current Format Locale: ", sap.ui.getCore().getConfiguration().getFormatLocale());

    var oLocalSPC = new sap.m.SinglePlanningCalendar({
        title: "Local 24-Hour Calendar",
        views: [
            new sap.m.SinglePlanningCalendarWeekView({ key: "Week", title: "Week View" })
        ]
    });

    // force 24-hour formatting for appointments
    var oDateFormat = sap.ui.core.format.DateFormat.getTimeInstance({ pattern: "HH:mm" });

    var oAppointment = new sap.ui.unified.CalendarAppointment({
        startDate: new Date(2025, 1, 19, 14, 30),
        endDate: new Date(2025, 1, 19, 16, 45),
        title: "Meeting",
        text: oDateFormat.format(new Date(2025, 1, 19, 14, 30)) + " - " + oDateFormat.format(new Date(2025, 1, 19, 16, 45))
    });

    oLocalSPC.addAppointment(oAppointment);

    oLocalSPC.placeAt("oPage"); 
});

$(document).ready(function() {
    var usb = require('usb')

    var deviceList = usb.getDeviceList()
    $('#devices').append('<h3> Devices Number  ' + deviceList.length + '</h3>');
    $.each(deviceList, function(index, device) {
        $('.list').append('<li><span> busNumber ' + device.busNumber + ' and ' + 'deviceAddress ' + device.deviceAddress + '</h3></li>');
    });
});

var displayDateTime = () => {
    var now = dayjs().format('MMM D, YYYY [at] HH:mm:ss A');
    $('#date-time').html(now)
}

setInterval(displayDateTime, 1000)
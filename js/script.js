<script>
  function updateFloridaTime() {
    const options = {
      timeZone: 'America/New_York',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true
    };
    const formatter = new Intl.DateTimeFormat([], options);
    document.getElementById('florida-time').textContent = formatter.format(new Date());
  }

  setInterval(updateFloridaTime, 1000);
  updateFloridaTime();
</script>


const params = new URLSearchParams(location.search);
const id = params.get("v");
if (id) {
  const iframe = document.getElementById("ytProxy");
  iframe.src = `https://www.youtube.com/embed/${id}?autoplay=1&mute=1&controls=0&modestbranding=1&disablekb=1`;
}

const params = new URLSearchParams(location.search);
const id = params.get("v");
if (id) {
  const iframe = document.getElementById("ytProxy");
  iframe.src = `https://www.youtube.com/embed/${id}?autoplay=1&mute=0&controls=1&modestbranding=1&disablekb=1`;
}



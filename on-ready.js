export default function onReady(callback){
  if (document.readyState !== "loading") {
    // The document is already ready.
    setTimeout(callback, 1);
    return;
  }

  document.addEventListener("DOMContentLoaded", callback);
}

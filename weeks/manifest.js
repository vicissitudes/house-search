/* Weeks published on this site.
   Add a week by creating weeks/YYYY-MM-DD.js and appending that date below.
   Do not edit or remove older dates, and do not edit older week files.
*/
window.HOUSE_MANIFEST = [
  "2026-11-21",
  "2026-11-28"
];

window.HOUSE_MANIFEST.forEach(function (id) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(id)) return;
  document.write('<script src="weeks/' + id + '.js"><\/script>');
});

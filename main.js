$(document).ready(function () {
  $("#count").html($(".unread").length);

  $(".unread-toggle").click(function () {
    $(".unread").removeClass("unread");
    $(".notification-dot").removeClass("notification-dot");
    $("#count").html($(".unread").length);
  });
});

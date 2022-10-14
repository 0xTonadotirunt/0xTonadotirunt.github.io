$(document).ready(function () {
  $("#sidebarCollapse").on("click", function () {
    $("#sidebar").toggleClass("active");
  });
});

const app = Vue.createApp({
  // Data Properties
  data() {
    return {};
  },

  methods: {
    mouseOver: function () {
      alert("Mouse Over!");
    },
    // YOUR CODE GOES HERE
  },
});

app.mount("#app");

People.allow({
  insert: function () {
    return true;
  },
  remove: function () {
    return true;
  }
});

Items.allow({
  update: function () {
    return true;
  }
});
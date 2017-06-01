import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    delete(comment) {
      if (confirm('Are you sure you want to delete this comment?')) {
        this.sendAction('destroyComment', comment);
      }
    },
    updateComment(comment) {
      var params = {
        name: this.get('name'),
        date: this.get('date'),
        content: this.get('content')
      };
      this.sendAction('updateComment', comment, params);
    }
  }
});

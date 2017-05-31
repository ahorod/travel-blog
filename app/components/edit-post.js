import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    delete(post) {
      if (confirm('Are you sure you want to delete this post?')) {
        this.sendAction('destroyPost', post);
      }
    },
    update(post) {
      var params = {
        title: this.get('title'),
        date: this.get('date'),
        category: this.get('category'),
        image: this.get('image'),
        content: this.get('content')
      };
      console.log(params);
      this.sendAction('update', post, params);
    }
  }
});

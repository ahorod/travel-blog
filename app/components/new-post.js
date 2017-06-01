import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    savePost() {
      var params = {
        title: this.get('title')? this.get('title') : "",
        date: this.get('date')? this.get('date') : "",
        category: this.get('category')? this.get('category') : "",
        image: this.get('image')? this.get('image') : "",
        content: this.get('content')? this.get('content') : ""
      };
      this.sendAction('savePost', params);
      // clear the form
      this.set('title', '');
      this.set('date', '');
      this.set('category', '');
      this.set('image', '');
      this.set('content', '');
    }
  }
});

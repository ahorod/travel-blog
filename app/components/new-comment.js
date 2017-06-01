import Ember from 'ember';

export default Ember.Component.extend({
  addNewComment: false,
  actions: {
    commentFormShow() {
      this.set('addNewComment', true);
    },
    saveComment() {
     var params = {
       name: this.get('name')? this.get('name') : "",
       date: this.get('date')? this.get('date') : "",
       content: this.get('content')? this.get('content') : "",
       post: this.get('post')
     };
     this.set('addNewComment', false);
     this.sendAction('saveComment', params);
   }
  }
});

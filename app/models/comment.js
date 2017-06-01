import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  date: DS.attr(),
  content: DS.attr(),
  post: DS.belongsTo('post', { async: true })
});

import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    searchSubreddit(event){
      event.preventDefault();
      let subreddit = this.get('subreddit');
      this.transitionToRoute('search', subreddit);
    }
  }
});

import Ember from 'ember';

export default Ember.Route.extend({
  model(params){
    let posts = [];
    let subreddit = params.subreddit;
    let url = 'https://www.reddit.com/r/' + subreddit + '.json';
    return $.getJSON(url);
  }
});

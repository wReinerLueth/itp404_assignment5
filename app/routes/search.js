import Ember from 'ember';
import $ from 'jquery';

export default Ember.Route.extend({
  model(params){
    // params is the model or object
    console.log(params.subreddit);
    let subreddit = params.subreddit;
    let url = 'https://www.reddit.com/r/' + subreddit + '.json';
    return $.getJSON(url);
    // return reddit(subreddit);
  }
});

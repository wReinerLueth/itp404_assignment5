import Ember from 'ember';
import $ from 'jquery';

export default Ember.Service.extend({
    findAllForSubreddit(subreddit){
        let url = 'https://www.reddit.com/r/' + subreddit + '.json';
        return $.getJSON(url);
    }
});

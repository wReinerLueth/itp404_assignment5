import Ember from 'ember';

export default Ember.Controller.extend({
    reddit: Ember.inject.service(),
    actions: {
        reddit(subreddit){ // do I need jQueryEvent?
            this.get('reddit').findAllForSubreddit(subreddit);
        }
    }
});

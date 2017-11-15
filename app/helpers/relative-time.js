import Ember from 'ember';
import moment from 'moment';

export function relativeTime(params/*, hash*/) {
  let datetime = params[0];
  return moment(datetime * 1000).calendar();
}

export default Ember.Helper.helper(relativeTime);

export default {

	methods: {

	  _clone(obj) {
	    if (null == obj || "object" != typeof obj) return null;
	    var copy = {  };
	    for (var attr in obj) {
	      if (obj.hasOwnProperty(attr)) copy[attr] = obj[attr];
	    }
	    return copy;
	  },

	  _guid() {
		  function s4() { return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1); }
		  return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
		},

		_getElementFromMousePosition(x, y, obscuring_element) {
		  if(obscuring_element) {
		    obscuring_element.style.display = 'none';
		  }
		  var elementMouseIsOver = document.elementFromPoint(x, y);
		  if(obscuring_element) {
		    obscuring_element.style.display = 'block';
		  }
		  return elementMouseIsOver;
		},

    _splitTimeStr(time_string) {
      let time = { hour: 0, minutes: 0, seconds: 0 }
      let intervals = time_string.split(':');

      time.hours  = (intervals.length >= 1) ? parseInt(intervals[0]) : 0;
      time.minutes  = (intervals.length >= 2) ? parseInt(intervals[1]) : 0;
      time.seconds  = (intervals.length >= 3) ? parseInt(intervals[2]) : 0;

      return time;
    },

		_longFormat(moment) {
		  return moment.format('YYYY') + '-' + moment.format('MM') + '-' + moment.format('DD') + ' ' + moment.format('HH')+ ':' + moment.format('mm')
		},

		_merge_options(obj1, obj2) {
		    var obj3 = { };
		    for (var attrname in obj1) { obj3[attrname] = obj1[attrname]; }
		    for (var attrname in obj2) { obj3[attrname] = obj2[attrname]; }
		    return obj3;
		}

	}

}
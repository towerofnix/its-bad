var DEATH = .5;
var TARGET = 'Now we\'re getting fancy..';
var ENCHANTMENTS = [773, 818, 772, 774, 775, 776, 777, 812];
var CASTTIMES = 100;

var z = (D,T,E)=>{
  var a=E.map(c=>String.fromCharCode(c));
  return T.split('').map(l=>l+a.filter(_=>Math.random()<D).join('')).join('');
};

z(DEATH, TARGET, ENCHANTMENTS);

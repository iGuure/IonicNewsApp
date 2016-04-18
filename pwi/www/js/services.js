angular.module('starter.services', [])

.service('NewsModel', function($http, Backand) {
  var service = this,
      baseUrl = '/1/query/data/',
      queryName = 'getNewsList';

  function getUrl() {
    return Backand.getApiUrl() + baseUrl + queryName;
  };

  service.getAll = function(promotion) {
    return $http.get(getUrl() + '?parameters={"promotion":"' + promotion + '"}');
  };
})

.service('NewsDetailModel', function($http, Backand) {
  var service = this,
      baseUrl = '/1/objects/',
      objectName = 'news/';

  function getUrl() {
      return Backand.getApiUrl() + baseUrl + objectName;
  };

  function getUrlForId(id) {
      return getUrl() + id;
  };

  service.fetch = function (id) {
      return $http.get(getUrlForId(id));
  };
})

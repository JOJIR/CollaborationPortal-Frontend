app.factory('JobService',function($http)
{
	var jobService={};
	var BASE_URL ="http://localhost:8081/Backend/"
	jobService.saveJob=function(job)
	{
		return $http.post(BASE_URL + "/postJob" , job);
	}
	return jobService;
})
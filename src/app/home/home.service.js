class HomeService {

    constructor($http, API_END_POINT) {
        this.$http = $http;
        this.apiEndPoint = API_END_POINT;
    }

    getUsers() {
        return this.$http.get(this.apiEndPoint + '/posts')
        .then(response => response.data)
    }
}

HomeService.$inject = ['$http', 'API_END_POINT'];

export { HomeService };

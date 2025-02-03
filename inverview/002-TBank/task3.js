const userService = {
    currentFilter: 'active',
    users: [
        {name: 'Alex', status: 'active'},
        {name: 'Nick', status: 'deleted'},
    ],
    // getFilteredUsers: function () {
    //     return this.users.filter(function (user) {
    //         return user.status === this.currentFilter;
    //     })
    // },
    getFilteredUsers: function () {
        return this.users.filter((user) =>  {
            return user.status === this.currentFilter;
        })
    }
}

console.log(userService.getFilteredUsers());

// какие способы передача контекста
// bind, call, apply

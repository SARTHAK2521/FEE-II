var users = ['Amit', 'Ajay', 'Mukesh'];
var rewards = [7, 5, 3]; 
var listOfUser = [];
for (var i = 0; i < users.length; i++) {
    var userObj = {
        id: i + 1,  
        name: users[i],  
        reward: rewards[i]  
    };
    listOfUser.push(userObj);
}
console.log(listOfUser);

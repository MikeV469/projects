/**
 * Create a register function that accepts:
 * username
 * email
 * password
 * subscriptionStatus
 * discordID
 * lessonsCompleted
 * 
 * Inside your registration function:
 * 1. Create a user object
 * 2. Push this user bject onto the 'users' array
 */


let users = [
    {
    username: "Mike",
    email: "mike.voosen81@gmail.com",
    subscriptionStatus: "VIP",
    password: "password123",
    discordId: "Mike469",
    lessonsCompleted: [0, 1],
    },
    {
    username: "Lucas",
    email: "lucas.voosen@gmail.com",
    subscriptionStatus: "VIP",
    password: "Iamtheboss",
    discordId: "LucasIsBoss",
    lessonsCompleted: [0, 1, 2, 3],
    }
]

function register(
    username, 
    email, 
    password, 
    subscriptionStatus, 
    discordId, 
    lessonsCompleted
) {

}

register('happy', 'happy.voosen@gmail.com', 'imadogyo')
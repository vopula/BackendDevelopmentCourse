// let userRole = "admin";
// let accessLevel;

// if (userRole === "admin") {
//     accessLevel = "Full Access Granted";
// } else if (userRole === "manager") {
//     accessLevel = "Limited Access Granted";
// } else {
//     accessLevel = "No Access Granted";
// }

// console.log('Access Level:', accessLevel)

// let isLoggedin = true;
// let userMessage;

// if (isLoggedin) {
//     if (userRole === 'admin') {
//         userMessage = 'Welcome, Admin!';
//     } else {
//         userMessage = 'Welcome, User!';
//     }
// } else {
//     userMessage = 'Please Log in to access the system';
// }

// console.log('User message:', userMessage)

// let userType = "subscriber";
// let userCategory;

// switch (userType) {
//     case "admin":
//         userCategory = "Administrator";
//         break;
//     case "manager":
//         userCategory = "Manager";
//         break;
//     case "subscriber":
//         userCategory = "Subscriber";
//         break;
//     default:
//         userCategory = "Unknown";
// }

// console.log("User Category:", userCategory);

// let isAuthenticated = true;
// let authenticationStatus = isAuthenticated ? "Authenticated" : "Not authenticated";

// console.log("Authentication Status:", authenticationStatus);



// TASK BASED
// Suppose an organization arranges a "Dietary Services" program to provide diets to its employees and customers, based on a person's weight and day-to-day routine. You need to create an authorization-based code to provide access to people based on their roles in organization, such as employees, enrolled members for "Dietary Services," and subscribers.
// If the person is an Employee, they are authorized to have access to "Dietary Services".
// If the person is an Enrolled Member, they are authorized to have access to "Dietary Services" and one-on-one interaction with a dietician.
// If the person is a Subscriber, they are authorized to have partial access to facilitate "Dietary Services" only.
// If the person is a Non-Subscriber, they need to enroll or at least subscribe first to avail this facility.
// You need to communicate with the user by printing a message indicating whether that person is eligible to avail which type of services.

let employeeRolesOrganization = "Enrolled Member";
let messageForThem;

switch (employeeRolesOrganization) {
    case "Employee":
        messageForThem = "Dietary Services";
        break;
    case "Enrolled Member":
        messageForThem = "Dietary Service and one-on-one interaction with dietician";
        break;
    case "Subscriber":
        messageForThem = "Partial Access to dietary service";
        break;
    default:
        messageForThem = "They need to enroll atleast one";
}

console.log("Access for the role:", messageForThem)

let employeeRole = "Employee";
let messageThem;

if (employeeRole == "Employee") {
    messageThem = '"Dietary Services"';
} else if (employeeRole == "Enrolled Member") {
    messageThem = '"Dietary Services and one-on-one interaction with a dietician"';
} else if (employeeRole == "Subscriber") {
    messageThem = "Partial Dietary Services";
} else {
    messageThem = "Restricted, need to atleast subscribe first to avail this facility";
}

console.log('Access for role:', messageThem)
const userModel = require('../modules/userModel')
const bcrypt = require('bcrypt')

const creatUser = async (req, res) => {
    
    // 1. Check incomming data
    console.log(req.body);

    // 2. Destructure the incomming data
    const {firstName, lastName, email, password} = req.body;

    // 3. Validate the data (if empty, stop the process)
    if(!firstName || !lastName || !email || !password){
        // res.send("Please enter all the fields!")
        return res.json({
            "success" : false,
            "message" : "Please enter all the fields!"
        })
    }

    // 4. Error Handling (Try Catch)
    try{

        // 5. Check if the user is already registered
        const existingUser =  await userModel.findOne({email : email})

        // 5.1 if user found: Send response
        if(existingUser){
            return res.json({
                "status" : false,
                "message" : "User Already Exists!"
            })
        }
        // 5.1.1 Stop the process
        
        // Hashing/Encryption of the password
        const randomSalt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password,randomSalt)


        // 5.2 if user is new: 
        const newUser = new userModel({
            // Database Fields : Client's Value
            firstName : firstName,
            lastName : lastName,
            email : email,
            password : hashedPassword
        })

        // Save to database
        await newUser.save()

        // send the response
        res.json({
            "success" : true,
            "message" : "User Created Successfully!"
        })

    }catch (error) {
        console.log(error)
        res.json({
            "success" : false,
            "message" : "Internal Server Error!"
        })
    }

    
}

// Write a logic for login  

// 1. Check username and password
// 2. Destruction the incomming data
// 3. Validate the data
// 4. Error Handling (Try Catch)
// 5. Check if the user data is availabe in database
// 5.1 if user found: Send response
// 5.1.1 Stop the process

//login route

//change password


// exporting
module.exports = {
    creatUser
}
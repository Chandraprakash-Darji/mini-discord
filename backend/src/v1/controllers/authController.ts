import { Request, Response } from "express";
import bcrypt from "bcrypt";
import { User } from "../database/userModal";
import jwt from "jsonwebtoken";
// Register User
export const registerUser = (req: Request, res: Response) => {
    if (!req.body.email || !req.body.password) {
        res.status(500).send({
            message: "Error creating user",
            error: "Email and Password are required",
        });
    }
    User.findOne({ email: req.body.email }).then((user) => {
        if (user)
            res.status(500).send({
                message: "Error creating user",
                error: "User Already Exist",
            });
    });
    // hash the password
    bcrypt
        .hash(req.body.password, 10)
        .then((hashedPassword) => {
            // Create new User
            const user = new User({
                email: req.body.email,
                password: hashedPassword,
            });
            // save the User
            user.save()
                // User Added Succeffully
                .then((result) => {
                    res.status(201).send({
                        message: "User Created Successfully",
                        result,
                    });
                })
                // Error while saving User
                .catch((error) => {
                    res.status(500).send({
                        message: "Error creating user",
                        error,
                    });
                });
        })
        // Error while hashing password
        .catch((e) =>
            res.status(500).send({
                message: "Password was not hashed successfully",
                e,
            })
        );
};

// login User
export const loginUser = (req: Request, res: Response) => {
    // Finding the user
    User.findOne({ email: req.body.email }).then((user) => {
        // If user doesnt exist then return 404
        if (!user) {
            res.status(404).send({
                message: "User Not found",
            }); 
            return;
        }
        // If Exist the check for password same
        bcrypt
            // Compare password
            .compare(req.body.password, user.password)
            .then((passwordCheck) => {
                // check if password matches
                if (!passwordCheck) {
                    return res.status(400).send({
                        message: "Passwords does not match",
                    });
                }
                //   create JWT token
                const token = jwt.sign(
                    {
                        userId: user._id,
                        userEmail: user.email,
                    },
                    "RANDOM-TOKEN",
                    { expiresIn: "24h" }
                );
                // Return Success Response
                res.status(200).send({
                    message: "Login Successful",
                    email: user.email,
                    token,
                });
            })
            // If password does not match
            .catch((error) => {
                res.status(400).send({
                    message: "Passwords does not match",
                    error,
                });
            })
            // Error if email does not exist
            .catch((e) => {
                res.status(404).send({
                    message: "Email not found",
                    e,
                });
            });
    });
};

import express from 'express';
const router = express.Router({mergeParams: true});
import {loginUser,signupUser,deleteAllSelectedEntries} from '../controllers/UserController.js';
import jwt from 'jsonwebtoken';
import { User } from '../models/User.js';


const verifyToken = (req, res, next) => {
    const token = req.headers.authorization;
    if (!token) {
        return res.status(401).send('Unauthorized');
    }

    jwt.verify(token, 'mysecretcode', (err, decoded) => {
        if (err) {
            return res.status(401).send('Invalid token');
        }
        req.user = decoded;
        next();
    });
};

router.get('/' ,async (req,res) => {
    const usersData = await User.find({});
    res.json(usersData);
});

// Route to handle user login
router.post('/login', (req, res) => {
    loginUser(req, res);
});

router.get('/login', verifyToken , async (req, res) => {
    const currUser = await User.findById(req.user.id);

    res.json({name: currUser.name, email: currUser.email});
});

// Route to handle user signup
router.post('/signup', (req, res) => {
    signupUser(req, res);
});



// // Route to save an image for a user
// router.put('/:userId/images', saveImageForUser);

// // Route to get all images for a user
// router.get('/:userId/images', getAllImagesForUser);
// router.get('/:imageId', getImageData);
router.delete('/delete', deleteAllSelectedEntries);

export default router;

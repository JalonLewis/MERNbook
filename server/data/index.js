import mongoose from "mongoose";

const userIds = [
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
];

export const users = [
  {
    _id: userIds[0],
    firstName: "Edward",
    lastName: "Moore",
    email: "seed.data.1@gmail.com",
    password: "$2b$10$HnLBoaj2RjeHU3WJDJtRrOzCsSIIbqp8jVqWetgIoFZUXj8oqyyH2",
    picturePath: "p1.png",
    // friends: [4,2,3],
    friends: [],
    location: "San Jose, CA",
    occupation: "wildlife biologist",
    createdAt: 1115211422,
    updatedAt: 1115211422,
    __v: 0,
  },
  {
    _id: userIds[1],
    firstName: "Alicia",
    lastName: "Holt",
    email: "seed.data.2@gmail.com",
    password: "$2b$10$HnLBoaj2RjeHU3WJDJtRrOzCsSIIbqp8jVqWetgIoFZUXj8oqyyH2",
    picturePath: "p2.jpeg",
    // friends: [4,3,5],
    friends: [],
    location: "New York, NY",
    occupation: "marketing specialist",
    createdAt: 1595589072,
    updatedAt: 1595589072,
    __v: 0,
  },
  {
    _id: userIds[2],
    firstName: "Michael",
    lastName: "Brown",
    email: "seed.data.3@gmail.com",
    password: "$2b$10$HnLBoaj2RjeHU3WJDJtRrOzCsSIIbqp8jVqWetgIoFZUXj8oqyyH2",
    picturePath: "p3.png",
    // friends: [0,3,5],
    friends: [],
    location: "Cleveland, OH",
    occupation: "aerobics instructor",
    createdAt: 1288090662,
    updatedAt: 1288090662,
    __v: 0,
  },
  {
    _id: userIds[3],
    firstName: "Jennifer",
    lastName: "Wong",
    email: "seed.data.4@gmail.com",
    password: "$2b$10$HnLBoaj2RjeHU3WJDJtRrOzCsSIIbqp8jVqWetgIoFZUXj8oqyyH2",
    picturePath: "p4.png",
    // friends: [1,2,5],
    friends: [],
    location: "Aurora, CO",
    occupation: "urban planner",
    createdAt: 1219214568,
    updatedAt: 1219214568,
    __v: 0,
  },
  {
    _id: userIds[4],
    firstName: "Nicole",
    lastName: "Butler",
    email: "seed.data.5@gmail.com",
    password: "$2b$10$HnLBoaj2RjeHU3WJDJtRrOzCsSIIbqp8jVqWetgIoFZUXj8oqyyH2",
    picturePath: "p5.jpeg",
    // friends: [0,1],
    friends: [],
    location: "Nashville, TN",
    occupation: "marriage therapist",
    createdAt: 1493463661,
    updatedAt: 1493463661,
    __v: 0,
  },
  {
    _id: userIds[5],
    firstName: "Douglas",
    lastName: "Kennedy",
    email: "seed.data.6@gmail.com",
    password: "$2b$10$HnLBoaj2RjeHU3WJDJtRrOzCsSIIbqp8jVqWetgIoFZUXj8oqyyH2",
    picturePath: "p6.png",
    // friends: [1,2],
    friends: [],
    location: "Los Angeles, CA",
    occupation: "Journalist",
    createdAt: 1381326073,
    updatedAt: 1381326073,
    __v: 0,
  },
];

export const posts = [
  {
    _id: new mongoose.Types.ObjectId(),
    userId: userIds[0],
    firstName: "Edward",
    lastName: "Moore",
    location: "San Jose, CA",
    description: "Still missing that Mexican Coke",
    picturePath: "post1.jpeg",
    userPicturePath: "p1.png",
    likes: new Map([
      [userIds[1], true],
      [userIds[5], true],
      [userIds[4], true],
    ]),
    comments: ["So much better!", "Back in the states?", "That's so aesthetic"],
  },
  {
    _id: new mongoose.Types.ObjectId(),
    userId: userIds[1],
    firstName: "Alicia",
    lastName: "Holt",
    location: "New York, NY",
    description: "I'll be back soon my love <3",
    picturePath: "post2.jpeg",
    userPicturePath: "p2.jpeg",
    likes: new Map([
      [userIds[4], true],
      [userIds[0], true],
      [userIds[2], true],
    ]),
    comments: ["He's the best boy", "Keeping watch while mom's away", "Sammie!!"],
  },
  {
    _id: new mongoose.Types.ObjectId(),
    userId: userIds[2],
    firstName: "Michael",
    lastName: "Brown",
    location: "Cleveland, OH",
    description: "About to film a new mukbang",
    picturePath: "post3.jpeg",
    userPicturePath: "p3.png",
    likes: new Map([
      [userIds[1], true],
      [userIds[3], true],
      [userIds[5], true],
    ]),
    comments: ["No way you eat all that", "Let me have some boi", "Shake Shack ftw"],
  },
  {
    _id: new mongoose.Types.ObjectId(),
    userId: userIds[3],
    firstName: "Jennifer",
    lastName: "Wong",
    location: "Aurora, CO",
    description: "Vacation with hubby has been so great!",
    picturePath: "post4.jpeg",
    userPicturePath: "p4.png",
    likes: new Map([
      [userIds[2], true],
      [userIds[4], true],
      [userIds[0], true],
      [userIds[5], true],
    ]),
    comments: ["Looks beautiful Jennifer!", "So jelly", "Where did you go?"],
  },
  {
    _id: new mongoose.Types.ObjectId(),
    userId: userIds[4],
    firstName: "Nicole",
    lastName: "Butler",
    location: "Nashville, TN",
    description: "Sunday morning vibes",
    picturePath: "post5.jpeg",
    userPicturePath: "p5.jpeg",
    likes: new Map([
      [userIds[1], true],
      [userIds[5], true],
    ]),
    comments: ["So cozy!", "No Airpods?"],
  },
  {
    _id: new mongoose.Types.ObjectId(),
    userId: userIds[5],
    firstName: "Douglas",
    lastName: "Kennedy",
    location: "Los Angeles, CA",
    description: "Johnny's new rig cost more than my car...",
    picturePath: "post6.jpeg",
    userPicturePath: "p6.png",
    likes: new Map([
      [userIds[3], true],
      [userIds[4], true],
    ]),

    comments: ["Still driving the kia", "That's like 50K easy"],
  },
];

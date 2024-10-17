import { IndexType, Permission } from "node-appwrite";
import { answerCollection, db } from "../name";
import { databases } from "./config";

export default async function createAnswerCollection() {
  //creating collection
  await databases.createCollection(db, answerCollection, answerCollection, [
    Permission.read("any"),
    Permission.create("users"),
    Permission.read("users"),
    Permission.update("users"),
    Permission.delete("users"),
  ]);
  console.log('Answer collection created');

  //creating attributes
  await Promise.all([
    databases.createStringAttribute(db, answerCollection, 'content', 10000, true),
    databases.createStringAttribute(db, answerCollection, 'questionId', 50, true),
    databases.createStringAttribute(db, answerCollection, 'authorId', 50, true)
  ])
  console.log('Answer attributes created')
  
}


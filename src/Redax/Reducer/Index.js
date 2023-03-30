import { combineReducers } from "redux";
import { AllStory } from "./AllStory";
import { Users } from "./UserR";
import { Commentreducer } from "./CommentR";

const reducers = combineReducers({
  AllStory,
  Users,
  Commentreducer,
});

export default reducers;
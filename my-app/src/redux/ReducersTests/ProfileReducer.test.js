import ProfileReducer, {addPost} from "../Reducers/ProfileReducer";
import {render} from "@testing-library/react";
import App from "../../App";
import React from "react";

// const newState ={statePost: {
//     Posts: [
//         {id: 1, header: "Header post1", content: "Fuck the world!!! We are FSociety", time: "4:28"},
//         {id: 2, header: "Header post2", content: "Fuck the world!!! We are FSociety", time: "4:28"},
//         {id: 3, header: "Header post3", content: "Fuck the world!!! We are FSociety", time: "4:28"},
//         {id: 4, header: "Header post4", content: "Fuck the world!!! We are FSociety", time: "4:28"},
//     ],
//         newPostText: {id: null, header: "", content: "", time: ""}
// }}

it('new post should be added', () => {
   let action = addPost()
    let newState = ProfileReducer({}, {})
});
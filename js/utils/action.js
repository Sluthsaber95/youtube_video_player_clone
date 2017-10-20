// action is object that consists of the following
// {
//     type: "type-name",
//     state: state.name,
//     action: function (){
//         return "does something";
//     }
// }

const actionRetreive = (action) => {
    switch (action.type) {
        case "play":
            state.isPlaying = true;
            video.action;
            break;
        case "pause":
            state.isPlaying = false;
            video.action;
    }
}
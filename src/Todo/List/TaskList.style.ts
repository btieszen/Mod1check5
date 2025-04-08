import { IProcessedStyleSet,IStyle,mergeStyleSets } from "@fluentui/react";

interface ITaskListStyle{
    taskItem : IStyle;
    iconStyle : IStyle;
    disabled : IStyle
}

const TaskListStyle: IProcessedStyleSet<ITaskListStyle> = mergeStyleSets({
    taskItem:{
        maxHeight:50,
        minHeight:30,
        padding:10,
        width:"100%",
        backgroundColor:"lavender",
        selectors:{
            "&:hover":{background:"rgb(243,242,241)"},
        },
        margin:5,
        display:"flex",
        alignItems:"center",
        boxShadow:
        "rgb(1, 5, 14) 5px 10px 15px",
    },
    iconStyle:{
        fontSize: 20,
        margin: '0 3px',
        
        selectors:{
            "&:hover":{cursor:"pointer"},
        },       
},
    disabled:{
        color:"gray",
        selectors:{
            "&:hover":{cursor:"default"},
        },
    },
});
export default TaskListStyle;
    
import { FontIcon, mergeStyles, TeachingBubble } from '@fluentui/react';
import TaskListStyle from './TaskList.style';
import { ITask } from '../Types';
import { useBoolean } from '@fluentui/react-hooks';
import { useId } from '@fluentui/react-hooks';

type Props={
    task:ITask
}
const TaskDescription = ({ task }: Props) => {

    const buttonId=useId("targetButton");
    const [teachingBubbleVisible,{toggle:toggleTeachingBubbleVisible }] = useBoolean(false);
    return (
        <>
            <FontIcon
             id={buttonId}
             iconName="Info"
             className={
                task.description 
                ? TaskListStyle.iconStyle:
                mergeStyles(TaskListStyle.iconStyle,TaskListStyle.disabled)
             }
            onClick={toggleTeachingBubbleVisible}
              />
            
            {teachingBubbleVisible &&(
               <TeachingBubble 
               target={`#${buttonId}`}
               headline={task.title}
               onDismiss={toggleTeachingBubbleVisible}
               >
                {task.description}
            </TeachingBubble>
        )}
        </>
    );
};

export default TaskDescription;
interface TaskProps {
    description: string;
    deadline:string;
}

const TaskDetail: React.FC<TaskProps> = ({description, deadline}) => {
    return (
            <div>
        <p>{description}</p>
        <span >{deadline}</span>
        </div>
    );
}
export default TaskDetail;
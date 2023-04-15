import "./ListItem.css";

export interface ItemType {
    id: string;
    title: string;
    duedate?: string;
    desc?: string;
    priority?: number;
}

interface ListItemProps extends ItemType {
    onSetId: any
    }

export default function ListItem({id,title, onSetId, duedate, desc, priority}: ListItemProps){
    return <div className="item-wrapper"
    onClick={() => onSetId({id, title, duedate, desc, priority})}
    >
    <div className="title" data-testid='title'>{title}</div>
    <div>{duedate}</div>
    <div>{desc}</div>
    <div>{priority}</div>
    <div>&#8594;</div>
    </div>
}

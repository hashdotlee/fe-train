import "./Detail.css";
import { ItemType } from "./ListItem";

interface DetailProps extends ItemType {} 

export default function Detail({id, title, duedate, desc, priority}: DetailProps){
    return <div className="detail-wrapper">
    {
    id ? <div>
    <div style={{fontSize: "18px", fontWeight: 600, paddingBottom: "8px", borderBottom: "1px solid gray", marginBottom: '16px'}}> Thông tin chi tiết</div>
    <div><b>Tiêu đề:</b> {title}</div>
    <div><b> Hạn:</b> {duedate}</div>
    <div><b> Mô tả:</b> {desc}</div>
    <div><b> Độ ưu tiên:</b> {priority}</div>
    </div>: <i>Chưa có task nào được chọn</i>
    }
    </div>
}

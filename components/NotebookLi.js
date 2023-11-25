import Link from "next/link";
import { useSession } from "next-auth/react";

export default function NotebookLi(props) {
    const { data: session } = useSession()
    
    if (props.title.toLowerCase().includes(props.term.toLowerCase())) {
    return (
        <>
            <div>
            <li class="list-group-item flex-column align-items-start" style={{borderRadius: 5, padding: 15, paddingLeft: 20, paddingRight: 20, border: "1px solid lightgray"}}>
                <div class="d-flex w-100 justify-content-between">
                <h5 class="mb-1" style={{fontSize: 18, marginBottom: 10}}><a href={`/notebook/${props.id}`} style={{textDecoration: 0}}>{props.title}</a></h5>
                <small>Public</small>
                </div>
                <p class="mb-1">By {props.uemail}</p>
                <p class="mb-1">{props.descr}</p>
            </li>
            </div><br/>
        </>
    )
    }
    
}
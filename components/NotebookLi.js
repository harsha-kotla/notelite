import Link from "next/link";
import { useSession } from "next-auth/react";

export default function NotebookLi(props) {
    const { data: session } = useSession()

    if (session.user.name == props.uemail) {
    return (
        <>
            <div>
            <Link href={`/notebook/${props.id}`} class="list-group-item list-group-item-action flex-column align-items-start">
                <div class="d-flex w-100 justify-content-between">
                <h5 class="mb-1" >{props.title}</h5>
                <small>Public</small>
                </div>
                <p class="mb-1">{props.descr}</p>
            </Link>
            </div><br/>
        </>
    )
    }
}
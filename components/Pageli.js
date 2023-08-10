import Link from "next/link"

export default function Pageli(props) {
    if (props.title !== "") {
        return (
                <li class="list-group-item flex-column align-items-start" style={{borderRadius: 5, marginBottom: 15, border: "1px solid lightgray"}}>
                    <Link href={props.link} style={{textDecoration: 0, fontSize: 17, color: "black", fontWeight: 600}}>

                    {props.title}
                    
                    </Link>
                    <div style={{marginTop: 7}}>
                        {props.author}
                    </div>
                </li>
        )
    } else {
        return (
            <li class="list-group-item flex-column align-items-start" style={{borderRadius: 5, marginBottom: 15, border: "1px solid lightgray"}}>
                    <Link href={props.link} style={{textDecoration: 0, fontSize: 17, color: "black", fontWeight: 600}}>

                    <u>Untitled</u>
                    </Link>
            </li>

        )
    }
    
}
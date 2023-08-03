export default function Pageli(props) {
    if (props.title !== "") {
        return (
            <a href={props.link} style={{textDecoration: 0}}>
                <li class="list-group-item"><u>{props.title}</u></li>
            </a>
        )
    } else {
        return (
            <a href={props.link} style={{textDecoration: 0}}>
                <li class="list-group-item" ><u>Untitled page</u></li>
            </a>

        )
    }
    
}
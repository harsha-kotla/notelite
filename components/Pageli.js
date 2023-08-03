export default function Pageli(props) {
    if (props.title !== "") {
        return (
            <a href={props.link} style={{textDecoration: 0}}><li class="list-group-item">{props.title}</li></a>
        )
    } else {
        return (
            <a href={props.link} style={{textDecoration: 0}}><li class="list-group-item" >Untitled page</li></a>

        )
    }
    
}
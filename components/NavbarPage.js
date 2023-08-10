import { useSession, signIn, signOut } from "next-auth/react"
import { redirect } from 'next/navigation'
import Link from "next/link"
import { useState } from "react"

export default function NavbarPage(props) {
    const { data: session } = useSession()
    const [term, setTerm] = useState()
    const handleSearch = (e) => {
        e.preventDefault();
        window.location.replace(`/search/${term}`)
    }
    return (
        <>
        
        <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top" style={{borderBottom: "1px solid lightgray"}}>
        <div class="container">
            {/* <a class="navbar-brand" href="/">
            Notelite
            </a> */}
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div style={{marginTop: 2}}> <Link href="/" style={{textDecoration: 0, color: "black"}}>Notelite</Link> / {props.uemail} / <Link style={{textDecoration: 0, color: "black"}} href={`/notebook/${props.nbid}`}>{props.nbname}</Link> {props.title && (<>/</>)} {props.title}</div>        

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js" integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js" integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF" crossorigin="anonymous"></script>
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                
               
            </ul>
            <form class="d-flex" onSubmit={handleSearch}>
                <input value={term} onChange={(e) => setTerm(e.target.value)} class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
            {session && (
            <div class="btn-group dropstart">
            <a type="button" id="dropbtn" class="btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" style={{padding: 0, marginLeft: 10}}>
            <img src={session.user.image} style={{width: 40, borderRadius: "50%", border: "1px solid lightgray"}}/>

            </a>
            <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Profile</a></li>
                    <li><Link className="dropdown-item" href="/settings">Settings</Link></li>
                    <li><hr class="dropdown-divider"/></li>
                    <li><Link class="dropdown-item" href="/api/auth/signout">Log out</Link></li>
            </ul>
            </div>)}
            
            </div>
            
        </div>
        </nav><br/><br/><br/>
        {!session && (
            <div className="container">
            <div class="alert alert-secondary" role="alert">
            <Link href="/api/auth/signin" style={{textDecoration: 0}}>Log into Notelite</Link> to write pages and share your ideas with the world.
           
          </div>
          </div>
        )}
        </>
    )
}
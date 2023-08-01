import { useSession, signIn, signOut } from "next-auth/react"

export default function Navbar() {
    const { data: session } = useSession()
    return (
        <>
        <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top" style={{borderBottom: "1px solid lightgray"}}>
        <div class="container">
            <a class="navbar-brand" href="/">
            Notelite
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                {session && (
                <>
                <li class="nav-item">
                <a class="nav-link" aria-current="page" href="/">Home</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="/explore">Explore</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="/new">New notebook</a>
                </li>
                </>)}
                {!session&& (
                    <>
                    <li class="nav-item">
                    <a class="nav-link" href="/api/auth/signin">Log in</a>
                    </li>
                    </>
                )}
               
            </ul>
            <form class="d-flex">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
            {session && (
            <ul class="navbar-nav">

            
            <li class="nav-item dropdown dropleft">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <img src={session.user.image} style={{width: 40, borderRadius: "50%", border: "1px solid lightgray"}}/>
                </a>
               
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown" >
                    <li><a class="dropdown-item" href="#">Profile</a></li>
                    <li><hr class="dropdown-divider"/></li>
                    <li><a class="dropdown-item" href="/api/auth/signout">Log out</a></li>
                </ul>
                </li>

            </ul>)}
            
            </div>
        </div>
        </nav><br/><br/><br/>
        </>
    )
}
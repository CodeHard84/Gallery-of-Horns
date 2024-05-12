export default function Footer() {
    return(
        // https://stackoverflow.com/questions/41293014/new-date-getfullyear-in-react
        <p>&copy; {(new Date().getFullYear())}, Jace.</p>
    )
}


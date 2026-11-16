interface HeaderProps {
    title: string;
}

const Header = (props: HeaderProps) => {
    return (
        <header>
            <h1>{props.title}</h1>
            <hr/>
        </header>
    );
}

export default Header;
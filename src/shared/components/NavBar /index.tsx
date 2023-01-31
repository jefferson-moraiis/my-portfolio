interface IProps {
    linkName: string;
    path: string
}

export const Navbar = ({props}: {props:IProps[]}) => {

    return(
        <div>
            <ul>
                {props.map(({linkName,path}) => (
                    <a href={path}><li>{linkName}</li></a>  
                ))}
            </ul>
        </div>
    )

}
export const Screen = (props: any) => {
    return (
        <div style={{width: "100vw", height: "100vh", overflow: "hidden", display: "flex", position: "relative"}}>
            {props.children}
        </div>
    )
}
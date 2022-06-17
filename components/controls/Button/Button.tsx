function Button({ children, onClick }: any) {
    return <div onClick={onClick}>{children}</div>;
}

export default Button;

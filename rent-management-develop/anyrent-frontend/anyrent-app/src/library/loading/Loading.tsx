import "./loading.less";

export interface LoadingProps {
    style?: "primary" | "secondary";
}

const Loading = (props: LoadingProps) => {
    return (
        <svg className={`spinner ${props.style === "secondary" ? "secondary" : "primary"}`} viewBox="0 0 50 50">
            <circle id="path" cx="25" cy="25" r="20" stroke="black" strokeWidth="6" fill="none" />
        </svg>
    );
};

export default Loading;

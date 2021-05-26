import './style.css';

export default function ContainerGrid(props) {
    const { children } = props;
    return (
        <div className='container-grid'>
            {children}
        </div>
    );
}
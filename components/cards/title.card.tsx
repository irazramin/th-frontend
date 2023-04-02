const TitleCard = ({title, children}: any) => {
    return (
        <>
            <div className='title-bar-page card'>
                <div className='title'>
                    <p>{title}</p>
                </div>
                <div className='action-btn'>
                    {children}
                </div>
            </div>
        </>
    );
}

export default TitleCard
const DashboardCard = ({children}: any) => {
    return (
        <>
            <div className="card dashboard-card">
                {children}
            </div>
        </>
    );
}

export default DashboardCard
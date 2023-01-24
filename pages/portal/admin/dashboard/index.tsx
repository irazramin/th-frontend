import {AdminPortalLayout} from "../../../../layouts";
import {DefaultCard, TitleCard} from "../../../../components/cards";
import DashboardCard from "../../../../components/cards/dashboard.card";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {
    faChartGantt,
    faCity,
    faGear,
    faLanguage,
    faLaptopCode,
    faList,
    faShapes,
    faUsers
} from '@fortawesome/free-solid-svg-icons'

const Dashboard = () => {
    return (
        <>
            <AdminPortalLayout>
                <TitleCard title="Dashboard">
                </TitleCard>
               <div className='dashboard-cards'>
                   <DashboardCard>
                      <div className='wrapper'>
                          <div className="icon-wrapper">
                              <FontAwesomeIcon icon={faUsers}  className='icon'/>
                          </div>
                          <div className='contents'>
                              <span className='title'>Users</span>
                              <h4 className='count'>200</h4>
                          </div>
                      </div>
                   </DashboardCard>
                   <DashboardCard>
                       <div className='wrapper'>
                           <div className="icon-wrapper">
                               <FontAwesomeIcon icon={faCity}  className='icon'/>
                           </div>
                           <div className='contents'>
                               <span className='title'>Company</span>
                               <h4 className='count'>10</h4>
                           </div>
                       </div>
                   </DashboardCard>
                   <DashboardCard>
                       <div className='wrapper'>
                           <div className="icon-wrapper">
                               <FontAwesomeIcon icon={faList}  className='icon'/>
                           </div>
                           <div className='contents'>
                               <span className='title'>Category</span>
                               <h4 className='count'>10</h4>
                           </div>
                       </div>
                   </DashboardCard>
                   <DashboardCard>
                       <div className='wrapper'>
                           <div className="icon-wrapper">
                               <FontAwesomeIcon icon={faChartGantt}  className='icon'/>
                           </div>
                           <div className='contents'>
                               <span className='title'>Subcategory</span>
                               <h4 className='count'>17</h4>
                           </div>
                       </div>
                   </DashboardCard>
               </div>
            </AdminPortalLayout>
        </>
    );
}

export default Dashboard

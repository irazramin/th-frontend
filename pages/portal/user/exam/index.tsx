import {UserPortalLayout} from "../../../../layouts";
import {DefaultCard, TitleCard} from "../../../../components/cards";
import {faEye, faPen, faTrashCan} from "@fortawesome/free-solid-svg-icons";
import {Datatable} from "../../../../components/tables";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Exam = () => {
    const tableProps = {
        name: 'userList',
        headers: [
            {id: 1, name: 'ID', storable: false},
            {id: 2, name: 'NAME', storable: false},
            {id: 3, name: 'EMAIL', storable: false},
            {id: 4, name: 'PHONE', storable: false},
            {id: 5, name: 'MOBILE', storable: false},
        ],
        enableCheckbox: true,
        enableAction: true
    }

    const handleDtOnCheckAll = (e: any) => {
        alert('Check all clicked')
    }

    const handleDtOnCheck = (e: any) => {
        alert('Check clicked')
    }
    return (
        <>
            <UserPortalLayout>
                <TitleCard title="Exam">
                </TitleCard>

                <DefaultCard>
                    <Datatable
                        {...tableProps}
                        onCheckAll={handleDtOnCheckAll}
                    >
                        <tr className='datatable-row'>
                            <td>
                                <input onClick={handleDtOnCheck} type="checkbox"/>
                            </td>
                            <td>
                                1
                            </td>
                            <td>
                                JOHN DOE
                            </td>
                            <td>
                                john@gmail.com
                            </td>
                            <td>
                                01770000000
                            </td>
                            <td>
                                01770000001
                            </td>
                            <td>
                                <div className="action-btns">
                                    <button className='action-btn'><FontAwesomeIcon icon={faPen}/></button>
                                    <button className='action-btn'><FontAwesomeIcon icon={faEye}/></button>
                                    <button className='action-btn'><FontAwesomeIcon icon={faTrashCan}/></button>

                                </div>
                            </td>
                        </tr>

                    </Datatable>
                </DefaultCard>
            </UserPortalLayout>
        </>
    );
}

export default Exam

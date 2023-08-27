import {useRouter} from "next/router";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../../store";
import React, {useEffect, useState} from "react";
import {HttpHethod} from "../../../constants";
import {callApi} from "../../../slices/apiSlice";
import {UrlHelper} from "../../../helpers";
import {DefaultCard, TitleCard} from "../../../components/cards";
import {EmployerPortalLayout} from "../../../layouts";
import Link from "next/link";
import {ActionButton, ButtonGreenSm} from "../../../components/buttons";
import {Datatable} from "../../../components/tables";
import {faFileLines, faPlus} from "@fortawesome/free-solid-svg-icons";

const JobList = () => {
    const router = useRouter();
    const dispatch = useDispatch<AppDispatch>();
    const tableProps = {
        name: 'jobList',
        headers: [
            {id: 1, name: 'ID', storable: false},
            {id: 2, name: 'JOB NAME', storable: false},
            {id: 3, name: 'VACANCY', storable: false},
            {id: 4, name: 'CATEGORY', storable: false},
            {id: 5, name: 'MIN.EXP', storable: false},
            {id: 6, name: 'JOB POSTED', storable: false},
            {id: 7, name: 'APPLICATIONS', storable: false},
        ],
        meta: null
    }

    const [params, setParams] = useState({page: 1, limit: 10, search: ""});

    const [isMounted, setIsMounted] = useState(false);

    const {jobList = {data: [], meta: null}, jobDelete = {time: null}, isLoading = false} = useSelector(
        (state: RootState) => state.callApi
    );

    useEffect(() => {
        fetchData();
        setIsMounted(true);
    }, []);

    useEffect(() => {
        if (isMounted) {
            fetchData();
        }
    }, [params.limit, params.page, params.search]);

    useEffect(() => {
        if (isMounted && jobDelete.time != null) {
            fetchData();
        }
    }, [jobDelete?.time]);

    const fetchData = () => {
        dispatch(callApi({
            method: HttpHethod.GET,
            url: UrlHelper.jobMS('api/v1/job/list'),
            params: params,
            storeName: 'jobList',
            defaultValue: [],
            showToast: false
        }));
    };

    const deleteData = (id: string) => {
        if (confirm("Are you sure to delete? Data will be lost permanently!")) {
            dispatch(callApi({
                method: HttpHethod.DELETE,
                url: UrlHelper.jobMS(`api/v1/job/${id}/delete`),
                params: params,
                storeName: 'jobDelete',
                defaultValue: null,
                showToast: true
            }));
        }
    };


    return (
        <>
            <EmployerPortalLayout>
                <TitleCard title="Job">
                    <Link href={router.pathname + '/add'}>
                        <ButtonGreenSm icon={faPlus}>Add Job</ButtonGreenSm>
                    </Link>
                </TitleCard>
                <DefaultCard>
                    <Datatable {...tableProps}
                               meta={jobList.meta}
                               onChangeLimit={(value: any) => setParams({...params, limit: value})}
                               onChangePage={(value: any) => setParams({...params, page: value})}
                               onChangeSearch={(value: any) => setParams({...params, search: value})}
                    >
                        {jobList?.data?.length > 0 && jobList.data.map((job: any, jobIndex: number) => (
                            <tr key={jobIndex}>
                                <td>{((params.page - 1) * params.limit) + jobIndex + 1}</td>
                                <td>{job.name}</td>
                                <td>{job.vacancy}</td>
                                <td>{job.category}</td>
                                <td>{job.minimumExperience}</td>
                                <td>{new Date(job.publishDate).toLocaleDateString('en-US', {
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric'
                                })}</td>
                                <td>
                                    <ButtonGreenSm onClick={() => router.push(`job/${job._id}/application`)}
                                                   icon={faFileLines}>
                                        View Applications
                                    </ButtonGreenSm></td>
                                <td>
                                    <ActionButton
                                        key={`show${jobIndex}`}
                                        onShow={() => router.push(`job/${job._id}`)}
                                        onEdit={() => router.push(`job/${job._id}/edit`)}
                                        onDelete={() => deleteData(job._id)}
                                    />
                                </td>
                            </tr>
                        ))}
                    </Datatable>
                </DefaultCard>
            </EmployerPortalLayout>
        </>
    );
}

export default JobList
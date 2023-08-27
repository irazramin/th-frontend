import {useRouter} from "next/router";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {EmployerPortalLayout} from "../../../../../../layouts";
import {AppDispatch, RootState} from '../../../../../../store';
import {callApi} from '../../../../../../slices/apiSlice';
import {HttpHethod} from '../../../../../../constants';
import {UrlHelper} from '../../../../../../helpers';
import JobDetailsComponent from '../../../../../../features/job-details/JobDetails';

const JobDetails = () => {
    const router = useRouter();
    const dispatch = useDispatch<AppDispatch>();
    const {id} = router.query;

    const {job = {data: null}, isLoading = false} = useSelector(
        (state: RootState) => state.callApi
    );

    useEffect(() => {
        let id = router?.query?.id ?? '';
        if (id.length) {
            dispatch(callApi({
                method: HttpHethod.GET,
                url: UrlHelper.jobMS('api/v1/job/' + id),
                storeName: 'job',
                defaultValue: null
            }));
        }
    }, [router.query.id]);


    const applyJob = (id: any) => {
        dispatch(
            callApi({
                method: HttpHethod.POST,
                url: UrlHelper.jobMS("api/v1/job/apply"),
                storeName: "jobApply",
                body: {jobId: id, applicationStatus: 1},
                defaultValue: null,
                showToast: true,
            })
        );
    }

    return (
        <>
            <EmployerPortalLayout>
                <JobDetailsComponent/>
            </EmployerPortalLayout>
        </>
    );
}

export default JobDetails

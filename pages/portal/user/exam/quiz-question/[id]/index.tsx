import React from 'react';
import Quiz from "../../../../../../features/user/exam/Quiz";
import {UserPortalLayout} from "../../../../../../layouts";

const QuizQuestion = () => {
    return (
        <UserPortalLayout>
            <div>
                <Quiz/>
            </div>
        </UserPortalLayout>
    );
};

export default QuizQuestion;

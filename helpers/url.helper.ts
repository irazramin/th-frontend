export default class UrlHelper {

    static authMS(url: string) {
        return `http://localhost:3030/auth-ms/${url}`
    }

    static coreMS(url: string) {
        return `http://localhost:3030/core-ms/${url}`;
    }

    static jobMS(url: string) {
        return `http://localhost:3030/job-ms/${url}`
    }

    static quizMS(url: string) {
        return `http://localhost:3030/quiz-ms/${url}`
    }

    static messageMS(url: string) {
        return `http://localhost:3030/message-ms/${url}`
    }

}
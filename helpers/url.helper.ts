export default class UrlHelper {
    static coreMS(url: string) {
        return `http://localhost:3033/${url}`;
    }
    static authMS(url: string) {
        return `http://localhost:3032/${url}`
    }

    static quizMS(url: string) {
        return `http://localhost:3037/${url}`
    }

    static messageMS(url: string) {
        return `http://localhost:3035/${url}`
    }

}
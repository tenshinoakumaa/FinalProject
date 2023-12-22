import ActivityFetcher from "./ActivityFetcher";
class SpecificActivityFetcher extends ActivityFetcher {
    private specificActivity: string;

    constructor(specificActivity: string) {
        super();
        this.specificActivity = specificActivity;
    }

    protected beforeFetch(): string {
        return "http://www.boredapi.com/api/activity?type=".concat(this.specificActivity.trim().toLowerCase());
    }
}
export default SpecificActivityFetcher;
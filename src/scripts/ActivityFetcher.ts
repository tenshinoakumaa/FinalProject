
abstract class ActivityFetcher {
    public fetchActivity(): string {
        this.loggingBeforeFetch();
        const activity = this.beforeFetch();
        return activity;
    }

    protected loggingBeforeFetch(): void {
        console.log("Preparing to fetch activity...");
    }

    protected abstract beforeFetch(): string;
}
export default ActivityFetcher;

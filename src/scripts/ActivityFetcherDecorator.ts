import ActivityFetcher from "./ActivityFetcher";

class ActivityFetcherDecorator extends ActivityFetcher {
  private decoratedFetcher: ActivityFetcher;

  constructor(fetcher: ActivityFetcher) {
    super();
    this.decoratedFetcher = fetcher;
  }

  protected beforeFetch(): string {
    const activity = this.decoratedFetcher.fetchActivity();
    console.log("Using decorated beforeFetch() method...");
    return activity.trim().toLowerCase();
  }
}

export default ActivityFetcherDecorator;

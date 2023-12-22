import ActivityFetcher from "./ActivityFetcher";

class RandomActivityFetcher extends ActivityFetcher {
  protected beforeFetch(): string {
    return "http://www.boredapi.com/api/activity";
  }
}

export default RandomActivityFetcher;

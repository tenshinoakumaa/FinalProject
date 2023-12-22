import IActivityProcessingStrategy from "./IActivityProcessingStrategy";
import ActivityService from "./ActivityService";

class DetailedActivityProcessingStrategy implements IActivityProcessingStrategy {
    public process(activity: string, activityService : ActivityService): void {
        console.log(`${activity} is new activity.`)
        activityService.updateActivity(activity);
    }
}

export default DetailedActivityProcessingStrategy;

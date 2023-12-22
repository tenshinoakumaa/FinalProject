import IActivityProcessingStrategy from "./IActivityProcessingStrategy";
import ActivityService from "./ActivityService";

class DefaultActivityProcessingStrategy implements IActivityProcessingStrategy {
    public process(activity: string, activityService : ActivityService): void {
        activityService.updateActivity(activity);
    }
}

export default DefaultActivityProcessingStrategy;
import ActivityService from './ActivityService';
interface IActivityProcessingStrategy {
    process(activity: string, activityService : ActivityService): void;
}


export default IActivityProcessingStrategy;
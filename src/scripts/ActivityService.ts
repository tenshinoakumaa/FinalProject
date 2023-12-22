import IActivityProcessingStrategy from "./IActivityProcessingStrategy";

class ActivityService {
  private activity: string = "";
  private activityProcessor: IActivityProcessingStrategy;

  constructor(processor: IActivityProcessingStrategy) {
    this.activityProcessor = processor;
    
  }

  public updateActivity(newActivity: string): void {
    this.activity = newActivity;
  }

  public getActivity(): string {
    return this.activity;
  }

  
  public setActivity(newActivity: string): void {
    this.processActivity(newActivity);
    this.logActivity(newActivity);
  }

  private processActivity(newActivity: string): void {
    this.activityProcessor.process(newActivity,this);
  }

  private logActivity(activity: string): void {
    console.log(`Logging activity: ${activity}`);
  }
}

export default ActivityService;
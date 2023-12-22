class ActivityObserver {
    private static instance: ActivityObserver | null = null;
    private observers: (() => void)[] = [];

    private constructor() {} 

    public static getInstance(): ActivityObserver {
        if (!ActivityObserver.instance) {
            ActivityObserver.instance = new ActivityObserver();
        }
        return ActivityObserver.instance;
    }
  
    public subscribe(observer: () => void): void {
      this.observers.push(observer);
    }
  
    public unsubscribe(observer: () => void): void {
      this.observers = this.observers.filter((obs) => obs !== observer);
    }
  
    public notify(newValue): void {
      this.observers.forEach((observer) => observer(newValue));
    }
  }
  
  const activityObserver = ActivityObserver.getInstance();
export default activityObserver;
  
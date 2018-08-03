declare namespace sun {
    namespace java2d {
        class StateTrackableDelegate implements sun.java2d.StateTrackable {
            public static readonly UNTRACKABLE_DELEGATE: sun.java2d.StateTrackableDelegate
            public static readonly IMMUTABLE_DELEGATE: sun.java2d.StateTrackableDelegate
            public static createInstance(arg0: sun.java2d.StateTrackable$State): sun.java2d.StateTrackableDelegate
            public getState(): sun.java2d.StateTrackable$State
            public getStateTracker(): sun.java2d.StateTracker
            public setImmutable(): void
            public setUntrackable(): void
            public addDynamicAgent(): void
            protected removeDynamicAgent(): void
            public markDirty(): void
            public static class: java.lang.Class<any>
        }
    }
}
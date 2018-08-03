declare namespace sun {
    namespace java2d {
        interface StateTracker {
            ALWAYS_CURRENT: sun.java2d.StateTracker
            NEVER_CURRENT: sun.java2d.StateTracker
            isCurrent(): boolean
        }
        interface StateTracker$$Lambda {
            (): boolean
        }
    }
}
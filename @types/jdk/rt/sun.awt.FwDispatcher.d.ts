declare namespace sun {
    namespace awt {
interface FwDispatcher {
    isDispatchThread(): boolean
    scheduleDispatch(arg0: java.lang.Runnable | java.lang.Runnable$$Lambda): void
    createSecondaryLoop(): java.awt.SecondaryLoop
}

    }
}
declare namespace com {
  namespace sun {
    namespace jdi {

      interface ThreadReference extends com.sun.jdi.ObjectReference {
        public static readonly THREAD_STATUS_UNKNOWN: int
        public static readonly THREAD_STATUS_ZOMBIE: int
        public static readonly THREAD_STATUS_RUNNING: int
        public static readonly THREAD_STATUS_SLEEPING: int
        public static readonly THREAD_STATUS_MONITOR: int
        public static readonly THREAD_STATUS_WAIT: int
        public static readonly THREAD_STATUS_NOT_STARTED: int
        name(): java.lang.String
        suspend(): void
        resume(): void
        suspendCount(): number
        stop(arg0: com.sun.jdi.ObjectReference): void
        interrupt(): void
        status(): number
        isSuspended(): boolean
        isAtBreakpoint(): boolean
        threadGroup(): com.sun.jdi.ThreadGroupReference
        frameCount(): number
        frames(): java.util.List<com.sun.jdi.StackFrame>
        frame(arg0: number | java.lang.Integer): com.sun.jdi.StackFrame
        frames(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): java.util.List<com.sun.jdi.StackFrame>
        ownedMonitors(): java.util.List<com.sun.jdi.ObjectReference>
        ownedMonitorsAndFrames(): java.util.List<com.sun.jdi.MonitorInfo>
        currentContendedMonitor(): com.sun.jdi.ObjectReference
        popFrames(arg0: com.sun.jdi.StackFrame): void
        forceEarlyReturn(arg0: com.sun.jdi.Value): void
      }

    }
  }
}

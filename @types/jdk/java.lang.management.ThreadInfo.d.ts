declare namespace java {
  namespace lang {
    namespace management {
      class ThreadInfo {
        public getThreadId(): number
        public getThreadName(): java.lang.String
        public getThreadState(): java.lang.Thread$State
        public getBlockedTime(): number
        public getBlockedCount(): number
        public getWaitedTime(): number
        public getWaitedCount(): number
        public getLockInfo(): java.lang.management.LockInfo
        public getLockName(): java.lang.String
        public getLockOwnerId(): number
        public getLockOwnerName(): java.lang.String
        public getStackTrace(): java.lang.StackTraceElement[]
        public isSuspended(): boolean
        public isInNative(): boolean
        public isDaemon(): boolean
        public getPriority(): number
        public toString(): java.lang.String
        public static from(arg0: javax.management.openmbean.CompositeData): java.lang.management.ThreadInfo
        public getLockedMonitors(): java.lang.management.MonitorInfo[]
        public getLockedSynchronizers(): java.lang.management.LockInfo[]
      }
    }
  }
}

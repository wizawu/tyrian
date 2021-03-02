declare namespace java {
  namespace lang {
    namespace management {

      class ThreadInfo {
        public getThreadId(): long
        public getThreadName(): java.lang.String
        public getThreadState(): java.lang.Thread$State
        public getBlockedTime(): long
        public getBlockedCount(): long
        public getWaitedTime(): long
        public getWaitedCount(): long
        public getLockInfo(): java.lang.management.LockInfo
        public getLockName(): java.lang.String
        public getLockOwnerId(): long
        public getLockOwnerName(): java.lang.String
        public getStackTrace(): java.lang.StackTraceElement[]
        public isSuspended(): boolean
        public isInNative(): boolean
        public isDaemon(): boolean
        public getPriority(): int
        public toString(): java.lang.String
        public static from(arg0: javax.management.openmbean.CompositeData): java.lang.management.ThreadInfo
        public getLockedMonitors(): java.lang.management.MonitorInfo[]
        public getLockedSynchronizers(): java.lang.management.LockInfo[]
      }

    }
  }
}

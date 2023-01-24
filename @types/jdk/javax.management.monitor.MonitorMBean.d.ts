declare namespace javax {
  namespace management {
    namespace monitor {
      interface MonitorMBean {
        start(): void
        stop(): void
        addObservedObject(arg0: javax.management.ObjectName): void
        removeObservedObject(arg0: javax.management.ObjectName): void
        containsObservedObject(arg0: javax.management.ObjectName): boolean
        getObservedObjects(): javax.management.ObjectName[]
        getObservedObject(): javax.management.ObjectName
        setObservedObject(arg0: javax.management.ObjectName): void
        getObservedAttribute(): java.lang.String
        setObservedAttribute(arg0: java.lang.String | string): void
        getGranularityPeriod(): number
        setGranularityPeriod(arg0: number | java.lang.Long): void
        isActive(): boolean
      }
    }
  }
}

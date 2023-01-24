declare namespace javax {
  namespace management {
    namespace monitor {
      abstract class Monitor
        extends javax.management.NotificationBroadcasterSupport
        implements javax.management.monitor.MonitorMBean, javax.management.MBeanRegistration
      {
        protected static readonly capacityIncrement: int
        protected elementCount: int
        protected alreadyNotified: int
        protected alreadyNotifieds: int[]
        protected server: javax.management.MBeanServer
        protected static readonly RESET_FLAGS_ALREADY_NOTIFIED: int
        protected static readonly OBSERVED_OBJECT_ERROR_NOTIFIED: int
        protected static readonly OBSERVED_ATTRIBUTE_ERROR_NOTIFIED: int
        protected static readonly OBSERVED_ATTRIBUTE_TYPE_ERROR_NOTIFIED: int
        protected static readonly RUNTIME_ERROR_NOTIFIED: int
        protected dbgTag: java.lang.String
        readonly observedObjects: java.util.List<javax.management.monitor.Monitor$ObservedObject>
        static readonly THRESHOLD_ERROR_NOTIFIED: int
        static readonly INTEGER_ZERO: java.lang.Integer
        public constructor()
        public preRegister(
          arg0: javax.management.MBeanServer,
          arg1: javax.management.ObjectName
        ): javax.management.ObjectName
        public postRegister(arg0: boolean | java.lang.Boolean): void
        public preDeregister(): void
        public postDeregister(): void
        public abstract start(): void
        public abstract stop(): void
        public getObservedObject(): javax.management.ObjectName
        public setObservedObject(arg0: javax.management.ObjectName): void
        public addObservedObject(arg0: javax.management.ObjectName): void
        public removeObservedObject(arg0: javax.management.ObjectName): void
        public containsObservedObject(arg0: javax.management.ObjectName): boolean
        public getObservedObjects(): javax.management.ObjectName[]
        public getObservedAttribute(): java.lang.String
        public setObservedAttribute(arg0: java.lang.String | string): void
        public getGranularityPeriod(): number
        public setGranularityPeriod(arg0: number | java.lang.Long): void
        public isActive(): boolean
        doStart(): void
        doStop(): void
        getDerivedGauge(arg0: javax.management.ObjectName): java.lang.Object
        getDerivedGaugeTimeStamp(arg0: javax.management.ObjectName): number
        getAttribute(
          arg0: javax.management.MBeanServerConnection,
          arg1: javax.management.ObjectName,
          arg2: java.lang.String | string
        ): java.lang.Object
        getComparableFromAttribute(
          arg0: javax.management.ObjectName,
          arg1: java.lang.String | string,
          arg2: java.lang.Object | any
        ): java.lang.Comparable<unknown>
        isComparableTypeValid(
          arg0: javax.management.ObjectName,
          arg1: java.lang.String | string,
          arg2: java.lang.Comparable<unknown> | java.lang.Comparable$$lambda<unknown>
        ): boolean
        buildErrorNotification(
          arg0: javax.management.ObjectName,
          arg1: java.lang.String | string,
          arg2: java.lang.Comparable<unknown> | java.lang.Comparable$$lambda<unknown>
        ): java.lang.String
        onErrorNotification(arg0: javax.management.monitor.MonitorNotification): void
        getDerivedGaugeFromComparable(
          arg0: javax.management.ObjectName,
          arg1: java.lang.String | string,
          arg2: java.lang.Comparable<unknown> | java.lang.Comparable$$lambda<unknown>
        ): java.lang.Comparable<unknown>
        buildAlarmNotification(
          arg0: javax.management.ObjectName,
          arg1: java.lang.String | string,
          arg2: java.lang.Comparable<unknown> | java.lang.Comparable$$lambda<unknown>
        ): javax.management.monitor.MonitorNotification
        isThresholdTypeValid(
          arg0: javax.management.ObjectName,
          arg1: java.lang.String | string,
          arg2: java.lang.Comparable<unknown> | java.lang.Comparable$$lambda<unknown>
        ): boolean
        static classForType(arg0: javax.management.monitor.Monitor$NumericalType): java.lang.Class<java.lang.Number>
        static isValidForType(arg0: java.lang.Object | any, arg1: java.lang.Class<java.lang.Number>): boolean
        getObservedObject(arg0: javax.management.ObjectName): javax.management.monitor.Monitor$ObservedObject
        createObservedObject(arg0: javax.management.ObjectName): javax.management.monitor.Monitor$ObservedObject
        createAlreadyNotified(): void
        updateDeprecatedAlreadyNotified(): void
        updateAlreadyNotified(
          arg0: javax.management.monitor.Monitor$ObservedObject,
          arg1: number | java.lang.Integer
        ): void
        isAlreadyNotified(
          arg0: javax.management.monitor.Monitor$ObservedObject,
          arg1: number | java.lang.Integer
        ): boolean
        setAlreadyNotified(
          arg0: javax.management.monitor.Monitor$ObservedObject,
          arg1: number | java.lang.Integer,
          arg2: number | java.lang.Integer,
          arg3: number[] | java.lang.Integer[]
        ): void
        resetAlreadyNotified(
          arg0: javax.management.monitor.Monitor$ObservedObject,
          arg1: number | java.lang.Integer,
          arg2: number | java.lang.Integer
        ): void
        resetAllAlreadyNotified(
          arg0: javax.management.monitor.Monitor$ObservedObject,
          arg1: number | java.lang.Integer,
          arg2: number[] | java.lang.Integer[]
        ): void
        computeAlreadyNotifiedIndex(
          arg0: javax.management.monitor.Monitor$ObservedObject,
          arg1: number | java.lang.Integer,
          arg2: number[] | java.lang.Integer[]
        ): number
      }
    }
  }
}

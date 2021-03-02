declare namespace com {
  namespace sun {
    namespace jdi {

      interface VirtualMachine extends com.sun.jdi.Mirror {
        public static readonly TRACE_NONE: int
        public static readonly TRACE_SENDS: int
        public static readonly TRACE_RECEIVES: int
        public static readonly TRACE_EVENTS: int
        public static readonly TRACE_REFTYPES: int
        public static readonly TRACE_OBJREFS: int
        public static readonly TRACE_ALL: int
        allModules(): java.util.List<com.sun.jdi.ModuleReference>
        classesByName(arg0: java.lang.String): java.util.List<com.sun.jdi.ReferenceType>
        allClasses(): java.util.List<com.sun.jdi.ReferenceType>
        redefineClasses(arg0: java.util.Map<com.sun.jdi.ReferenceType,byte[]>): void
        allThreads(): java.util.List<com.sun.jdi.ThreadReference>
        suspend(): void
        resume(): void
        topLevelThreadGroups(): java.util.List<com.sun.jdi.ThreadGroupReference>
        eventQueue(): com.sun.jdi.event.EventQueue
        eventRequestManager(): com.sun.jdi.request.EventRequestManager
        mirrorOf(arg0: boolean): com.sun.jdi.BooleanValue
        mirrorOf(arg0: byte): com.sun.jdi.ByteValue
        mirrorOf(arg0: char): com.sun.jdi.CharValue
        mirrorOf(arg0: short): com.sun.jdi.ShortValue
        mirrorOf(arg0: int): com.sun.jdi.IntegerValue
        mirrorOf(arg0: long): com.sun.jdi.LongValue
        mirrorOf(arg0: float): com.sun.jdi.FloatValue
        mirrorOf(arg0: double): com.sun.jdi.DoubleValue
        mirrorOf(arg0: java.lang.String): com.sun.jdi.StringReference
        mirrorOfVoid(): com.sun.jdi.VoidValue
        process(): java.lang.Process
        dispose(): void
        exit(arg0: int): void
        canWatchFieldModification(): boolean
        canWatchFieldAccess(): boolean
        canGetBytecodes(): boolean
        canGetSyntheticAttribute(): boolean
        canGetOwnedMonitorInfo(): boolean
        canGetCurrentContendedMonitor(): boolean
        canGetMonitorInfo(): boolean
        canUseInstanceFilters(): boolean
        canRedefineClasses(): boolean
        canAddMethod(): boolean
        canUnrestrictedlyRedefineClasses(): boolean
        canPopFrames(): boolean
        canGetSourceDebugExtension(): boolean
        canRequestVMDeathEvent(): boolean
        canGetMethodReturnValues(): boolean
        canGetInstanceInfo(): boolean
        canUseSourceNameFilters(): boolean
        canForceEarlyReturn(): boolean
        canBeModified(): boolean
        canRequestMonitorEvents(): boolean
        canGetMonitorFrameInfo(): boolean
        canGetClassFileVersion(): boolean
        canGetConstantPool(): boolean
        canGetModuleInfo(): boolean
        setDefaultStratum(arg0: java.lang.String): void
        getDefaultStratum(): java.lang.String
        instanceCounts(arg0: java.util.List<com.sun.jdi.ReferenceType>): long[]
        description(): java.lang.String
        version(): java.lang.String
        name(): java.lang.String
        setDebugTraceMode(arg0: int): void
      }

    }
  }
}

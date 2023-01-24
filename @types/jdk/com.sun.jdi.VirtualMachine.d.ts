declare namespace com {
  namespace sun {
    namespace jdi {
      interface VirtualMachine extends com.sun.jdi.Mirror {
        readonly TRACE_NONE: int
        readonly TRACE_SENDS: int
        readonly TRACE_RECEIVES: int
        readonly TRACE_EVENTS: int
        readonly TRACE_REFTYPES: int
        readonly TRACE_OBJREFS: int
        readonly TRACE_ALL: int
        allModules(): java.util.List<com.sun.jdi.ModuleReference>
        classesByName(arg0: java.lang.String | string): java.util.List<com.sun.jdi.ReferenceType>
        allClasses(): java.util.List<com.sun.jdi.ReferenceType>
        redefineClasses(arg0: java.util.Map<com.sun.jdi.ReferenceType, byte[]>): void
        allThreads(): java.util.List<com.sun.jdi.ThreadReference>
        suspend(): void
        resume(): void
        topLevelThreadGroups(): java.util.List<com.sun.jdi.ThreadGroupReference>
        eventQueue(): com.sun.jdi.event.EventQueue
        eventRequestManager(): com.sun.jdi.request.EventRequestManager
        mirrorOf(arg0: boolean | java.lang.Boolean): com.sun.jdi.BooleanValue
        mirrorOf(arg0: number | java.lang.Byte): com.sun.jdi.ByteValue
        mirrorOf(arg0: string | java.lang.Character): com.sun.jdi.CharValue
        mirrorOf(arg0: number | java.lang.Short): com.sun.jdi.ShortValue
        mirrorOf(arg0: number | java.lang.Integer): com.sun.jdi.IntegerValue
        mirrorOf(arg0: number | java.lang.Long): com.sun.jdi.LongValue
        mirrorOf(arg0: number | java.lang.Float): com.sun.jdi.FloatValue
        mirrorOf(arg0: number | java.lang.Double): com.sun.jdi.DoubleValue
        mirrorOf(arg0: java.lang.String | string): com.sun.jdi.StringReference
        mirrorOfVoid(): com.sun.jdi.VoidValue
        process(): java.lang.Process
        dispose(): void
        exit(arg0: number | java.lang.Integer): void
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
        setDefaultStratum(arg0: java.lang.String | string): void
        getDefaultStratum(): java.lang.String
        instanceCounts(arg0: java.util.List<com.sun.jdi.ReferenceType>): number[]
        description(): java.lang.String
        version(): java.lang.String
        name(): java.lang.String
        setDebugTraceMode(arg0: number | java.lang.Integer): void
      }
    }
  }
}

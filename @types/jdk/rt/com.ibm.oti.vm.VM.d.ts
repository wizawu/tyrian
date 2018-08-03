declare namespace com {
    namespace ibm {
        namespace oti {
            namespace vm {
                class VM {
                    public static readonly PACKED_SUPPORT_ENABLED: boolean
                    public static readonly J9_JAVA_CLASS_RAM_SHAPE_SHIFT: int
                    public static readonly OBJECT_HEADER_SHAPE_MASK: int
                    public static readonly OBJECT_HEADER_SIZE: int
                    public static readonly FJ9OBJECT_SIZE: int
                    public static readonly J9_GC_WRITE_BARRIER_TYPE: int
                    public static readonly J9_GC_WRITE_BARRIER_TYPE_NONE: int
                    public static readonly J9_GC_WRITE_BARRIER_TYPE_ALWAYS: int
                    public static readonly J9_GC_WRITE_BARRIER_TYPE_OLDCHECK: int
                    public static readonly J9_GC_WRITE_BARRIER_TYPE_CARDMARK: int
                    public static readonly J9_GC_WRITE_BARRIER_TYPE_CARDMARK_INCREMENTAL: int
                    public static readonly J9_GC_WRITE_BARRIER_TYPE_CARDMARK_AND_OLDCHECK: int
                    public static readonly J9_GC_WRITE_BARRIER_TYPE_REALTIME: int
                    public static readonly J9_GC_ALLOCATION_TYPE: int
                    public static readonly J9_GC_ALLOCATION_TYPE_TLH: int
                    public static readonly J9_GC_ALLOCATION_TYPE_SEGREGATED: int
                    public static readonly J9_GC_POLICY: int
                    public static readonly J9_GC_POLICY_OPTTHRUPUT: int
                    public static readonly J9_GC_POLICY_OPTAVGPAUSE: int
                    public static readonly J9_GC_POLICY_GENCON: int
                    public static readonly J9_GC_POLICY_BALANCED: int
                    public static readonly J9_GC_POLICY_METRONOME: int
                    public static readonly J9CLASS_INSTANCESIZE_OFFSET: int
                    public static readonly J9CLASS_INSTANCE_DESCRIPTION_OFFSET: int
                    public static readonly J9CLASS_LOCK_OFFSET_OFFSET: int
                    public static readonly J9CLASS_INITIALIZE_STATUS_OFFSET: int
                    public static readonly J9CLASS_CLASS_DEPTH_AND_FLAGS_OFFSET: int
                    public static readonly J9CLASS_SUPERCLASSES_OFFSET: int
                    public static readonly J9CLASS_ROMCLASS_OFFSET: int
                    public static readonly J9CLASS_SIZE: int
                    public static readonly J9_JAVA_CLASS_DEPTH_MASK: int
                    public static readonly J9_JAVA_CLASS_MASK: int
                    public static readonly J9ROMCLASS_MODIFIERS_OFFSET: int
                    public static readonly ADDRESS_SIZE: int
                    public static readonly J9_ACC_CLASS_ARRAY: int
                    public static readonly J9_ACC_CLASS_INTERNAL_PRIMITIVE_TYPE: int
                    public static readonly J9CLASS_INIT_SUCCEEDED: int
                    public static readonly J9_JIT_STRING_DEDUP_POLICY: int
                    public static readonly J9_JIT_STRING_DEDUP_POLICY_DISABLED: int
                    public static readonly J9_JIT_STRING_DEDUP_POLICY_FAVOUR_LOWER: int
                    public static readonly J9_JIT_STRING_DEDUP_POLICY_FAVOUR_HIGHER: int
                    public static readonly J9_STRING_COMPRESSION_ENABLED: boolean
                    public static readonly OBJECT_HEADER_HAS_BEEN_MOVED_IN_CLASS: int
                    public static readonly IS_BIG_ENDIAN: boolean
                    public static initializeClassLoader(arg0: java.lang.ClassLoader, arg1: boolean, arg2: boolean): void
                    public static getProcessId(): long
                    public static getUid(): long
                    public static ensureCalledFromBootstrapClass(): void
                    public static dumpString(arg0: java.lang.String | string): void
                    public static setClassPathImpl(arg0: java.lang.ClassLoader, arg1: java.lang.String | string): void
                    public static enableClassHotSwap(arg0: java.lang.Class): void
                    public static initializeVM(): void
                    public static getVMArgs(): java.lang.String[]
                    public static localGC(): void
                    public static globalGC(): void
                    public static useNatives(): boolean
                    public static removeStringDuplicates(): int
                    public static getClassNameImpl(arg0: java.lang.Class): string
                    public static setVMLangAccess(arg0: com.ibm.oti.vm.VMLangAccess): void
                    public static getVMLangAccess(): com.ibm.oti.vm.VMLangAccess
                    public static markCurrentThreadAsSystem(): int
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}
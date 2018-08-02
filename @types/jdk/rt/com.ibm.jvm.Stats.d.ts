declare namespace com {
    namespace ibm {
        namespace jvm {
            class Stats {
                public constructor()
                public setFields(arg0: long, arg1: long, arg2: long, arg3: long, arg4: long, arg5: double, arg6: long, arg7: long): void
                public getCommittedHeap(): long
                public getUsedHeap(): long
                public getMaxHeap(): long
                public getSoftmxHeap(): long
                public getFreePhysicalMem(): long
                public getTotPhysicalMem(): long
                public getSysLoadAvg(): double
                public getCpuTime(): long
                public getStats(): void
                public static class: java.lang.Class<any>
            }
        }
    }
}
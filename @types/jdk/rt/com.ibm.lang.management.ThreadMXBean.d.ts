declare namespace com {
    namespace ibm {
        namespace lang {
            namespace management {
interface ThreadMXBean extends java.lang.management.ThreadMXBean {
    getNativeThreadIds(arg0: long[]): long[]
    getNativeThreadId(arg0: long): long
    dumpAllExtendedThreads(arg0: boolean, arg1: boolean): com.ibm.lang.management.ExtendedThreadInfo[]
}

            }
        }
    }
}
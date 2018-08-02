declare namespace javax {
    namespace management {
        namespace monitor {
            class Monitor$DaemonThreadFactory implements java.util.concurrent.ThreadFactory {
                public constructor(arg0: java.lang.String | string)
                public constructor(arg0: java.lang.String | string, arg1: java.lang.ThreadGroup | java.lang.ThreadGroup$$Lambda)
                public getThreadGroup(): java.lang.ThreadGroup
                public newThread(arg0: java.lang.Runnable | java.lang.Runnable$$Lambda): java.lang.Thread
                public static class: java.lang.Class<any>
            }
            class Monitor$DaemonThreadFactory$$Lambda implements java.util.concurrent.ThreadFactory {
                public constructor(arg0: java.lang.String | string)
            }
        }
    }
}
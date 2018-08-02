declare namespace java {
    namespace util {
        namespace concurrent {
interface RejectedExecutionHandler {
    rejectedExecution(arg0: java.lang.Runnable | java.lang.Runnable$$Lambda, arg1: java.util.concurrent.ThreadPoolExecutor): void
}

interface RejectedExecutionHandler$$Lambda {
    (arg0: java.lang.Runnable | java.lang.Runnable$$Lambda, arg1: java.util.concurrent.ThreadPoolExecutor): void
}

        }
    }
}
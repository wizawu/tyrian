declare namespace java {
    namespace util {
        namespace concurrent {
            interface Delayed extends java.lang.Comparable<java.util.concurrent.Delayed> {
                getDelay(arg0: java.util.concurrent.TimeUnit): long
            }
            interface Delayed$$Lambda extends java.lang.Comparable<java.util.concurrent.Delayed> {
                (arg0: java.util.concurrent.TimeUnit): long
            }
        }
    }
}
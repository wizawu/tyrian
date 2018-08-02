declare namespace java {
    namespace util {
        namespace concurrent {
            class CountDownLatch {
                public constructor(arg0: int)
                public await(): void
                public await(arg0: long, arg1: java.util.concurrent.TimeUnit): boolean
                public countDown(): void
                public getCount(): long
                public toString(): string
                public static class: java.lang.Class<any>
            }
        }
    }
}
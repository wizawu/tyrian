declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace spi {
                    namespace orbutil {
                        namespace threadpool {
interface Work {
    doWork(): void
    setEnqueueTime(arg0: long): void
    getEnqueueTime(): long
    getName(): string
}

                        }
                    }
                }
            }
        }
    }
}
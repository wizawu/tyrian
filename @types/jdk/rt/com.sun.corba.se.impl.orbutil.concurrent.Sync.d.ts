declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace impl {
                    namespace orbutil {
                        namespace concurrent {
interface Sync {
    ONE_SECOND: long
    ONE_MINUTE: long
    ONE_HOUR: long
    ONE_DAY: long
    ONE_WEEK: long
    ONE_YEAR: long
    ONE_CENTURY: long
    acquire(): void
    attempt(arg0: long): boolean
    release(): void
}

                        }
                    }
                }
            }
        }
    }
}
declare namespace java {
    namespace sql {
        interface Wrapper {
            unwrap<T>(arg0: java.lang.Class<T>): T
            isWrapperFor<T>(arg0: java.lang.Class<any>): boolean
        }
    }
}
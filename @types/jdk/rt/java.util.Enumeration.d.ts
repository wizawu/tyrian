declare namespace java {
    namespace util {
        interface Enumeration<E> {
            hasMoreElements(): boolean
            nextElement(): E
        }
    }
}
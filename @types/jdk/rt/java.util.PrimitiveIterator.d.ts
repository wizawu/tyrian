declare namespace java {
    namespace util {
        interface PrimitiveIterator<T, T_CONS> extends java.util.Iterator<T> {
            forEachRemaining(arg0: T_CONS): void
        }
        interface PrimitiveIterator$$Lambda<T, T_CONS> extends java.util.Iterator<T> {
            (arg0: T_CONS): void
        }
    }
}
declare namespace javax {
    namespace imageio {
        namespace spi {
            class FilterIterator<T> implements java.util.Iterator<T> {
                public constructor(arg0: java.util.Iterator<T>, arg1: javax.imageio.spi.ServiceRegistry$Filter | javax.imageio.spi.ServiceRegistry$Filter$$Lambda)
                public hasNext(): boolean
                public next(): T
                public remove(): void
                public static class: java.lang.Class<any>
            }
        }
    }
}
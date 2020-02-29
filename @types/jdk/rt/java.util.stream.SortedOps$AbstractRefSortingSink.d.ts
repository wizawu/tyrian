declare namespace java {
    namespace util {
        namespace stream {
            abstract class SortedOps$AbstractRefSortingSink<T> extends java.util.stream.Sink$ChainedReference<T, T> {
                protected readonly comparator: java.util.Comparator<T>
                protected cancellationWasRequested: boolean
                public cancellationRequested(): boolean
                public static class: java.lang.Class<any>
            }
        }
    }
}
declare namespace java {
    namespace util {
        namespace stream {
            class ReduceOps {
                public static makeRef<T, U>(arg0: U, arg1: java.util.function$.BiFunction<U, T, U>, arg2: java.util.function$.BinaryOperator<U>): java.util.stream.TerminalOp<T, U>
                public static makeRef<T>(arg0: java.util.function$.BinaryOperator<T>): java.util.stream.TerminalOp<T, java.util.Optional<T>>
                public static makeRef<T, I>(arg0: java.util.stream.Collector<T, I, any>): java.util.stream.TerminalOp<T, I>
                public static makeRef<T, R>(arg0: java.util.function$.Supplier<R> | java.util.function$.Supplier$$Lambda<R>, arg1: java.util.function$.BiConsumer<R, T>, arg2: java.util.function$.BiConsumer<R, R>): java.util.stream.TerminalOp<T, R>
                public static makeInt<T, R>(arg0: int, arg1: java.util.function$.IntBinaryOperator | java.util.function$.IntBinaryOperator$$Lambda): java.util.stream.TerminalOp<java.lang.Integer, java.lang.Integer>
                public static makeInt<T, R>(arg0: java.util.function$.IntBinaryOperator | java.util.function$.IntBinaryOperator$$Lambda): java.util.stream.TerminalOp<java.lang.Integer, java.util.OptionalInt>
                public static makeInt<R>(arg0: java.util.function$.Supplier<R> | java.util.function$.Supplier$$Lambda<R>, arg1: java.util.function$.ObjIntConsumer<R> | java.util.function$.ObjIntConsumer$$Lambda<R>, arg2: java.util.function$.BinaryOperator<R>): java.util.stream.TerminalOp<java.lang.Integer, R>
                public static makeLong<R>(arg0: long, arg1: java.util.function$.LongBinaryOperator | java.util.function$.LongBinaryOperator$$Lambda): java.util.stream.TerminalOp<java.lang.Long, java.lang.Long>
                public static makeLong<R>(arg0: java.util.function$.LongBinaryOperator | java.util.function$.LongBinaryOperator$$Lambda): java.util.stream.TerminalOp<java.lang.Long, java.util.OptionalLong>
                public static makeLong<R>(arg0: java.util.function$.Supplier<R> | java.util.function$.Supplier$$Lambda<R>, arg1: java.util.function$.ObjLongConsumer<R> | java.util.function$.ObjLongConsumer$$Lambda<R>, arg2: java.util.function$.BinaryOperator<R>): java.util.stream.TerminalOp<java.lang.Long, R>
                public static makeDouble<R>(arg0: double, arg1: java.util.function$.DoubleBinaryOperator | java.util.function$.DoubleBinaryOperator$$Lambda): java.util.stream.TerminalOp<java.lang.Double, java.lang.Double>
                public static makeDouble<R>(arg0: java.util.function$.DoubleBinaryOperator | java.util.function$.DoubleBinaryOperator$$Lambda): java.util.stream.TerminalOp<java.lang.Double, java.util.OptionalDouble>
                public static makeDouble<R>(arg0: java.util.function$.Supplier<R> | java.util.function$.Supplier$$Lambda<R>, arg1: java.util.function$.ObjDoubleConsumer<R> | java.util.function$.ObjDoubleConsumer$$Lambda<R>, arg2: java.util.function$.BinaryOperator<R>): java.util.stream.TerminalOp<java.lang.Double, R>
                public static class: java.lang.Class<any>
            }
        }
    }
}
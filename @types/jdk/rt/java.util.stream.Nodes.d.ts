declare namespace java {
    namespace util {
        namespace stream {
class Nodes {
    public static collect<P_IN, P_OUT>(arg0: java.util.stream.PipelineHelper<P_OUT>, arg1: java.util.Spliterator<P_IN>, arg2: boolean, arg3: java.util.function$.IntFunction<P_OUT[]> | java.util.function$.IntFunction$$Lambda<P_OUT[]>): java.util.stream.Node<P_OUT>
    public static collectInt<P_IN>(arg0: java.util.stream.PipelineHelper<java.lang.Integer>, arg1: java.util.Spliterator<P_IN>, arg2: boolean): java.util.stream.Node$OfInt
    public static collectLong<P_IN>(arg0: java.util.stream.PipelineHelper<java.lang.Long>, arg1: java.util.Spliterator<P_IN>, arg2: boolean): java.util.stream.Node$OfLong
    public static collectDouble<P_IN>(arg0: java.util.stream.PipelineHelper<java.lang.Double>, arg1: java.util.Spliterator<P_IN>, arg2: boolean): java.util.stream.Node$OfDouble
    public static flatten<T>(arg0: java.util.stream.Node<T>, arg1: java.util.function$.IntFunction<T[]> | java.util.function$.IntFunction$$Lambda<T[]>): java.util.stream.Node<T>
    public static flattenInt(arg0: java.util.stream.Node$OfInt): java.util.stream.Node$OfInt
    public static flattenLong(arg0: java.util.stream.Node$OfLong): java.util.stream.Node$OfLong
    public static flattenDouble(arg0: java.util.stream.Node$OfDouble): java.util.stream.Node$OfDouble
    public static class: java.lang.Class<any>
}

        }
    }
}
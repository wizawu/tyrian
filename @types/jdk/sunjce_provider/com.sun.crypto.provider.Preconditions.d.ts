declare namespace com {
    namespace sun {
        namespace crypto {
            namespace provider {
                class Preconditions {
                    public constructor()
                    public static outOfBoundsExceptionFormatter<X extends java.lang.RuntimeException>(arg0: java.util.function$.Function<java.lang.String, X>): java.util.function$.BiFunction<java.lang.String, java.util.List<java.lang.Integer>, X>
                    public static checkIndex<X extends java.lang.RuntimeException>(arg0: int, arg1: int, arg2: java.util.function$.BiFunction<java.lang.String, java.util.List<java.lang.Integer>, X>): int
                    public static checkFromToIndex<X extends java.lang.RuntimeException>(arg0: int, arg1: int, arg2: int, arg3: java.util.function$.BiFunction<java.lang.String, java.util.List<java.lang.Integer>, X>): int
                    public static checkFromIndexSize<X extends java.lang.RuntimeException>(arg0: int, arg1: int, arg2: int, arg3: java.util.function$.BiFunction<java.lang.String, java.util.List<java.lang.Integer>, X>): int
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}
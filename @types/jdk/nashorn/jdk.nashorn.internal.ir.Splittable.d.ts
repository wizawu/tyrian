declare namespace jdk {
    namespace nashorn {
        namespace internal {
            namespace ir {
                interface Splittable {
                    getSplitRanges(): java.util.List<jdk.nashorn.internal.ir.Splittable$SplitRange>
                }
                interface Splittable$$Lambda {
                    (): java.util.List<jdk.nashorn.internal.ir.Splittable$SplitRange>
                }
            }
        }
    }
}
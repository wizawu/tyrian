declare namespace sun {
    namespace font {
        class LayoutPathImpl$SegmentPathBuilder {
            public constructor()
            public reset(arg0: int): void
            public build(arg0: sun.font.LayoutPathImpl$EndType, ...arg1: double[]): sun.font.LayoutPathImpl$SegmentPath
            public moveTo(arg0: double, arg1: double): void
            public lineTo(arg0: double, arg1: double): void
            public complete(): sun.font.LayoutPathImpl$SegmentPath
            public complete(arg0: sun.font.LayoutPathImpl$EndType): sun.font.LayoutPathImpl$SegmentPath
            public static class: java.lang.Class<any>
        }
    }
}
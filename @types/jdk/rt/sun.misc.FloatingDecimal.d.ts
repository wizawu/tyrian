declare namespace sun {
    namespace misc {
        class FloatingDecimal {
            public constructor()
            public static toJavaFormatString(arg0: double): string
            public static toJavaFormatString(arg0: float): string
            public static appendTo(arg0: double, arg1: java.lang.Appendable): void
            public static appendTo(arg0: float, arg1: java.lang.Appendable): void
            public static parseDouble(arg0: java.lang.String | string): double
            public static parseFloat(arg0: java.lang.String | string): float
            public static getBinaryToASCIIConverter(arg0: double): sun.misc.FloatingDecimal$BinaryToASCIIConverter
            public static class: java.lang.Class<any>
        }
    }
}
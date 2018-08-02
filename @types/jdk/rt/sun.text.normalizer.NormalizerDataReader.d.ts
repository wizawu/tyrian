declare namespace sun {
    namespace text {
        namespace normalizer {
            class NormalizerDataReader implements sun.text.normalizer.ICUBinary$Authenticate {
                protected constructor(arg0: java.io.InputStream)
                protected readIndexes(arg0: int): int[]
                protected read(arg0: byte[], arg1: byte[], arg2: byte[], arg3: char[], arg4: char[]): void
                public getDataFormatVersion(): byte[]
                public isDataVersionAcceptable(arg0: byte[]): boolean
                public getUnicodeVersion(): byte[]
                public static class: java.lang.Class<any>
            }
            class NormalizerDataReader$$Lambda implements sun.text.normalizer.ICUBinary$Authenticate {
                protected constructor(arg0: java.io.InputStream)
            }
        }
    }
}
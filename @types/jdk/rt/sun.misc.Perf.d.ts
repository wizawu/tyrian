declare namespace sun {
    namespace misc {
        class Perf {
            public static getPerf(): sun.misc.Perf
            public attach(arg0: int, arg1: java.lang.String | string): java.nio.ByteBuffer
            public attach(arg0: java.lang.String | string, arg1: int, arg2: java.lang.String | string): java.nio.ByteBuffer
            public createLong(arg0: java.lang.String | string, arg1: int, arg2: int, arg3: long): java.nio.ByteBuffer
            public createString(arg0: java.lang.String | string, arg1: int, arg2: int, arg3: java.lang.String | string, arg4: int): java.nio.ByteBuffer
            public createString(arg0: java.lang.String | string, arg1: int, arg2: int, arg3: java.lang.String | string): java.nio.ByteBuffer
            public createByteArray(arg0: java.lang.String | string, arg1: int, arg2: int, arg3: byte[], arg4: int): java.nio.ByteBuffer
            public highResCounter(): long
            public highResFrequency(): long
            public static class: java.lang.Class<any>
        }
    }
}
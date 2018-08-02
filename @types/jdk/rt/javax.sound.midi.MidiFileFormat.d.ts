declare namespace javax {
    namespace sound {
        namespace midi {
            class MidiFileFormat {
                public static UNKNOWN_LENGTH: int
                protected type: int
                protected divisionType: float
                protected resolution: int
                protected byteLength: int
                protected microsecondLength: long
                public constructor(arg0: int, arg1: float, arg2: int, arg3: int, arg4: long)
                public constructor(arg0: int, arg1: float, arg2: int, arg3: int, arg4: long, arg5: java.util.Map<java.lang.String, java.lang.Object>)
                public getType(): int
                public getDivisionType(): float
                public getResolution(): int
                public getByteLength(): int
                public getMicrosecondLength(): long
                public properties(): java.util.Map<java.lang.String, java.lang.Object>
                public getProperty(arg0: java.lang.String | string): java.lang.Object
                public static class: java.lang.Class<any>
            }
        }
    }
}
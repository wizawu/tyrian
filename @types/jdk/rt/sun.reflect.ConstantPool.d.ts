declare namespace sun {
    namespace reflect {
        class ConstantPool {
            public constructor()
            public getSize(): int
            public getClassAt(arg0: int): java.lang.Class<any>
            public getClassAtIfLoaded(arg0: int): java.lang.Class<any>
            public getMethodAt(arg0: int): java.lang.reflect.Member
            public getMethodAtIfLoaded(arg0: int): java.lang.reflect.Member
            public getFieldAt(arg0: int): java.lang.reflect.Field
            public getFieldAtIfLoaded(arg0: int): java.lang.reflect.Field
            public getMemberRefInfoAt(arg0: int): java.lang.String[]
            public getIntAt(arg0: int): int
            public getLongAt(arg0: int): long
            public getFloatAt(arg0: int): float
            public getDoubleAt(arg0: int): double
            public getStringAt(arg0: int): string
            public getUTF8At(arg0: int): string
            public static class: java.lang.Class<any>
        }
    }
}
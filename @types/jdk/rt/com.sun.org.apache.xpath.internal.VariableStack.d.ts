declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xpath {
                    namespace internal {
                        class VariableStack implements java.lang.Cloneable {
                            public static readonly CLEARLIMITATION: int
                            public constructor()
                            public clone(): java.lang.Object
                            public elementAt(arg0: int): com.sun.org.apache.xpath.internal.objects.XObject
                            public size(): int
                            public reset(): void
                            public setStackFrame(arg0: int): void
                            public getStackFrame(): int
                            public link(arg0: int): int
                            public unlink(): void
                            public unlink(arg0: int): void
                            public setLocalVariable(arg0: int, arg1: com.sun.org.apache.xpath.internal.objects.XObject): void
                            public setLocalVariable(arg0: int, arg1: com.sun.org.apache.xpath.internal.objects.XObject, arg2: int): void
                            public getLocalVariable(arg0: com.sun.org.apache.xpath.internal.XPathContext, arg1: int): com.sun.org.apache.xpath.internal.objects.XObject
                            public getLocalVariable(arg0: int, arg1: int): com.sun.org.apache.xpath.internal.objects.XObject
                            public getLocalVariable(arg0: com.sun.org.apache.xpath.internal.XPathContext, arg1: int, arg2: boolean): com.sun.org.apache.xpath.internal.objects.XObject
                            public isLocalSet(arg0: int): boolean
                            public clearLocalSlots(arg0: int, arg1: int): void
                            public setGlobalVariable(arg0: int, arg1: com.sun.org.apache.xpath.internal.objects.XObject): void
                            public getGlobalVariable(arg0: com.sun.org.apache.xpath.internal.XPathContext, arg1: int): com.sun.org.apache.xpath.internal.objects.XObject
                            public getGlobalVariable(arg0: com.sun.org.apache.xpath.internal.XPathContext, arg1: int, arg2: boolean): com.sun.org.apache.xpath.internal.objects.XObject
                            public getVariableOrParam(arg0: com.sun.org.apache.xpath.internal.XPathContext, arg1: com.sun.org.apache.xml.internal.utils.QName): com.sun.org.apache.xpath.internal.objects.XObject
                            public static class: java.lang.Class<any>
                        }
                    }
                }
            }
        }
    }
}
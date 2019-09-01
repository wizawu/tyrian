declare namespace java {
    namespace lang {
        namespace invoke {
            class MemberName$Factory {
                public resolveOrFail<NoSuchMemberException extends java.lang.ReflectiveOperationException>(arg0: byte, arg1: java.lang.invoke.MemberName, arg2: java.lang.Class<any>, arg3: java.lang.Class<NoSuchMemberException>): java.lang.invoke.MemberName
                public resolveOrNull<NoSuchMemberException extends java.lang.ReflectiveOperationException>(arg0: byte, arg1: java.lang.invoke.MemberName, arg2: java.lang.Class<any>): java.lang.invoke.MemberName
                public getMethods<NoSuchMemberException extends java.lang.ReflectiveOperationException>(arg0: java.lang.Class<any>, arg1: boolean, arg2: java.lang.Class<any>): java.util.List<java.lang.invoke.MemberName>
                public getMethods<NoSuchMemberException extends java.lang.ReflectiveOperationException>(arg0: java.lang.Class<any>, arg1: boolean, arg2: java.lang.String | string, arg3: java.lang.invoke.MethodType, arg4: java.lang.Class<any>): java.util.List<java.lang.invoke.MemberName>
                public getConstructors<NoSuchMemberException extends java.lang.ReflectiveOperationException>(arg0: java.lang.Class<any>, arg1: java.lang.Class<any>): java.util.List<java.lang.invoke.MemberName>
                public getFields<NoSuchMemberException extends java.lang.ReflectiveOperationException>(arg0: java.lang.Class<any>, arg1: boolean, arg2: java.lang.Class<any>): java.util.List<java.lang.invoke.MemberName>
                public getFields<NoSuchMemberException extends java.lang.ReflectiveOperationException>(arg0: java.lang.Class<any>, arg1: boolean, arg2: java.lang.String | string, arg3: java.lang.Class<any>, arg4: java.lang.Class<any>): java.util.List<java.lang.invoke.MemberName>
                public getNestedTypes<NoSuchMemberException extends java.lang.ReflectiveOperationException>(arg0: java.lang.Class<any>, arg1: boolean, arg2: java.lang.Class<any>): java.util.List<java.lang.invoke.MemberName>
                public static class: java.lang.Class<any>
            }
        }
    }
}
declare namespace jdk {
    namespace nashorn {
        namespace internal {
            namespace runtime {
                class ECMAErrors {
                    public static asEcmaException(arg0: jdk.nashorn.internal.runtime.ParserException): jdk.nashorn.internal.runtime.ECMAException
                    public static asEcmaException(arg0: jdk.nashorn.internal.objects.Global, arg1: jdk.nashorn.internal.runtime.ParserException): jdk.nashorn.internal.runtime.ECMAException
                    public static syntaxError(arg0: java.lang.String | string, ...arg1: java.lang.String[]): jdk.nashorn.internal.runtime.ECMAException
                    public static syntaxError(arg0: jdk.nashorn.internal.objects.Global, arg1: java.lang.String | string, ...arg2: java.lang.String[]): jdk.nashorn.internal.runtime.ECMAException
                    public static syntaxError(arg0: java.lang.Throwable, arg1: java.lang.String | string, ...arg2: java.lang.String[]): jdk.nashorn.internal.runtime.ECMAException
                    public static syntaxError(arg0: jdk.nashorn.internal.objects.Global, arg1: java.lang.Throwable, arg2: java.lang.String | string, ...arg3: java.lang.String[]): jdk.nashorn.internal.runtime.ECMAException
                    public static typeError(arg0: java.lang.String | string, ...arg1: java.lang.String[]): jdk.nashorn.internal.runtime.ECMAException
                    public static typeError(arg0: jdk.nashorn.internal.objects.Global, arg1: java.lang.String | string, ...arg2: java.lang.String[]): jdk.nashorn.internal.runtime.ECMAException
                    public static typeError(arg0: java.lang.Throwable, arg1: java.lang.String | string, ...arg2: java.lang.String[]): jdk.nashorn.internal.runtime.ECMAException
                    public static typeError(arg0: jdk.nashorn.internal.objects.Global, arg1: java.lang.Throwable, arg2: java.lang.String | string, ...arg3: java.lang.String[]): jdk.nashorn.internal.runtime.ECMAException
                    public static rangeError(arg0: java.lang.String | string, ...arg1: java.lang.String[]): jdk.nashorn.internal.runtime.ECMAException
                    public static rangeError(arg0: jdk.nashorn.internal.objects.Global, arg1: java.lang.String | string, ...arg2: java.lang.String[]): jdk.nashorn.internal.runtime.ECMAException
                    public static rangeError(arg0: java.lang.Throwable, arg1: java.lang.String | string, ...arg2: java.lang.String[]): jdk.nashorn.internal.runtime.ECMAException
                    public static rangeError(arg0: jdk.nashorn.internal.objects.Global, arg1: java.lang.Throwable, arg2: java.lang.String | string, ...arg3: java.lang.String[]): jdk.nashorn.internal.runtime.ECMAException
                    public static referenceError(arg0: java.lang.String | string, ...arg1: java.lang.String[]): jdk.nashorn.internal.runtime.ECMAException
                    public static referenceError(arg0: jdk.nashorn.internal.objects.Global, arg1: java.lang.String | string, ...arg2: java.lang.String[]): jdk.nashorn.internal.runtime.ECMAException
                    public static referenceError(arg0: java.lang.Throwable, arg1: java.lang.String | string, ...arg2: java.lang.String[]): jdk.nashorn.internal.runtime.ECMAException
                    public static referenceError(arg0: jdk.nashorn.internal.objects.Global, arg1: java.lang.Throwable, arg2: java.lang.String | string, ...arg3: java.lang.String[]): jdk.nashorn.internal.runtime.ECMAException
                    public static uriError(arg0: java.lang.String | string, ...arg1: java.lang.String[]): jdk.nashorn.internal.runtime.ECMAException
                    public static uriError(arg0: jdk.nashorn.internal.objects.Global, arg1: java.lang.String | string, ...arg2: java.lang.String[]): jdk.nashorn.internal.runtime.ECMAException
                    public static uriError(arg0: java.lang.Throwable, arg1: java.lang.String | string, ...arg2: java.lang.String[]): jdk.nashorn.internal.runtime.ECMAException
                    public static uriError(arg0: jdk.nashorn.internal.objects.Global, arg1: java.lang.Throwable, arg2: java.lang.String | string, ...arg3: java.lang.String[]): jdk.nashorn.internal.runtime.ECMAException
                    public static getMessage(arg0: java.lang.String | string, ...arg1: java.lang.String[]): string
                    public static isScriptFrame(arg0: java.lang.StackTraceElement): boolean
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}
declare namespace com {
    namespace sun {
        namespace beans {
            namespace decoder {
                abstract class AccessorElementHandler extends com.sun.beans.decoder.ElementHandler {
                    public addAttribute(arg0: java.lang.String | string, arg1: java.lang.String | string): void
                    protected addArgument(arg0: java.lang.Object): void
                    protected getValueObject(): com.sun.beans.decoder.ValueObject
                    protected abstract getValue(arg0: java.lang.String | string): java.lang.Object
                    protected abstract setValue(arg0: java.lang.String | string, arg1: java.lang.Object): void
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}
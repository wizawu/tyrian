declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace spi {
                        namespace db {
class JAXBWrapperAccessor extends com.sun.xml.internal.ws.spi.db.WrapperAccessor {
    protected contentClass: java.lang.Class<any>
    protected elementDeclaredTypes: java.util.HashMap<java.lang.Object, java.lang.Class>
    public constructor(arg0: java.lang.Class<any>)
    protected static getAllFields(arg0: java.lang.Class<any>): java.util.List<java.lang.reflect.Field>
    protected static getDeclaredFields(arg0: java.lang.Class<any>): java.lang.reflect.Field[]
    protected static createPropertyGetter(arg0: java.lang.reflect.Field, arg1: java.lang.reflect.Method): com.sun.xml.internal.ws.spi.db.PropertyGetter
    protected static createPropertySetter(arg0: java.lang.reflect.Field, arg1: java.lang.reflect.Method): com.sun.xml.internal.ws.spi.db.PropertySetter
    public getPropertyAccessor(arg0: java.lang.String | string, arg1: java.lang.String | string): com.sun.xml.internal.ws.spi.db.PropertyAccessor
    public static class: java.lang.Class<any>
}

                        }
                    }
                }
            }
        }
    }
}
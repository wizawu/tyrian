declare namespace com {
    namespace sun {
        namespace beans {
            namespace decoder {
class DocumentHandler extends org.xml.sax.helpers.DefaultHandler {
    public constructor()
    public getClassLoader(): java.lang.ClassLoader
    public setClassLoader(arg0: java.lang.ClassLoader): void
    public getExceptionListener(): java.beans.ExceptionListener
    public setExceptionListener(arg0: java.beans.ExceptionListener | java.beans.ExceptionListener$$Lambda): void
    public getOwner(): java.lang.Object
    public setOwner(arg0: java.lang.Object): void
    public getElementHandler(arg0: java.lang.String | string): java.lang.Class<com.sun.beans.decoder.ElementHandler>
    public setElementHandler(arg0: java.lang.String | string, arg1: java.lang.Class<com.sun.beans.decoder.ElementHandler>): void
    public hasVariable(arg0: java.lang.String | string): boolean
    public getVariable(arg0: java.lang.String | string): java.lang.Object
    public setVariable(arg0: java.lang.String | string, arg1: java.lang.Object): void
    public getObjects(): java.lang.Object[]
    public resolveEntity(arg0: java.lang.String | string, arg1: java.lang.String | string): org.xml.sax.InputSource
    public startDocument(): void
    public startElement(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: org.xml.sax.Attributes): void
    public endElement(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string): void
    public characters(arg0: char[], arg1: int, arg2: int): void
    public handleException(arg0: java.lang.Exception): void
    public parse(arg0: org.xml.sax.InputSource): void
    public findClass(arg0: java.lang.String | string): java.lang.Class<any>
    public static class: java.lang.Class<any>
}

            }
        }
    }
}
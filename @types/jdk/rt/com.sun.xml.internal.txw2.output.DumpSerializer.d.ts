declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace txw2 {
                    namespace output {
class DumpSerializer implements com.sun.xml.internal.txw2.output.XmlSerializer {
    public constructor(arg0: java.io.PrintStream)
    public beginStartTag(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string): void
    public writeAttribute(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: java.lang.StringBuilder): void
    public writeXmlns(arg0: java.lang.String | string, arg1: java.lang.String | string): void
    public endStartTag(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string): void
    public endTag(): void
    public text(arg0: java.lang.StringBuilder): void
    public cdata(arg0: java.lang.StringBuilder): void
    public comment(arg0: java.lang.StringBuilder): void
    public startDocument(): void
    public endDocument(): void
    public flush(): void
    public static class: java.lang.Class<any>
}

                    }
                }
            }
        }
    }
}
declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace bind {
                    namespace v2 {
                        namespace runtime {
                            namespace unmarshaller {
class Base64Data extends com.sun.xml.internal.bind.v2.runtime.output.Pcdata {
    public constructor()
    public set(arg0: byte[], arg1: int, arg2: java.lang.String | string): void
    public set(arg0: byte[], arg1: java.lang.String | string): void
    public set(arg0: javax.activation.DataHandler): void
    public getDataHandler(): javax.activation.DataHandler
    public getExact(): byte[]
    public getInputStream(): java.io.InputStream
    public hasData(): boolean
    public get(): byte[]
    public getDataLen(): int
    public getMimeType(): string
    public length(): int
    public charAt(arg0: int): char
    public subSequence(arg0: int, arg1: int): java.lang.CharSequence
    public toString(): string
    public writeTo(arg0: char[], arg1: int): void
    public writeTo(arg0: com.sun.xml.internal.bind.v2.runtime.output.UTF8XmlOutput): void
    public writeTo(arg0: javax.xml.stream.XMLStreamWriter): void
    public static class: java.lang.Class<any>
}

                            }
                        }
                    }
                }
            }
        }
    }
}
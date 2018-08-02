declare namespace javax {
    namespace xml {
        namespace bind {
            namespace helpers {
class ValidationEventImpl implements javax.xml.bind.ValidationEvent {
    public constructor(arg0: int, arg1: java.lang.String | string, arg2: javax.xml.bind.ValidationEventLocator)
    public constructor(arg0: int, arg1: java.lang.String | string, arg2: javax.xml.bind.ValidationEventLocator, arg3: java.lang.Throwable)
    public getSeverity(): int
    public setSeverity(arg0: int): void
    public getMessage(): string
    public setMessage(arg0: java.lang.String | string): void
    public getLinkedException(): java.lang.Throwable
    public setLinkedException(arg0: java.lang.Throwable): void
    public getLocator(): javax.xml.bind.ValidationEventLocator
    public setLocator(arg0: javax.xml.bind.ValidationEventLocator): void
    public toString(): string
    public static class: java.lang.Class<any>
}

            }
        }
    }
}
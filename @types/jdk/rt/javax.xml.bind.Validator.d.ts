declare namespace javax {
    namespace xml {
        namespace bind {
interface Validator {
    setEventHandler(arg0: javax.xml.bind.ValidationEventHandler | javax.xml.bind.ValidationEventHandler$$Lambda): void
    getEventHandler(): javax.xml.bind.ValidationEventHandler
    validate(arg0: java.lang.Object): boolean
    validateRoot(arg0: java.lang.Object): boolean
    setProperty(arg0: java.lang.String | string, arg1: java.lang.Object): void
    getProperty(arg0: java.lang.String | string): java.lang.Object
}

        }
    }
}
declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xml {
                    namespace internal {
                        namespace serializer {
interface SerializerTrace {
    EVENTTYPE_STARTDOCUMENT: int
    EVENTTYPE_ENDDOCUMENT: int
    EVENTTYPE_STARTELEMENT: int
    EVENTTYPE_ENDELEMENT: int
    EVENTTYPE_CHARACTERS: int
    EVENTTYPE_IGNORABLEWHITESPACE: int
    EVENTTYPE_PI: int
    EVENTTYPE_COMMENT: int
    EVENTTYPE_ENTITYREF: int
    EVENTTYPE_CDATA: int
    EVENTTYPE_OUTPUT_PSEUDO_CHARACTERS: int
    EVENTTYPE_OUTPUT_CHARACTERS: int
    hasTraceListeners(): boolean
    fireGenerateEvent(arg0: int): void
    fireGenerateEvent(arg0: int, arg1: java.lang.String | string, arg2: org.xml.sax.Attributes): void
    fireGenerateEvent(arg0: int, arg1: char[], arg2: int, arg3: int): void
    fireGenerateEvent(arg0: int, arg1: java.lang.String | string, arg2: java.lang.String | string): void
    fireGenerateEvent(arg0: int, arg1: java.lang.String | string): void
}

                        }
                    }
                }
            }
        }
    }
}
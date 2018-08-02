declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace org {
                    namespace jvnet {
                        namespace fastinfoset {
interface FastInfosetParser {
    STRING_INTERNING_PROPERTY: string
    BUFFER_SIZE_PROPERTY: string
    REGISTERED_ENCODING_ALGORITHMS_PROPERTY: string
    EXTERNAL_VOCABULARIES_PROPERTY: string
    FORCE_STREAM_CLOSE_PROPERTY: string
    setStringInterning(arg0: boolean): void
    getStringInterning(): boolean
    setBufferSize(arg0: int): void
    getBufferSize(): int
    setRegisteredEncodingAlgorithms(arg0: java.util.Map): void
    getRegisteredEncodingAlgorithms(): java.util.Map
    setExternalVocabularies(arg0: java.util.Map): void
    getExternalVocabularies(): java.util.Map
    setParseFragments(arg0: boolean): void
    getParseFragments(): boolean
    setForceStreamClose(arg0: boolean): void
    getForceStreamClose(): boolean
}

                        }
                    }
                }
            }
        }
    }
}
declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace org {
                    namespace jvnet {
                        namespace fastinfoset {
                            interface FastInfosetSerializer {
                                IGNORE_DTD_FEATURE: string
                                IGNORE_COMMENTS_FEATURE: string
                                IGNORE_PROCESSING_INSTRUCTIONS_FEATURE: string
                                IGNORE_WHITE_SPACE_TEXT_CONTENT_FEATURE: string
                                BUFFER_SIZE_PROPERTY: string
                                REGISTERED_ENCODING_ALGORITHMS_PROPERTY: string
                                EXTERNAL_VOCABULARIES_PROPERTY: string
                                MIN_CHARACTER_CONTENT_CHUNK_SIZE: int
                                MAX_CHARACTER_CONTENT_CHUNK_SIZE: int
                                CHARACTER_CONTENT_CHUNK_MAP_MEMORY_CONSTRAINT: int
                                MIN_ATTRIBUTE_VALUE_SIZE: int
                                MAX_ATTRIBUTE_VALUE_SIZE: int
                                ATTRIBUTE_VALUE_MAP_MEMORY_CONSTRAINT: int
                                UTF_8: string
                                UTF_16BE: string
                                setIgnoreDTD(arg0: boolean): void
                                getIgnoreDTD(): boolean
                                setIgnoreComments(arg0: boolean): void
                                getIgnoreComments(): boolean
                                setIgnoreProcesingInstructions(arg0: boolean): void
                                getIgnoreProcesingInstructions(): boolean
                                setIgnoreWhiteSpaceTextContent(arg0: boolean): void
                                getIgnoreWhiteSpaceTextContent(): boolean
                                setCharacterEncodingScheme(arg0: java.lang.String | string): void
                                getCharacterEncodingScheme(): string
                                setRegisteredEncodingAlgorithms(arg0: java.util.Map): void
                                getRegisteredEncodingAlgorithms(): java.util.Map
                                getMinCharacterContentChunkSize(): int
                                setMinCharacterContentChunkSize(arg0: int): void
                                getMaxCharacterContentChunkSize(): int
                                setMaxCharacterContentChunkSize(arg0: int): void
                                getCharacterContentChunkMapMemoryLimit(): int
                                setCharacterContentChunkMapMemoryLimit(arg0: int): void
                                getMinAttributeValueSize(): int
                                setMinAttributeValueSize(arg0: int): void
                                getMaxAttributeValueSize(): int
                                setMaxAttributeValueSize(arg0: int): void
                                getAttributeValueMapMemoryLimit(): int
                                setAttributeValueMapMemoryLimit(arg0: int): void
                                setExternalVocabulary(arg0: com.sun.xml.internal.org.jvnet.fastinfoset.ExternalVocabulary): void
                                setVocabularyApplicationData(arg0: com.sun.xml.internal.org.jvnet.fastinfoset.VocabularyApplicationData | com.sun.xml.internal.org.jvnet.fastinfoset.VocabularyApplicationData$$Lambda): void
                                getVocabularyApplicationData(): com.sun.xml.internal.org.jvnet.fastinfoset.VocabularyApplicationData
                                reset(): void
                                setOutputStream(arg0: java.io.OutputStream | java.io.OutputStream$$Lambda): void
                            }
                        }
                    }
                }
            }
        }
    }
}
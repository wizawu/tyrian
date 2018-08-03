declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xalan {
                    namespace internal {
                        namespace xsltc {
                            namespace compiler {
                                class XSLTC {
                                    public static FILE_OUTPUT: int
                                    public static JAR_OUTPUT: int
                                    public static BYTEARRAY_OUTPUT: int
                                    public static CLASSLOADER_OUTPUT: int
                                    public static BYTEARRAY_AND_FILE_OUTPUT: int
                                    public static BYTEARRAY_AND_JAR_OUTPUT: int
                                    public constructor(arg0: jdk.xml.internal.JdkXmlFeatures)
                                    public setSecureProcessing(arg0: boolean): void
                                    public isSecureProcessing(): boolean
                                    public getFeature(arg0: jdk.xml.internal.JdkXmlFeatures$XmlFeature): boolean
                                    public getProperty(arg0: java.lang.String | string): java.lang.Object
                                    public setProperty(arg0: java.lang.String | string, arg1: java.lang.Object): void
                                    public getParser(): com.sun.org.apache.xalan.internal.xsltc.compiler.Parser
                                    public setOutputType(arg0: int): void
                                    public getOutputProperties(): java.util.Properties
                                    public init(): void
                                    public getExternalExtensionFunctions(): java.util.Map<java.lang.String, java.lang.Class>
                                    public setSourceLoader(arg0: com.sun.org.apache.xalan.internal.xsltc.compiler.SourceLoader | com.sun.org.apache.xalan.internal.xsltc.compiler.SourceLoader$$Lambda): void
                                    public setTemplateInlining(arg0: boolean): void
                                    public getTemplateInlining(): boolean
                                    public setPIParameters(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string): void
                                    public compile(arg0: java.net.URL): boolean
                                    public compile(arg0: java.net.URL, arg1: java.lang.String | string): boolean
                                    public compile(arg0: java.io.InputStream, arg1: java.lang.String | string): boolean
                                    public compile(arg0: org.xml.sax.InputSource, arg1: java.lang.String | string): boolean
                                    public compile(arg0: java.util.Vector): boolean
                                    public getBytecodes(): byte[][]
                                    public compile(arg0: java.lang.String | string, arg1: org.xml.sax.InputSource, arg2: int): byte[][]
                                    public compile(arg0: java.lang.String | string, arg1: org.xml.sax.InputSource): byte[][]
                                    public setXMLReader(arg0: org.xml.sax.XMLReader): void
                                    public getXMLReader(): org.xml.sax.XMLReader
                                    public getErrors(): java.util.ArrayList<com.sun.org.apache.xalan.internal.xsltc.compiler.util.ErrorMsg>
                                    public getWarnings(): java.util.ArrayList<com.sun.org.apache.xalan.internal.xsltc.compiler.util.ErrorMsg>
                                    public printErrors(): void
                                    public printWarnings(): void
                                    protected setMultiDocument(arg0: boolean): void
                                    public isMultiDocument(): boolean
                                    protected setCallsNodeset(arg0: boolean): void
                                    public callsNodeset(): boolean
                                    protected setHasIdCall(arg0: boolean): void
                                    public hasIdCall(): boolean
                                    public setClassName(arg0: java.lang.String | string): void
                                    public getClassName(): string
                                    public setDestDirectory(arg0: java.lang.String | string): boolean
                                    public setPackageName(arg0: java.lang.String | string): void
                                    public setJarFileName(arg0: java.lang.String | string): void
                                    public getJarFileName(): string
                                    public setStylesheet(arg0: com.sun.org.apache.xalan.internal.xsltc.compiler.Stylesheet): void
                                    public getStylesheet(): com.sun.org.apache.xalan.internal.xsltc.compiler.Stylesheet
                                    public registerAttribute(arg0: com.sun.org.apache.xalan.internal.xsltc.compiler.QName): int
                                    public registerElement(arg0: com.sun.org.apache.xalan.internal.xsltc.compiler.QName): int
                                    public registerNamespacePrefix(arg0: com.sun.org.apache.xalan.internal.xsltc.compiler.QName): int
                                    public registerNamespace(arg0: java.lang.String | string): int
                                    public nextModeSerial(): int
                                    public nextStylesheetSerial(): int
                                    public nextStepPatternSerial(): int
                                    public getNumberFieldIndexes(): int[]
                                    public nextHelperClassSerial(): int
                                    public nextAttributeSetSerial(): int
                                    public getNamesIndex(): java.util.Vector
                                    public getNamespaceIndex(): java.util.Vector
                                    public getHelperClassName(): string
                                    public dumpClass(arg0: com.sun.org.apache.bcel.internal.classfile.JavaClass): void
                                    public outputToJar(): void
                                    public setDebug(arg0: boolean): void
                                    public debug(): boolean
                                    public getCharacterData(arg0: int): string
                                    public getCharacterDataCount(): int
                                    public addCharacterData(arg0: java.lang.String | string): int
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
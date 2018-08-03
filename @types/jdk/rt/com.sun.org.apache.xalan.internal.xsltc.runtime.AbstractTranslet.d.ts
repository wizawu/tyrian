declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xalan {
                    namespace internal {
                        namespace xsltc {
                            namespace runtime {
                                abstract class AbstractTranslet implements com.sun.org.apache.xalan.internal.xsltc.Translet {
                                    public _version: string
                                    public _method: string
                                    public _encoding: string
                                    public _omitHeader: boolean
                                    public _standalone: string
                                    public _isStandalone: boolean
                                    public _doctypePublic: string
                                    public _doctypeSystem: string
                                    public _indent: boolean
                                    public _mediaType: string
                                    public _cdata: java.util.Vector
                                    public _indentamount: int
                                    public static readonly FIRST_TRANSLET_VERSION: int
                                    public static readonly VER_SPLIT_NAMES_ARRAY: int
                                    public static readonly CURRENT_TRANSLET_VERSION: int
                                    protected transletVersion: int
                                    protected namesArray: java.lang.String[]
                                    protected urisArray: java.lang.String[]
                                    protected typesArray: int[]
                                    protected namespaceArray: java.lang.String[]
                                    protected _templates: javax.xml.transform.Templates
                                    protected _hasIdCall: boolean
                                    protected stringValueHandler: com.sun.org.apache.xalan.internal.xsltc.runtime.StringValueHandler
                                    protected pbase: int
                                    protected pframe: int
                                    protected paramsStack: java.util.ArrayList
                                    public _formatSymbols: java.util.Map<java.lang.String, java.text.DecimalFormat>
                                    protected _domImplementation: org.w3c.dom.DOMImplementation
                                    public constructor()
                                    public printInternalState(): void
                                    public makeDOMAdapter(arg0: com.sun.org.apache.xalan.internal.xsltc.DOM): com.sun.org.apache.xalan.internal.xsltc.dom.DOMAdapter
                                    public pushParamFrame(): void
                                    public popParamFrame(): void
                                    public addParameter(arg0: java.lang.String | string, arg1: java.lang.Object): java.lang.Object
                                    public addParameter(arg0: java.lang.String | string, arg1: java.lang.Object, arg2: boolean): java.lang.Object
                                    public clearParameters(): void
                                    public getParameter(arg0: java.lang.String | string): java.lang.Object
                                    public setMessageHandler(arg0: com.sun.org.apache.xalan.internal.xsltc.runtime.MessageHandler): void
                                    public displayMessage(arg0: java.lang.String | string): void
                                    public addDecimalFormat(arg0: java.lang.String | string, arg1: java.text.DecimalFormatSymbols): void
                                    public getDecimalFormat(arg0: java.lang.String | string): java.text.DecimalFormat
                                    public prepassDocument(arg0: com.sun.org.apache.xalan.internal.xsltc.DOM): void
                                    public postInitialization(): void
                                    public setIndexSize(arg0: int): void
                                    public createKeyIndex(): com.sun.org.apache.xalan.internal.xsltc.dom.KeyIndex
                                    public buildKeyIndex(arg0: java.lang.String | string, arg1: int, arg2: java.lang.String | string): void
                                    public buildKeyIndex(arg0: java.lang.String | string, arg1: com.sun.org.apache.xalan.internal.xsltc.DOM): void
                                    public getKeyIndex(arg0: java.lang.String | string): com.sun.org.apache.xalan.internal.xsltc.dom.KeyIndex
                                    public buildKeys(arg0: com.sun.org.apache.xalan.internal.xsltc.DOM, arg1: com.sun.org.apache.xml.internal.dtm.DTMAxisIterator, arg2: com.sun.org.apache.xml.internal.serializer.SerializationHandler, arg3: int): void
                                    public setKeyIndexDom(arg0: java.lang.String | string, arg1: com.sun.org.apache.xalan.internal.xsltc.DOM): void
                                    public setDOMCache(arg0: com.sun.org.apache.xalan.internal.xsltc.DOMCache | com.sun.org.apache.xalan.internal.xsltc.DOMCache$$Lambda): void
                                    public getDOMCache(): com.sun.org.apache.xalan.internal.xsltc.DOMCache
                                    public openOutputHandler(arg0: java.lang.String | string, arg1: boolean): com.sun.org.apache.xml.internal.serializer.SerializationHandler
                                    public openOutputHandler(arg0: java.lang.String | string): com.sun.org.apache.xml.internal.serializer.SerializationHandler
                                    public closeOutputHandler(arg0: com.sun.org.apache.xml.internal.serializer.SerializationHandler): void
                                    public abstract transform(arg0: com.sun.org.apache.xalan.internal.xsltc.DOM, arg1: com.sun.org.apache.xml.internal.dtm.DTMAxisIterator, arg2: com.sun.org.apache.xml.internal.serializer.SerializationHandler): void
                                    public transform(arg0: com.sun.org.apache.xalan.internal.xsltc.DOM, arg1: com.sun.org.apache.xml.internal.serializer.SerializationHandler): void
                                    public characters(arg0: java.lang.String | string, arg1: com.sun.org.apache.xml.internal.serializer.SerializationHandler): void
                                    public addCdataElement(arg0: java.lang.String | string): void
                                    protected transferOutputSettings(arg0: com.sun.org.apache.xml.internal.serializer.SerializationHandler): void
                                    public addAuxiliaryClass(arg0: java.lang.Class): void
                                    public setAuxiliaryClasses(arg0: java.util.Map<java.lang.String, java.lang.Class<any>>): void
                                    public getAuxiliaryClass(arg0: java.lang.String | string): java.lang.Class
                                    public getNamesArray(): java.lang.String[]
                                    public getUrisArray(): java.lang.String[]
                                    public getTypesArray(): int[]
                                    public getNamespaceArray(): java.lang.String[]
                                    public hasIdCall(): boolean
                                    public getTemplates(): javax.xml.transform.Templates
                                    public setTemplates(arg0: javax.xml.transform.Templates): void
                                    public overrideDefaultParser(): boolean
                                    public setOverrideDefaultParser(arg0: boolean): void
                                    public getAllowedProtocols(): string
                                    public setAllowedProtocols(arg0: java.lang.String | string): void
                                    public newDocument(arg0: java.lang.String | string, arg1: java.lang.String | string): org.w3c.dom.Document
                                    public static class: java.lang.Class<any>
                                }
                                interface AbstractTranslet$$Lambda implements com.sun.org.apache.xalan.internal.xsltc.Translet {
                                    (arg0: com.sun.org.apache.xalan.internal.xsltc.DOM, arg1: com.sun.org.apache.xml.internal.dtm.DTMAxisIterator, arg2: com.sun.org.apache.xml.internal.serializer.SerializationHandler): void
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
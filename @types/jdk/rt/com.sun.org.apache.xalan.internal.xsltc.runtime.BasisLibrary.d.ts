declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xalan {
                    namespace internal {
                        namespace xsltc {
                            namespace runtime {
                                class BasisLibrary {
                                    public static RUN_TIME_INTERNAL_ERR: string
                                    public static RUN_TIME_COPY_ERR: string
                                    public static DATA_CONVERSION_ERR: string
                                    public static EXTERNAL_FUNC_ERR: string
                                    public static EQUALITY_EXPR_ERR: string
                                    public static INVALID_ARGUMENT_ERR: string
                                    public static FORMAT_NUMBER_ERR: string
                                    public static ITERATOR_CLONE_ERR: string
                                    public static AXIS_SUPPORT_ERR: string
                                    public static TYPED_AXIS_SUPPORT_ERR: string
                                    public static STRAY_ATTRIBUTE_ERR: string
                                    public static STRAY_NAMESPACE_ERR: string
                                    public static NAMESPACE_PREFIX_ERR: string
                                    public static DOM_ADAPTER_INIT_ERR: string
                                    public static PARSER_DTD_SUPPORT_ERR: string
                                    public static NAMESPACES_SUPPORT_ERR: string
                                    public static CANT_RESOLVE_RELATIVE_URI_ERR: string
                                    public static UNSUPPORTED_XSL_ERR: string
                                    public static UNSUPPORTED_EXT_ERR: string
                                    public static UNKNOWN_TRANSLET_VERSION_ERR: string
                                    public static INVALID_QNAME_ERR: string
                                    public static INVALID_NCNAME_ERR: string
                                    public static UNALLOWED_EXTENSION_FUNCTION_ERR: string
                                    public static UNALLOWED_EXTENSION_ELEMENT_ERR: string
                                    public static ERROR_MESSAGES_KEY: string
                                    public constructor()
                                    public static countF(arg0: com.sun.org.apache.xml.internal.dtm.DTMAxisIterator): int
                                    public static positionF(arg0: com.sun.org.apache.xml.internal.dtm.DTMAxisIterator): int
                                    public static sumF(arg0: com.sun.org.apache.xml.internal.dtm.DTMAxisIterator, arg1: com.sun.org.apache.xalan.internal.xsltc.DOM): double
                                    public static stringF(arg0: int, arg1: com.sun.org.apache.xalan.internal.xsltc.DOM): string
                                    public static stringF(arg0: java.lang.Object, arg1: com.sun.org.apache.xalan.internal.xsltc.DOM): string
                                    public static stringF(arg0: java.lang.Object, arg1: int, arg2: com.sun.org.apache.xalan.internal.xsltc.DOM): string
                                    public static numberF(arg0: int, arg1: com.sun.org.apache.xalan.internal.xsltc.DOM): double
                                    public static numberF(arg0: java.lang.Object, arg1: com.sun.org.apache.xalan.internal.xsltc.DOM): double
                                    public static roundF(arg0: double): double
                                    public static booleanF(arg0: java.lang.Object): boolean
                                    public static substringF(arg0: java.lang.String | string, arg1: double): string
                                    public static substringF(arg0: java.lang.String | string, arg1: double, arg2: double): string
                                    public static substring_afterF(arg0: java.lang.String | string, arg1: java.lang.String | string): string
                                    public static substring_beforeF(arg0: java.lang.String | string, arg1: java.lang.String | string): string
                                    public static translateF(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string): string
                                    public static normalize_spaceF(arg0: int, arg1: com.sun.org.apache.xalan.internal.xsltc.DOM): string
                                    public static normalize_spaceF(arg0: java.lang.String | string): string
                                    public static generate_idF(arg0: int): string
                                    public static getLocalName(arg0: java.lang.String | string): string
                                    public static unresolved_externalF(arg0: java.lang.String | string): void
                                    public static unallowed_extension_functionF(arg0: java.lang.String | string): void
                                    public static unallowed_extension_elementF(arg0: java.lang.String | string): void
                                    public static unsupported_ElementF(arg0: java.lang.String | string, arg1: boolean): void
                                    public static namespace_uriF(arg0: com.sun.org.apache.xml.internal.dtm.DTMAxisIterator, arg1: com.sun.org.apache.xalan.internal.xsltc.DOM): string
                                    public static system_propertyF(arg0: java.lang.String | string): string
                                    public static namespace_uriF(arg0: int, arg1: com.sun.org.apache.xalan.internal.xsltc.DOM): string
                                    public static objectTypeF(arg0: java.lang.Object): string
                                    public static nodesetF(arg0: java.lang.Object): com.sun.org.apache.xml.internal.dtm.DTMAxisIterator
                                    public static compare(arg0: com.sun.org.apache.xml.internal.dtm.DTMAxisIterator, arg1: com.sun.org.apache.xml.internal.dtm.DTMAxisIterator, arg2: int, arg3: com.sun.org.apache.xalan.internal.xsltc.DOM): boolean
                                    public static compare(arg0: int, arg1: com.sun.org.apache.xml.internal.dtm.DTMAxisIterator, arg2: int, arg3: com.sun.org.apache.xalan.internal.xsltc.DOM): boolean
                                    public static compare(arg0: com.sun.org.apache.xml.internal.dtm.DTMAxisIterator, arg1: double, arg2: int, arg3: com.sun.org.apache.xalan.internal.xsltc.DOM): boolean
                                    public static compare(arg0: com.sun.org.apache.xml.internal.dtm.DTMAxisIterator, arg1: java.lang.String | string, arg2: int, arg3: com.sun.org.apache.xalan.internal.xsltc.DOM): boolean
                                    public static compare(arg0: java.lang.Object, arg1: java.lang.Object, arg2: int, arg3: com.sun.org.apache.xalan.internal.xsltc.DOM): boolean
                                    public static testLanguage(arg0: java.lang.String | string, arg1: com.sun.org.apache.xalan.internal.xsltc.DOM, arg2: int): boolean
                                    public static stringToReal(arg0: java.lang.String | string): double
                                    public static stringToInt(arg0: java.lang.String | string): int
                                    public static realToString(arg0: double): string
                                    public static realToInt(arg0: double): int
                                    public static formatNumber(arg0: double, arg1: java.lang.String | string, arg2: java.text.DecimalFormat): string
                                    public static referenceToNodeSet(arg0: java.lang.Object): com.sun.org.apache.xml.internal.dtm.DTMAxisIterator
                                    public static referenceToNodeList(arg0: java.lang.Object, arg1: com.sun.org.apache.xalan.internal.xsltc.DOM): org.w3c.dom.NodeList
                                    public static referenceToNode(arg0: java.lang.Object, arg1: com.sun.org.apache.xalan.internal.xsltc.DOM): org.w3c.dom.Node
                                    public static referenceToLong(arg0: java.lang.Object): long
                                    public static referenceToDouble(arg0: java.lang.Object): double
                                    public static referenceToBoolean(arg0: java.lang.Object): boolean
                                    public static referenceToString(arg0: java.lang.Object, arg1: com.sun.org.apache.xalan.internal.xsltc.DOM): string
                                    public static node2Iterator(arg0: org.w3c.dom.Node, arg1: com.sun.org.apache.xalan.internal.xsltc.Translet, arg2: com.sun.org.apache.xalan.internal.xsltc.DOM): com.sun.org.apache.xml.internal.dtm.DTMAxisIterator
                                    public static nodeList2Iterator(arg0: org.w3c.dom.NodeList, arg1: com.sun.org.apache.xalan.internal.xsltc.Translet, arg2: com.sun.org.apache.xalan.internal.xsltc.DOM): com.sun.org.apache.xml.internal.dtm.DTMAxisIterator
                                    public static referenceToResultTree(arg0: java.lang.Object): com.sun.org.apache.xalan.internal.xsltc.DOM
                                    public static getSingleNode(arg0: com.sun.org.apache.xml.internal.dtm.DTMAxisIterator): com.sun.org.apache.xml.internal.dtm.DTMAxisIterator
                                    public static copy(arg0: java.lang.Object, arg1: com.sun.org.apache.xml.internal.serializer.SerializationHandler, arg2: int, arg3: com.sun.org.apache.xalan.internal.xsltc.DOM): void
                                    public static checkAttribQName(arg0: java.lang.String | string): void
                                    public static checkNCName(arg0: java.lang.String | string): void
                                    public static checkQName(arg0: java.lang.String | string): void
                                    public static startXslElement(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: com.sun.org.apache.xml.internal.serializer.SerializationHandler, arg3: com.sun.org.apache.xalan.internal.xsltc.DOM, arg4: int): string
                                    public static getPrefix(arg0: java.lang.String | string): string
                                    public static generatePrefix(): string
                                    public static resetPrefixIndex(): void
                                    public static runTimeError(arg0: java.lang.String | string): void
                                    public static runTimeError(arg0: java.lang.String | string, arg1: java.lang.Object[]): void
                                    public static runTimeError(arg0: java.lang.String | string, arg1: java.lang.Object): void
                                    public static runTimeError(arg0: java.lang.String | string, arg1: java.lang.Object, arg2: java.lang.Object): void
                                    public static consoleOutput(arg0: java.lang.String | string): void
                                    public static replace(arg0: java.lang.String | string, arg1: char, arg2: java.lang.String | string): string
                                    public static replace(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String[]): string
                                    public static mapQNameToJavaName(arg0: java.lang.String | string): string
                                    public static getStringLength(arg0: java.lang.String | string): int
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
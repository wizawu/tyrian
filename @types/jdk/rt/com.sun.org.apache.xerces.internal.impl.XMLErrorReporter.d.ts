declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xerces {
                    namespace internal {
                        namespace impl {
                            class XMLErrorReporter implements com.sun.org.apache.xerces.internal.xni.parser.XMLComponent {
                                public static SEVERITY_WARNING: short
                                public static SEVERITY_ERROR: short
                                public static SEVERITY_FATAL_ERROR: short
                                protected static CONTINUE_AFTER_FATAL_ERROR: string
                                protected static ERROR_HANDLER: string
                                protected fLocale: java.util.Locale
                                protected fMessageFormatters: java.util.Map<java.lang.String, com.sun.org.apache.xerces.internal.util.MessageFormatter>
                                protected fErrorHandler: com.sun.org.apache.xerces.internal.xni.parser.XMLErrorHandler
                                protected fLocator: com.sun.org.apache.xerces.internal.xni.XMLLocator
                                protected fContinueAfterFatalError: boolean
                                protected fDefaultErrorHandler: com.sun.org.apache.xerces.internal.xni.parser.XMLErrorHandler
                                public constructor()
                                public setLocale(arg0: java.util.Locale): void
                                public getLocale(): java.util.Locale
                                public setDocumentLocator(arg0: com.sun.org.apache.xerces.internal.xni.XMLLocator): void
                                public putMessageFormatter(arg0: java.lang.String | string, arg1: com.sun.org.apache.xerces.internal.util.MessageFormatter | com.sun.org.apache.xerces.internal.util.MessageFormatter$$Lambda): void
                                public getMessageFormatter(arg0: java.lang.String | string): com.sun.org.apache.xerces.internal.util.MessageFormatter
                                public removeMessageFormatter(arg0: java.lang.String | string): com.sun.org.apache.xerces.internal.util.MessageFormatter
                                public reportError(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.Object[], arg3: short): string
                                public reportError(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.Object[], arg3: short, arg4: java.lang.Exception): string
                                public reportError(arg0: com.sun.org.apache.xerces.internal.xni.XMLLocator, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: java.lang.Object[], arg4: short): string
                                public reportError(arg0: com.sun.org.apache.xerces.internal.xni.XMLLocator, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: java.lang.Object[], arg4: short, arg5: java.lang.Exception): string
                                public reset(arg0: com.sun.org.apache.xerces.internal.xni.parser.XMLComponentManager): void
                                public getRecognizedFeatures(): java.lang.String[]
                                public setFeature(arg0: java.lang.String | string, arg1: boolean): void
                                public getFeature(arg0: java.lang.String | string): boolean
                                public getRecognizedProperties(): java.lang.String[]
                                public setProperty(arg0: java.lang.String | string, arg1: java.lang.Object): void
                                public getFeatureDefault(arg0: java.lang.String | string): boolean
                                public getPropertyDefault(arg0: java.lang.String | string): java.lang.Object
                                public getErrorHandler(): com.sun.org.apache.xerces.internal.xni.parser.XMLErrorHandler
                                public getSAXErrorHandler(): org.xml.sax.ErrorHandler
                                public static class: java.lang.Class<any>
                            }
                        }
                    }
                }
            }
        }
    }
}
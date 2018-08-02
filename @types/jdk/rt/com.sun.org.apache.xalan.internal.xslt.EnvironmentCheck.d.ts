declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xalan {
                    namespace internal {
                        namespace xslt {
class EnvironmentCheck {
    public static ERROR: string
    public static WARNING: string
    public static ERROR_FOUND: string
    public static VERSION: string
    public static FOUNDCLASSES: string
    public static CLASS_PRESENT: string
    public static CLASS_NOTPRESENT: string
    public jarNames: java.lang.String[]
    protected outWriter: java.io.PrintWriter
    public constructor()
    public static main(arg0: java.lang.String[]): void
    public checkEnvironment(arg0: java.io.PrintWriter): boolean
    public getEnvironmentHash(): java.util.Map<java.lang.String, java.lang.Object>
    protected writeEnvironmentReport(arg0: java.util.Map<java.lang.String, java.lang.Object>): boolean
    protected logFoundJars(arg0: java.util.List<java.util.Map>, arg1: java.lang.String | string): boolean
    public appendEnvironmentReport(arg0: org.w3c.dom.Node, arg1: org.w3c.dom.Document, arg2: java.util.Map<java.lang.String, java.lang.Object>): void
    protected appendFoundJars(arg0: org.w3c.dom.Node, arg1: org.w3c.dom.Document, arg2: java.util.List<java.util.Map>, arg3: java.lang.String | string): boolean
    protected checkSystemProperties(arg0: java.util.Map<java.lang.String, java.lang.Object>): void
    protected checkPathForJars(arg0: java.lang.String | string, arg1: java.lang.String[]): java.util.List<java.util.Map>
    protected getApparentVersion(arg0: java.lang.String | string, arg1: long): string
    protected checkJAXPVersion(arg0: java.util.Map<java.lang.String, java.lang.Object>): void
    protected checkProcessorVersion(arg0: java.util.Map<java.lang.String, java.lang.Object>): void
    protected checkParserVersion(arg0: java.util.Map<java.lang.String, java.lang.Object>): void
    protected checkAntVersion(arg0: java.util.Map<java.lang.String, java.lang.Object>): void
    protected checkDOML3(arg0: java.util.Map<java.lang.String, java.lang.Object>): boolean
    protected checkDOMVersion(arg0: java.util.Map<java.lang.String, java.lang.Object>): void
    protected checkSAXVersion(arg0: java.util.Map<java.lang.String, java.lang.Object>): void
    protected logMsg(arg0: java.lang.String | string): void
    public static class: java.lang.Class<any>
}

                        }
                    }
                }
            }
        }
    }
}
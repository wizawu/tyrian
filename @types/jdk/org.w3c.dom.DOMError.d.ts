declare namespace org {
  namespace w3c {
    namespace dom {
      interface DOMError {
        readonly SEVERITY_WARNING: short
        readonly SEVERITY_ERROR: short
        readonly SEVERITY_FATAL_ERROR: short
        getSeverity(): number
        getMessage(): java.lang.String
        getType(): java.lang.String
        getRelatedException(): java.lang.Object
        getRelatedData(): java.lang.Object
        getLocation(): org.w3c.dom.DOMLocator
      }
    }
  }
}

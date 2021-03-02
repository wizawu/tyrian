declare namespace com {
  namespace sun {
    namespace source {
      namespace doctree {

        interface ErroneousTree extends com.sun.source.doctree.TextTree {
          getDiagnostic(): javax.tools.Diagnostic<javax.tools.JavaFileObject>
        }

      }
    }
  }
}

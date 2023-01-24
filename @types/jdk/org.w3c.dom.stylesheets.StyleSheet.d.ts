declare namespace org {
  namespace w3c {
    namespace dom {
      namespace stylesheets {
        interface StyleSheet {
          getType(): java.lang.String
          getDisabled(): boolean
          setDisabled(arg0: boolean | java.lang.Boolean): void
          getOwnerNode(): org.w3c.dom.Node
          getParentStyleSheet(): org.w3c.dom.stylesheets.StyleSheet
          getHref(): java.lang.String
          getTitle(): java.lang.String
          getMedia(): org.w3c.dom.stylesheets.MediaList
        }
      }
    }
  }
}

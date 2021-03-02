declare namespace javax {
  namespace swing {
    namespace filechooser {

      abstract class FileView {
        public constructor()
        public getName(arg0: java.io.File): java.lang.String
        public getDescription(arg0: java.io.File): java.lang.String
        public getTypeDescription(arg0: java.io.File): java.lang.String
        public getIcon(arg0: java.io.File): javax.swing.Icon
        public isTraversable(arg0: java.io.File): boolean
      }

    }
  }
}

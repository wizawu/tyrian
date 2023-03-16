declare namespace javax {
  namespace tools {
    interface JavaFileManager$Location {
      getName(): java.lang.String
      isOutputLocation(): boolean
      isModuleOrientedLocation?(): boolean
    }
  }
}

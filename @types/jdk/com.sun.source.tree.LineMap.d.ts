declare namespace com {
  namespace sun {
    namespace source {
      namespace tree {

        interface LineMap {

          getStartPosition(arg0: long): long
          getPosition(arg0: long, arg1: long): long
          getLineNumber(arg0: long): long
          getColumnNumber(arg0: long): long
        }

      }
    }
  }
}

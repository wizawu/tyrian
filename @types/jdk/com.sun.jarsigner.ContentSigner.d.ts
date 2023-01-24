declare namespace com {
  namespace sun {
    namespace jarsigner {
      abstract class ContentSigner {
        public constructor()
        public abstract generateSignedData(
          arg0: com.sun.jarsigner.ContentSignerParameters,
          arg1: boolean | java.lang.Boolean,
          arg2: boolean | java.lang.Boolean
        ): number[]
      }
    }
  }
}

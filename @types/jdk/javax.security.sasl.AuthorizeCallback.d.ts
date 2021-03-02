declare namespace javax {
  namespace security {
    namespace sasl {

      class AuthorizeCallback implements javax.security.auth.callback.Callback, java.io.Serializable {
        public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string)
        public getAuthenticationID(): java.lang.String
        public getAuthorizationID(): java.lang.String
        public isAuthorized(): boolean
        public setAuthorized(arg0: boolean | java.lang.Boolean): void
        public getAuthorizedID(): java.lang.String
        public setAuthorizedID(arg0: java.lang.String | string): void
      }

    }
  }
}

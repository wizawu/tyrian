declare namespace org {
  namespace ietf {
    namespace jgss {
      class GSSException extends java.lang.Exception {
        public static readonly BAD_BINDINGS: int
        public static readonly BAD_MECH: int
        public static readonly BAD_NAME: int
        public static readonly BAD_NAMETYPE: int
        public static readonly BAD_STATUS: int
        public static readonly BAD_MIC: int
        public static readonly CONTEXT_EXPIRED: int
        public static readonly CREDENTIALS_EXPIRED: int
        public static readonly DEFECTIVE_CREDENTIAL: int
        public static readonly DEFECTIVE_TOKEN: int
        public static readonly FAILURE: int
        public static readonly NO_CONTEXT: int
        public static readonly NO_CRED: int
        public static readonly BAD_QOP: int
        public static readonly UNAUTHORIZED: int
        public static readonly UNAVAILABLE: int
        public static readonly DUPLICATE_ELEMENT: int
        public static readonly NAME_NOT_MN: int
        public static readonly DUPLICATE_TOKEN: int
        public static readonly OLD_TOKEN: int
        public static readonly UNSEQ_TOKEN: int
        public static readonly GAP_TOKEN: int
        public constructor(arg0: number | java.lang.Integer)
        constructor(arg0: number | java.lang.Integer, arg1: java.lang.String | string)
        public constructor(
          arg0: number | java.lang.Integer,
          arg1: number | java.lang.Integer,
          arg2: java.lang.String | string
        )
        public getMajor(): number
        public getMinor(): number
        public getMajorString(): java.lang.String
        public getMinorString(): java.lang.String
        public setMinor(arg0: number | java.lang.Integer, arg1: java.lang.String | string): void
        public toString(): java.lang.String
        public getMessage(): java.lang.String
      }
    }
  }
}

declare namespace sun {
    namespace security {
        namespace krb5 {
            namespace internal {
                namespace crypto {
                    class KeyUsage {
                        public static KU_UNKNOWN: int
                        public static KU_PA_ENC_TS: int
                        public static KU_TICKET: int
                        public static KU_ENC_AS_REP_PART: int
                        public static KU_TGS_REQ_AUTH_DATA_SESSKEY: int
                        public static KU_TGS_REQ_AUTH_DATA_SUBKEY: int
                        public static KU_PA_TGS_REQ_CKSUM: int
                        public static KU_PA_TGS_REQ_AUTHENTICATOR: int
                        public static KU_ENC_TGS_REP_PART_SESSKEY: int
                        public static KU_ENC_TGS_REP_PART_SUBKEY: int
                        public static KU_AUTHENTICATOR_CKSUM: int
                        public static KU_AP_REQ_AUTHENTICATOR: int
                        public static KU_ENC_AP_REP_PART: int
                        public static KU_ENC_KRB_PRIV_PART: int
                        public static KU_ENC_KRB_CRED_PART: int
                        public static KU_KRB_SAFE_CKSUM: int
                        public static KU_PA_FOR_USER_ENC_CKSUM: int
                        public static KU_AD_KDC_ISSUED_CKSUM: int
                        public static isValid(arg0: int): boolean
                        public static class: java.lang.Class<any>
                    }
                }
            }
        }
    }
}